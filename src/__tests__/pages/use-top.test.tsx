import { renderHook, RenderResult } from '@testing-library/react-hooks';
import { TopResponse, useTop } from '../../components/pages/use-top';
import { useDatabase } from '../../hooks/use-database';
import { addRxPlugin, createRxDatabase, RxDatabase } from 'rxdb';
import pouchdbAdapterMemory from 'pouchdb-adapter-memory';
import { postSchema } from '../../utils/Database';

const sleep = (value: number) =>
  new Promise((resolve) => setTimeout(resolve, value));

jest.mock('../../hooks/use-database');
describe('use-top', () => {
  let result: RenderResult<TopResponse> | null = null;
  let testDb: RxDatabase | null = null;
  beforeAll(async () => {
    addRxPlugin(pouchdbAdapterMemory);
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
  afterAll(async (done) => {
    await testDb?.destroy();
    await sleep(1500);
    done();
  });
});
