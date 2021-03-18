import TestRenderer from 'react-test-renderer';
import Top from '../pages/index';
import { DatabaseProvider } from '../hooks/use-database';

describe('test', () => {
  test('renders properly', () => {
    const testRenderer = TestRenderer.create(
      <DatabaseProvider>
        <Top />
      </DatabaseProvider>,
    );
    const tree = testRenderer.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
