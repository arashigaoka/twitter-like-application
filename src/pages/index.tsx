import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Button } from '../components/atoms/Button';
import { Card } from '../components/organisms/Card';
import { postDocType } from '../utils/Database';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';
import { useDatabase } from '../hooks/use-database';
import { RxDocument } from 'rxdb';

export default function Top(): JSX.Element {
  const db = useDatabase();
  const [posts, setPosts] = useState<Array<RxDocument<postDocType>>>([]);
  useEffect(() => {
    db.posts
      .find()
      .sort({ created_at: 'desc' })
      .$.subscribe((posts) => setPosts(posts));
  }, [db.posts]);

  const [content, setContent] = useState('');
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
                db.posts.upsert({
                  id: uuidv4(),
                  content,
                  user_id: 'test2',
                  created_at: dayjs().format(),
                  replys: [],
                  user: { name: 'I am tester' },
                })
              }
            />
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
}
