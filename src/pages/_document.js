import { createGetInitialProps } from "@mantine/next";
import Document, { Head, Html, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default class _Document extends Document {
  static getInitialProps = getInitialProps;

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TMSSD27"
              height="0" width="0" style="display:none;visibility:hidden"/>`,
            }}
          />
        </body>
      </Html>
    );
  }
}
