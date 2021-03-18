import Head from 'next/head';
import { Button } from '../atoms/Button';
import { Card } from '../organisms/Card';
import { useTop } from './use-top';

export const Top = (): JSX.Element => {
  const { posts, addPosts, content, setContent } = useTop();
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
            <Button label="Submit" clickHandler={addPosts} />
          </div>
          <div className="mt-10">
            <h2 className="text-xl text-gray-700">All Posts</h2>
            <ul className="space-y-2">
              {posts.map((post) => (
                <li key={post.id}>
                  <Card post={post} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
