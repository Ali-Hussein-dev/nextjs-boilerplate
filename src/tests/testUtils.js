/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import { QueryClient, QueryClientProvider } from 'react-query';

const Providers = ({ children }) => {
  const mockRouter = { query: { query: 'hire' }, push: jest.fn };
  const queryClient = new QueryClient();

  return (
    <ChakraProvider>
      <RouterContext.Provider value={mockRouter}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </RouterContext.Provider>
    </ChakraProvider>
  );
};
const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
