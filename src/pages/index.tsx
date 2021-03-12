import { gql, useQuery } from '@apollo/client';
import Head from 'next/head';
import { GetPostsQuery } from '../generated/graphql';

const GET_POSTS = gql`
  query getPosts {
    posts {
      id
      user_id
      title
    }
  }
`;

export default function Top(): JSX.Element {
  const { loading, error, data } = useQuery<GetPostsQuery>(GET_POSTS);
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
      <div className="flex flex-col justify-center items-center h-screen">
        {data.posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </div>
    </>
  );
}
