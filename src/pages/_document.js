/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style data-href="https://fonts.googleapis.com/css2?family=Inter">
            {`@font-face{font-weight:100-900;fontFamily: "Inter";}`}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
