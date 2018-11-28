// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
    /*     static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    } */

    render() {
        return (
            <html>
                <Head>
                    <title>Vincent Hirtz - Studio de créations web</title>
                    <meta
                        name="description"
                        content="Créations web en tout genre, critiques de films, photos personnelles ici et là, quelques billets de blog et plein de folies."
                    />
                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
                        crossOrigin="anonymous"
                    />
                    <style>{`html, body { 
              height: 100%;
              margin: 0 ;
              }
              
              #__next {
                height: 100%;
              }
              
              `}</style>
                </Head>
                <body className="custom_class">
                    <Main />
                    <NextScript />
                </body>
            </html>
        );
    }
}
