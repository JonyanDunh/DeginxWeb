import Head from 'next/head'
import "../styles/global.css"
import 'tailwindcss/tailwind.css'
export default function App({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page)

    return getLayout(
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>DeginX</title>
                <meta name="referrer" content="no-referrer" />
            </Head>
            <Component {...pageProps} />
        </>

    )
}