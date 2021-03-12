import TestRenderer from 'react-test-renderer';
import { Button } from '../components/atoms/Button';
import { SimpleList } from '../components/molecules/SimpleList';
import Top from '../pages/index';

describe('test', () => {
  test('renders properly', () => {
    const testRenderer = TestRenderer.create(<Top />);
    const button = testRenderer.root.findByType(Button);
    expect(button.props.label).toBe('Click Me!');
    const simpleList = testRenderer.root.findByType(SimpleList);
    expect(simpleList.props.labelList.length).toBe(4);
  });
});
