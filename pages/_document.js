import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en" className="bg-gradient-to-r w-screen from-purple-400 via-pink-500 to-red-500 h-screen absolute">
            <Head >
                <link href="https://cdn.jsdelivr.net/npm/daisyui@2.46.1/dist/full.css" rel="stylesheet" type="text/css" />
                <script src="https://cdn.tailwindcss.com" async/>
            </Head>
            <body className="h-screen  w-screen">
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}