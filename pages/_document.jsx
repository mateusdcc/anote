import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="br" data-theme="wireframe" className="scroll-smooth">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cantarell:wght@700&family=El+Messiri&family=Fira+Sans+Extra+Condensed:ital,wght@0,100;0,200;0,300;0,400;1,100;1,200;1,300;1,400&family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&family=Oxygen&family=Roboto:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
