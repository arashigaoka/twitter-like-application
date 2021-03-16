import {
  createRxDatabase,
  RxDatabase,
  RxCollection,
  RxJsonSchema,
  addRxPlugin,
  RxDocument,
} from 'rxdb';
import { PullPostsQuery } from '../generated/graphql';
import pouchdbAdapterIdb from 'pouchdb-adapter-idb';
import { RxDBReplicationGraphQLPlugin } from 'rxdb/plugins/replication-graphql';
import { gql } from '@apollo/client';
import { print } from 'graphql';
import dayjs from 'dayjs';

addRxPlugin(RxDBReplicationGraphQLPlugin);
addRxPlugin(pouchdbAdapterIdb);

type postDocType = Omit<PullPostsQuery['posts'][0], 'deleted'>;
export type PostCollection = RxCollection<postDocType>;
type PostsDocument = RxDocument<PostCollection>;
type MyDatabaseCollections = { posts: PostCollection };
export type MyDatabase = RxDatabase<MyDatabaseCollections>;

const postSchema: RxJsonSchema<postDocType> = {
  title: 'post schema',
  description: 'describes post schema',
  version: 0,
  type: 'object',
  properties: {
    id: {
      type: 'string',
      primary: true,
    },
    user_id: {
      type: 'string',
    },
    content: {
      type: 'string',
    },
    created_at: {
      type: 'string',
    },
    updated_at: {
      type: 'string',
    },
    user: {
      type: 'object',
    },
    replys: {
      type: 'array',
    },
  },
  indexes: ['created_at'],
  required: ['id', 'content', 'user_id'],
};

const pullQuery = gql`
  query pullPosts($updated_at: timestamptz!, $id: uuid) {
    posts(
      where: {
        _or: [
          { updated_at: { _gt: $updated_at } }
          { updated_at: { _eq: $updated_at }, id: { _gt: $id } }
        ]
      }
      order_by: [{ updated_at: asc }, { id: asc }]
    ) {
      id
      user_id
      content
      created_at
      updated_at
      deleted
      user {
        name
      }
      replys {
        id
        user_id
        replied_user_id
        comment
      }
    }
  }
`;

const pullQueryBuilder = (doc: PostsDocument) => {
  const id = doc?.id;
  const updated_at = doc?.updated_at || dayjs().format('YYYY-MM-DD');
  const query = print(pullQuery);
  return {
    query,
    variables: { id, updated_at },
  };
};

const pushQuery = gql`
  mutation addPosts($post: [posts_insert_input!]!) {
    insert_posts(
      objects: $post
      on_conflict: { constraint: posts_pkey, update_columns: content }
    ) {
      affected_rows
    }
  }
`;

const pushQueryBuilder = (doc: PostsDocument) => {
  const query = print(pushQuery);
  const replys = {
    data: doc.replys || [],
    on_conflict: {
      constraint: 'replys_pkey',
      update_columns: ['comment'],
    },
  };
  const { id, user_id, content, deleted } = doc;
  const variables = {
    post: {
      id,
      user_id,
      content,
      deleted,
      replys,
    },
  };
  return {
    query,
    variables,
  };
};

const _create = async (): Promise<MyDatabase> => {
  const myDatabase = await createRxDatabase<MyDatabaseCollections>({
    name: 'mydb',
    adapter: 'idb',
  });
  await myDatabase.addCollections({
    posts: {
      schema: postSchema,
    },
  });

  console.log('DatabaseService: created database');
  const replicationState = myDatabase.posts.syncGraphQL({
    url: 'http://localhost:8080/v1/graphql',
    deletedFlag: 'deleted',
    pull: {
      queryBuilder: pullQueryBuilder,
    },
    push: {
      queryBuilder: pushQueryBuilder,
    },
    live: true,
  });
  replicationState.error$.subscribe((err) => {
    console.error(err);
  });
  return myDatabase;
};

let dbPromise: Promise<MyDatabase> | null = null;
export const createDb = (): Promise<MyDatabase> => {
  if (!dbPromise) {
    dbPromise = _create();
  }
  return dbPromise;
};
