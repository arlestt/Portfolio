import Document, { Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <Html lang='en-GB'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
          <meta name="title" content="JJ Loknath - Full Stack Developer" />
          <meta name="description" content="Hey there! I'm J J Loknath and pursuing a bachelor's degree in Computer Science at IIITM Gwalior. I'm a Full Stack developer and I have also took a glance at blockchain technology. I also enjoy solving programming questions and believe in working hard and enjoying life as well.Always open to new opportunities!" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="JJ Loknath - Full Stack Developer" />
          <meta property="og:description" content="Hey there! I'm J J Loknath and pursuing a bachelor's degree in Computer Science at IIITM Gwalior. I'm a Full Stack developer and I have also took a glance at blockchain technology. I also enjoy solving programming questions and believe in working hard and enjoying life as well.Always open to new opportunities!" />
          <meta property="og:image" content="https://www.vipuljha.com/images/banner.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="JJ Loknath - Full Stack Developer" />
          <meta property="twitter:description" content="Hey there! I'm J J Loknath and pursuing a bachelor's degree in Computer Science at IIITM Gwalior. I'm a Full Stack developer and I have also took a glance at blockchain technology. I also enjoy solving programming questions and believe in working hard and enjoying life as well.Always open to new opportunities!" />
          <meta property="twitter:image" content="https://www.vipuljha.com/images/banner.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
