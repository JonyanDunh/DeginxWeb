import Head from 'next/head'
import "../styles/global.css"
export default function App({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page) => page)

    return getLayout(
        <>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>My new cool app</title>
                <meta name="referrer" content="no-referrer" />
                <script src="https://cdn.tailwindcss.com"></script>
            </Head>
            <Component {...pageProps} />
        </>

    )
}