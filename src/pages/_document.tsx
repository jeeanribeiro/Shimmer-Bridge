import {Head, Html, Main, NextScript} from 'next/document';

const AppDocument = () => {
  const fontFaceStyles = `
    @font-face {
      font-family: 'Silka';
      font-style: normal;
      font-weight: 100;
      font-display: swap;
      src: url('/static/fonts/silka/silka-thin-webfont.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Silka';
      font-style: normal;
      font-weight: 200;
      font-display: swap;
      src: url('/static/fonts/silka/silka-extralight-webfont.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Silka';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: url('/static/fonts/silka/silka-light-webfont.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Silka';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url('/static/fonts/silka/silka-regular-webfont.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Silka';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: url('/static/fonts/silka/silka-medium-webfont.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Silka';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: url('/static/fonts/silka/silka-semibold-webfont.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Silka';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url('/static/fonts/silka/silka-bold-webfont.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Silka';
      font-style: normal;
      font-weight: 800;
      font-display: swap;
      src: url('/static/fonts/silka/silka-black-webfont.woff2') format('woff2');
    }
    @font-face {
      font-family: 'Silka';
      font-style: normal;
      font-weight: 900;
      font-display: swap;
      src: url('/static/fonts/silka/silka-black-webfont.woff2') format('woff2');
    }
  `;

  return (
    <Html lang='en'>
      <Head>
      <link
          rel="preload"
          href="/static/fonts/silka/silka-thin-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/static/fonts/silka/silka-extralight-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/static/fonts/silka/silka-light-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/static/fonts/silka/silka-regular-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/static/fonts/silka/silka-medium-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/static/fonts/silka/silka-semibold-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/static/fonts/silka/silka-bold-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/static/fonts/silka/silka-black-webfont.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <style dangerouslySetInnerHTML={{ __html: fontFaceStyles }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default AppDocument;
