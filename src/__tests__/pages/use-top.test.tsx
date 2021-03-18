import { renderHook } from '@testing-library/react-hooks';
import { useTop } from '../../components/pages/use-top';
import { useDatabase } from '../../hooks/use-database';
import { addRxPlugin, createRxDatabase, RxDatabase } from 'rxdb';
import pouchdbAdapterMemory from 'pouchdb-adapter-memory';
import { postSchema } from '../../utils/Database';

addRxPlugin(pouchdbAdapterMemory);
jest.mock('../../hooks/use-database');
describe('use-top', () => {
  let result: any = null;
  let testDb: RxDatabase | null = null;
  beforeAll(async () => {
    testDb = await createRxDatabase({
      name: 'testdb',
      adapter: 'memory',
    });
    await testDb.addCollections({
      posts: {
        schema: postSchema,
      },
    });
    (useDatabase as jest.Mock).mockImplementation(() => testDb);
    result = renderHook(() => useTop()).result;
  });
  it('render', () => {
    expect(result?.current?.posts?.length).toBe(0);
  });
  afterAll(async () => {
    await testDb?.destroy();
  });
});
