import { useCallback, useEffect, useState } from 'react';
import { postDocType } from '../../utils/Database';
import { RxDocument } from 'rxdb';
import { useDatabase } from '../../hooks/use-database';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

export type TopResponse = {
  posts: Array<RxDocument<postDocType>>;
  addPosts: () => void;
  content: string;
  setContent: (content: string) => void;
};
export const useTop = (): TopResponse => {
  const db = useDatabase();
  const [posts, setPosts] = useState<Array<RxDocument<postDocType>>>([]);
  useEffect(() => {
    db.posts
      .find()
      .sort({ created_at: 'desc' })
      .$.subscribe((posts) => setPosts(posts));
  }, [db.posts]);
  const [content, setContent] = useState('');
  const addPosts = useCallback(() => {
    db.posts.upsert({
      id: uuidv4(),
      content,
      user_id: 'test2',
      created_at: dayjs().format(),
      replys: [],
      user: { name: 'I_am_test2' },
    });
    setContent('');
  }, [db, content]);
  return { posts, addPosts, content, setContent };
};
