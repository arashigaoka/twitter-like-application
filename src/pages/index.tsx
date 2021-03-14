import { gql, useMutation, useQuery } from '@apollo/client';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Button } from '../components/atoms/Button';
import { Card } from '../components/organisms/Card';
import {
  AddPostsMutation,
  AddPostsMutationVariables,
  Posts,
} from '../generated/graphql';
import { createDb, MyDatabase } from '../utils/Database';

const ADD_POSTS = gql`
  mutation addPosts($content: String!, $user_id: String!) {
    insert_posts(
      objects: { content: $content, user_id: $user_id }
      on_conflict: { constraint: posts_pkey, update_columns: content }
    ) {
      affected_rows
    }
  }
`;

export default function Top(): JSX.Element {
  const [db, setDb] = useState<MyDatabase | null>(null);
  const [posts, setPosts] = useState<Array<Posts>>([]);
  useEffect(() => {
    const f = async () => {
      const db = await createDb();
      db.posts
        .find()
        .sort({ created_at: 'desc' })
        .$.subscribe((posts) => setPosts(posts));
      setDb(db);
    };
    f();
  }, []);

  const [content, setContent] = useState('');
  const [addPosts] = useMutation<AddPostsMutation, AddPostsMutationVariables>(
    ADD_POSTS,
  );
  if (!db) {
    return <div>loading db...</div>;
  }
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="conntainer p-20">
        <h1 className="text-2xl bold">My Twitter Like Application</h1>
        <div className="flex space-x-10">
          <div className="mt-10">
            <h2 className="text-xl text-gray-700">Add Post</h2>
            <textarea
              cols={30}
              rows={3}
              className="block rounded"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Let's add posts!"
            />
            <Button
              label="Submit"
              clickHandler={() =>
                addPosts({
                  variables: { content, user_id: 'test1' },
                })
              }
            />
          </div>
          <div className="mt-10">
            <h2 className="text-xl text-gray-700">All Posts</h2>
            <ul className="space-y-2">
              {posts.map((post) => (
                <li key={post.id}>
                  <Card
                    id={post.id}
                    content={post.content}
                    userName={post.user.name}
                    replys={post.replys}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
