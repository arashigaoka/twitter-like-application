import {
  createRxDatabase,
  RxDatabase,
  RxCollection,
  RxJsonSchema,
  addRxPlugin,
  RxDocument,
} from 'rxdb';
import { Posts } from '../generated/graphql';
import pouchdbAdapterIdb from 'pouchdb-adapter-idb';
import { RxDBReplicationGraphQLPlugin } from 'rxdb/plugins/replication-graphql';

addRxPlugin(RxDBReplicationGraphQLPlugin);
addRxPlugin(pouchdbAdapterIdb);

type MyPosts = RxCollection<Posts>;
type MyDatabaseCollections = { posts: MyPosts };
type PostsDocument = RxDocument<MyPosts>;
export type MyDatabase = RxDatabase<MyDatabaseCollections>;

const postSchema: RxJsonSchema<Partial<Posts>> = {
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
    replys_aggregate: {
      type: 'object',
    },
  },
  indexes: ['created_at'],
  required: ['id', 'content', 'user_id'],
};

const pullQueryBuilder = (doc: PostsDocument) => {
  const id = doc?.id;
  const updated_at = doc?.updated_at || '2021-03-14';
  const query = `{
    posts(
      where: {
        _or: [
          {updated_at: {_gt: "${updated_at}"}},
          {
            updated_at: {_eq: "${updated_at}"}${id ? `,id: {_gt: "${id}"}` : ''}
          }
        ]
      }, order_by: {updated_at: desc}) {
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
        comment
      }
    }
  }`;
  return {
    query,
    variables: {},
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
