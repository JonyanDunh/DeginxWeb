import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" data-theme="cupcake" className="bg-base-300 w-screen h-screen absolute">
            <Head >
            </Head>
            <body className="h-screen  w-screen">
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}