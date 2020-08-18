import React from 'react';
import Document, {
  DocumentContext, Html, Head, Main, NextScript,
} from 'next/document';

// Note : this is written with class type component beacuse next.js supports it
// This must include only "static" things like innerHTML

class WDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>

          {/* Document Domain Configuration */}
          <script
            dangerouslySetInnerHTML={{
              __html: 'if (document.domain && document.domain.indexOf("wldh.org") > -1) { document.domain = "wldh.org"; }',
            }}
          />

          {/* Modarkbul - dark/light theme */}
          <script
            dangerouslySetInnerHTML={{
              __html: '(function () { var modarkbul = window.localStorage.getItem("modarkbul"); var isDark = ((modarkbul === null) && window.matchMedia("(prefers-color-scheme: dark)").matches) || (modarkbul === "dark"); document.documentElement.dataset.theme = isDark ? "dark" : "light"; document.documentElement.style.setProperty("background-color", isDark ? "#000000" : "#ffffff"); })();',
            }}
          />

          {/* Styles */}
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700&display=swap&subset=korean"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Fira+Mono&display=swap"
            rel="stylesheet"
          />

          {/* Set language  */}
          <script
            dangerouslySetInnerHTML={{
              __html: '(function () { document.documentElement.lang = navigator.language.indexOf("ko") > -1 ? "ko" : "en"; })();',
            }}
          />

          {/* IE check metric using  */}
          <script
            dangerouslySetInnerHTML={{
              __html: '(function () { var agent = navigator.userAgent.toLowerCase(); window.isIE = (navigator.appName === "Netscape" && agent.indexOf("trident") !== -1) || agent.indexOf("msie") !== -1; })();',
            }}
          />

        </Head>
        <body>

          {/* No Javascript Environment Alert */}
          <noscript>
            <div id="feature-alert-form">
              <div className="feature-alert-text">
                <em>JavaScript is now disabled. Please turn it on for full page rendering.</em>
                <em>JavaScript가 꺼져 있습니다. 완전한 페이지 표시를 위해 JavaScript를 켜 주세요.</em>
              </div>
            </div>
            <link rel="stylesheet" id="feature-alert-style" href="/styles/feature-alert.min.css" />
          </noscript>

          {/* Next Main */}
          <Main />
          <NextScript />

        </body>
      </Html>
    );
  }
}

export default WDocument;
