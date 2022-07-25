import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
import { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }
    render() {
        return (
            <Html>
                <Head>
                    <meta name="title" content="Hernandes - Blog" />
                    <meta
                        name="description"
                        content="Blog para compartilhar dicas, teorias e códigos de desenvolvimento frontend: React, Typescript, Strapi, etc. "
                    />
                    <meta
                        name="keywords"
                        content="blog, javascript, strapi, typescript, html, css, snippets, tips, desenvolvimento, react, nextjs, frontend, web, github"
                    />
                    <meta name="robots" content="index, follow" />
                    <meta
                        httpEquiv="Content-Type"
                        content="text/html; charset=utf-8"
                    />
                    <meta name="language" content="Portuguese" />
                    <meta name="revisit-after" content="3 days" />
                    <meta name="author" content="Gustavo Hernandes " />
                    <link rel="icon" href="/favicon.ico" />
                    {/* Fonte Century Gothic */}
                    <link
                        rel="stylesheet"
                        href="https://use.typekit.net/oov2wcw.css"
                    ></link>
                    {/* Fonte Raleway */}
                    <link
                        rel="preconnect"
                        href="https://fonts.googleapis.com"
                    />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,900;1,400&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
