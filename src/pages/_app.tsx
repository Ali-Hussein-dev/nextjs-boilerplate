import { ChakraProvider } from '@chakra-ui/react';
import '../css/global.css';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Poppins, Sans-serif',
      },
    },
  },
});
const MyApp: React.FC<{ Component: React.FC; pageProps: any }> = ({
  Component,
  pageProps,
}): JSX.Element => {
  return (
    <ChakraProvider theme={theme}>
      <link rel="icon" href="/favicon.ico" />
      <title>Nextjs-boilerplate</title>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
