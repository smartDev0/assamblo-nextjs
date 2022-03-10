import React from 'react';
import Document, { Head, Main, NextScript, Html } from 'next/document';
import { getTranslationLocale } from '../utils/translations';
import { TranslationsLanguageEnum } from '../data/translations/enums';

class MyDocument extends Document {
  static lang = 'en';

  static cliengoScript = {
    __html: `(function () { var ldk = document.createElement('script'); ldk.type = 'text/javascript'; ldk.async = true; ldk.src = 'https://s.cliengo.com/weboptimizer/5f466cf90d67af002a15fe51/5f466cfa0d67af002a15fe58.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ldk, s); })();`,
  };

  static async getInitialProps(ctx) {
    MyDocument.lang = getTranslationLocale(ctx.asPath);
    if (MyDocument.lang === TranslationsLanguageEnum.ES) {
      MyDocument.cliengoScript = {
        __html: `
        (function () { var ldk = document.createElement('script'); ldk.type = 'text/javascript'; ldk.async = true; ldk.src = 'https://s.cliengo.com/weboptimizer/5f466cf90d67af002a15fe51/5f51698dad3484002adbf236.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ldk, s); })();
        `,
      };
    }
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={MyDocument.lang}>
        <Head>
          <link
            rel="apple-touch-icon-precomposed"
            sizes="144x144"
            href="/img/logo-iso.png"
          />
          <link
            rel="apple-touch-icon-precomposed"
            sizes="152x152"
            href="/img/logo-iso.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/logo-iso.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            type="image/png"
            href="/img/logo-iso.png"
            sizes="16x16"
          />
          <meta name="application-name" content="Asamblo" />
          <meta name="msapplication-TileColor" content="#FFFFFF" />
          <meta name="msapplication-TileImage" content="/img/logo-iso.png" />
          <meta property="og:image" content="/img/share-image.jpg" />
        </Head>

        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              title="gtm"
              src="https://www.googletagmanager.com/ns.html?id=GTM-PTSLSCX"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          <Main />

          {/* Google Tag Manager */}
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PTSLSCX');`,
            }}
          />
          {/* End Google Tag Manager */}

          {/* Cliengo Script */}
          <script
            type="text/javascript"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={MyDocument.cliengoScript}
          />
          {/* End Cliengo Script */}

          {/* Clutch Script */}
          <script
            type="text/javascript"
            src="https://widget.clutch.co/static/js/widget.js"
          />
          {/* End Clutch Script */}

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
