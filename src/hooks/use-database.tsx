import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { createDb, MyDatabase } from '../utils/Database';

const dbContext = createContext<MyDatabase | null>(null);

export const DatabaseProvider: React.FC = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const [db, setDb] = useState<MyDatabase | null>(null);
  useEffect(() => {
    createDb().then(setDb);
  }, []);
  if (db == null) return <div>loading...</div>;
  return <dbContext.Provider value={db}>{children}</dbContext.Provider>;
};

export function useDatabase(): MyDatabase {
  const db = useContext(dbContext);
  if (db === null) throw new Error('please use DatabaseProvider');

  return db;
}
