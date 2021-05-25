import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="DefiFarms  - The First NFTs Protocol Powerful Automatic Liquidity Acquisition Yield Farm & AMM on Binance Smart Chain"
          />
          <meta
            name="keywords"
            content="defifarms, defi, nft, nft protocol, amm, yield farming, yield farm, auto liquidity provider"
          />
          <meta
            property="og:image"
            content="https://media.graphcms.com/output=format:jpg/nL7obH1qTWa15XW9Jbhg?_ga=2.48402534.19753175.1620827862-2077535728.1620827862"
          />
          <link rel="shortcut icon" href={require("assets/img/favicon.png")} />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={require("assets/img/apple-icon.png")}
          />
          {/* Fonts and icons */}
          <link
            href="https://use.fontawesome.com/releases/v5.0.10/css/all.css"
            rel="stylesheet"
          />
          {/* <link
            type="text/css"
            rel="stylesheet"
            charset="UTF-8"
            href="https://translate.googleapis.com/translate_static/css/translateelement.css"
          ></link> */}
          <script
            type="text/javascript"
            charset="UTF-8"
            async
            src="https://translate.googleapis.com/translate_static/js/element/main.js"
          ></script>
          <script
            type="text/javascript"
            charset="UTF-8"
            async
            src="https://translate.googleapis.com/element/TE_20210224_00/e/js/element/element_main.js"
          ></script>
        </Head>
        <body>
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>

        <script
          async
          type="text/javascript"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        ></script>
      </html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>,
    ],
  };
};

export default MyDocument;
