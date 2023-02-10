import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" data-theme="pastel" className="bg-base w-screen h-screen absolute">
            <Head >
            </Head>
            <body className="h-screen  w-screen">
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}