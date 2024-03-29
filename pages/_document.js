import NextDocument, {Html, Head, Main, NextScript} from "next/document";


class MyDocument extends NextDocument {
    render () {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
export default MyDocument