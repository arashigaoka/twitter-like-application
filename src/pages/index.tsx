import { gql, useMutation, useQuery } from '@apollo/client';
import Head from 'next/head';
import { useState } from 'react';
import {
  GetPostsQuery,
  AddPostsMutation,
  AddPostsMutationVariables,
} from '../generated/graphql';

const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      user_id
      content
      user {
        name
      }
    }
  }
`;

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
  const { loading, error, data } = useQuery<GetPostsQuery>(GET_POSTS);
  const [content, setContent] = useState('');
  const [addPosts] = useMutation<AddPostsMutation, AddPostsMutationVariables>(
    ADD_POSTS,
  );
  if (loading) {
    return <div>loading...</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  if (!data) {
    return <div>nodata</div>;
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
            <button
              type="button"
              className="mt-1 bg-blue-400 hover:bg-blue-700 text-white p-2"
              onClick={(e) => {
                addPosts({
                  variables: { content, user_id: 'test1' },
                });
              }}
            >
              Submit
            </button>
          </div>
          <div className="mt-10">
            <h2 className="text-xl text-gray-700">All Posts</h2>
            <ul>
              {data.posts.map((post) => (
                <li key={post.id} className="border p-4">
                  <div>{post.content}</div>
                  <div className="text-gray-700 text-sm text-right">
                    by {post.user.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
