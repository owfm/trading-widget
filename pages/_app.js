import Head from 'next/head';
import '../styles/css-reset.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@600&family=Mulish:wght@400;600;700&display=swap"
        />
      </Head>
      ;
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
