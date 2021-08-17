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
    <div className={`${devMode ? 'debug-screens' : ''} bg-hero-polka-dots-100`}>
      <ChakraProvider theme={theme}>
        <link rel="icon" href="/favicon.ico" />
        <title>Nextjs-boilerplate</title>
        <Component {...pageProps} />
      </ChakraProvider>
    </div>
  );
};

export default MyApp;
