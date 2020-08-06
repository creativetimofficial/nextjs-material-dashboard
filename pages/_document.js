import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/styles";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          {/* Anti-flicker snippet (recommended)  */}
          <style
            dangerouslySetInnerHTML={{
              __html: `.async-hide { opacity: 0 !important} `,
            }}
          ></style>
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;})(window,document.documentElement,'async-hide','dataLayer',4000,{'GTM-K9BGS8K':true});`,
            }}
          ></script>
          {/* Analytics-Optimize Snippet */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', 'UA-46172202-22', 'auto', {allowLinker: true});ga('set', 'anonymizeIp', true);ga('require', 'GTM-K9BGS8K');ga('require', 'displayfeatures');ga('require', 'linker');ga('linker:autoLink', ["2checkout.com","avangate.com"]);`,
            }}
          ></script>
          {/* end Analytics-Optimize Snippet */}
          {/* Google Tag Manager */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-NKDMSK6');`,
            }}
          ></script>
          {/* End Google Tag Manager */}
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href={require("assets/img/favicon.png")} />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={require("assets/img/apple-icon.png")}
          />
          {/* Extra details for Live View on GitHub Pages */}
          {/* Canonical SEO */}
          <link
            rel="canonical"
            href="https://www.creative-tim.com/product/nextjs-material-dashboard"
          />

          {/*  Social tags      */}
          <meta
            name="keywords"
            content="creative tim, react dashboard, nextjs dashboard, react nextjs dashboard, web dashboard, material-ui dashboard, material-ui, css3 dashboard, nextjs admin, nextjs dashboard material ui dashboard, frontend, responsive nextjs dashboard, material design, nextjs dashboard react dashboard"
          />
          <meta
            name="description"
            content="NextJS Material Dashboard is a free Material-UI, NextJS and React Admin with a fresh, new design inspired by Google's Material Design."
          />

          {/* Schema.org markup for Google+ */}
          <meta
            itemprop="name"
            content="NextJS Material Dashboard by Creative Tim"
          />
          <meta
            itemprop="description"
            content="NextJS Material Dashboard is a free Material-UI, NextJS and React Admin with a fresh, new design inspired by Google's Material Design."
          />

          <meta
            itemprop="image"
            content="https://s3.amazonaws.com/creativetim_bucket/products/341/opt_md_nextjs_thumbnail.jpg"
          />

          {/* Twitter Card data */}
          <meta name="twitter:card" content="product" />
          <meta name="twitter:site" content="@creativetim" />
          <meta
            name="twitter:title"
            content="NextJS Material Dashboard by Creative Tim"
          />

          <meta
            name="twitter:description"
            content="NextJS Material Dashboard is a free Material-UI, NextJS and React Admin with a fresh, new design inspired by Google's Material Design."
          />
          <meta name="twitter:creator" content="@creativetim" />
          <meta
            name="twitter:image"
            content="https://s3.amazonaws.com/creativetim_bucket/products/341/opt_md_nextjs_thumbnail.jpg"
          />

          {/* Open Graph data */}
          <meta property="fb:app_id" content="655968634437471" />
          <meta
            property="og:title"
            content="NextJS Material Dashboard by Creative Tim"
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:url"
            content="http://demos.creative-tim.com/nextjs-material-dashboard/admin/dashboard"
          />
          <meta
            property="og:image"
            content="https://s3.amazonaws.com/creativetim_bucket/products/341/opt_md_nextjs_thumbnail.jpg"
          />
          <meta
            property="og:description"
            content="NextJS Material Dashboard is a free Material-UI, NextJS and React Admin with a fresh, new design inspired by Google's Material Design."
          />
          <meta property="og:site_name" content="Creative Tim" />
          {/* Fonts and icons */}
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"
          />
          <script src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NKDMSK6"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
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
