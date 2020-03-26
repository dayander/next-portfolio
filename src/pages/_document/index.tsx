import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta content="width=device-width, initial-scale=1" name="viewport" />

          <meta
            content="Anderson Day's accessibility and software development portfolio."
            name="description"
          />

          <meta
            content="Anderson Day, Portfolio, Accessibility, a11y, frontend,
        Anderson, Michigan State, engineer, developer, software"
            name="keywords"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
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
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};

// import React from 'react';
// import Document, { Html, Head, Main, NextScript } from 'next/document';
// import { ServerStyleSheet } from 'styled-components';
//
// export default class MyDocument extends Document<any> {
//   static async getInitialProps(ctx: any) {
//     const sheet = new ServerStyleSheet();
//     const originalRenderPage = ctx.renderPage;
//
//     try {
//       // wraps the collectStyles provider around our <App />.
//       ctx.renderPage = () =>
//         originalRenderPage({
//           enhanceApp: (App: typeof React.Component) => (props: JSX.IntrinsicAttributes) =>
//             sheet.collectStyles(<App {...props} />),
//         });
//
//       // extract the initial props that may be present.
//       const initialProps = await Document.getInitialProps(ctx);
//
//       // returning the original props together with our styled components.
//       return {
//         ...initialProps,
//         styles: (
//           <>
//             {initialProps.styles}
//             {sheet.getStyleElement()}
//           </>
//         ),
//       };
//     } finally {
//       sheet.seal();
//     }
//   }
//
//   render() {
//     return (
//       <Html>
//         <Head>
//           {this.props.styleTags /*rendering the actual stylesheet*/}
//           <link
//             href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
//             rel="stylesheet"
//           />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }
