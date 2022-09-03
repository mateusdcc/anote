import "../styles/globals.css";
import Head from "next/head";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ANote</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="app">
        <NextNProgress
          color="#29D"
          startPosition={0.6}
          stopDelayMs={100}
          height={2}
          showOnShallow={true}
          options={{
            showSpinner: false,
          }}
        />
        <div className="mt-16 overflow-x-hidden">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
