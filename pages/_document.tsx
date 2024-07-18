import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin={'anonymous'}
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
        <Script id='plausible-analytics' defer strategy='beforeInteractive' data-domain='ariadneantipa.com' src='https://plausible.io/js/script.js'></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};