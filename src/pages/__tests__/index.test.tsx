import HomePage from '@/pages/index';
import { render } from 'src/testUtils/testUtils';

describe('Home page', () => {
  it('Should  WHEN ', () => {
    const { container } = render(<HomePage />);
    expect(container).toBeDefined();
  });
});
