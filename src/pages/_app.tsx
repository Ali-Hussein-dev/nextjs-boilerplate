import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import '../css/global.css';
import { theme } from '@chakra-ui/react';
const devMode = process.env.screen_breakpoint;

const MyApp: React.FC<{ Component: React.FC; pageProps: any }> = ({
  Component,
  pageProps,
}): JSX.Element => {
  return (
    <div className={`${devMode ? 'debug-screens' : ''}`}>
      <ChakraProvider theme={theme}>
        <link rel="icon" href="/favicon.ico" />
        <title>Home</title>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
};

export default MyApp;
