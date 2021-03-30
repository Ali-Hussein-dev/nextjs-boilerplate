import { CondComp, AsyncCondComp } from '@/components/index';
import { screen } from '@testing-library/dom';
import { render } from '../testUtils';

/**
 * outline test cases
 * - Should be empty WHEN baseCond falsy and fallback null
 * - Should render children without wrapper WHEN both props baseCond & isFragment truthy
 * - Should render UI placeholder WHEN baseCond falsy
 * - Should render children WHEN baseCond truthy
 * Async Conditional Component
 * - Should render children WHEN isSuccess truthy
 * - Should render the default loading indicator WHEN isLoading truthy
 * - Should render the default fallback-error WHEN isError truthy
 */
describe('Conditional Component', () => {
  it('Should be empty WHEN baseCond is falsy', () => {
    const { container } = render(
      <CondComp baseCond={false}>children</CondComp>
    );
    expect(container).toBeEmptyDOMElement();
  });
  //--------------------------------------
  it('Should render UI placeholder WHEN baseCond is falsy', () => {
    const { container } = render(
      <CondComp baseCond={false} fallback={<div>UI placeholder</div>}>
        children
      </CondComp>
    );
    expect(container).toHaveTextContent('UI placeholder');
    expect(container).not.toHaveTextContent('children');
  });
  //--------------------------------------
  it('Should render children WHEN baseCond is truthy', () => {
    const { container } = render(<CondComp baseCond={true}>children</CondComp>);
    expect(container).toHaveTextContent('children');
  });
  //--------------------------------------
  test('Should render children without wrapper WHEN both baseCond & isFragment truthy', () => {
    render(
      <CondComp baseCond={true} isFragment>
        children
      </CondComp>
    );
    const ccContainer = screen.queryByTestId('cc-container');
    expect(ccContainer).toBeNull();
  });
  //--------------------------------------
});

describe('Async Conditional Component', () => {
  it('Should render children WHEN isSuccess truthy', () => {
    const { rerender, container } = render(
      <AsyncCondComp isSuccess={true}>children</AsyncCondComp>
    );
    expect(container.children).toBeTruthy();
    expect(container.childElementCount).toEqual(1);
    rerender(
      <AsyncCondComp isSuccess={true} isFragment>
        children
      </AsyncCondComp>
    );
    expect(container.childElementCount).toEqual(0);
  });
  //--------------------------------------
  it('Should render the default loading indicator WHEN isLoading truthy', () => {
    const { rerender } = render(
      <AsyncCondComp isSuccess={false} isLoading>
        children
      </AsyncCondComp>
    );
    let loadingSpinner = screen.getByTestId('loading-indicator');
    expect(loadingSpinner).toBeInTheDocument();
    rerender(
      <AsyncCondComp isSuccess={true} isLoading={false}>
        children
      </AsyncCondComp>
    );
    loadingSpinner = screen.queryByTestId('loading-indicator');
    expect(loadingSpinner).toBe(null);
  });
  //--------------------------------------
  it('Should render the default fallback-error WHEN isError truthy', () => {
    const { container } = render(
      <AsyncCondComp isSuccess={false} isError>
        Children
      </AsyncCondComp>
    );
    const fallbackError = screen.queryByTestId('fallback-error');
    expect(container).not.toHaveTextContent('children');
    expect(fallbackError).toBeInTheDocument();
  });
  //--------------------------------------
});
