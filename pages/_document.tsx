import { Html, Head, Main, NextScript } from 'next/document'
import CreatedByFooter from '../components/core/CreatedByFooter'

const Document = () => {

    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            <CreatedByFooter/>
        </Html>
    )
}

export default Document