import { Html, Head, Main, NextScript } from 'next/document'
import CreatedByFooter from '../components/core/CreatedByFooter'

const Document = () => {

    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'/>
            </Head>
            <body
                className="mx-2 lg:mx-10"
            >
                <Main />
                <NextScript />
            </body>
            <CreatedByFooter/>
        </Html>
    )
}

export default Document