import NextDocument, {Html, Head, Main, NextScript} from "next/document";
import { ColorModeScript, extendTheme } from '@chakra-ui/react'

const config = {
    useSystemColorMode: true
}

const theme = extendTheme({ config })

class MyDocument extends NextDocument {
    render () {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <ColorModeScript initialColorMode={theme.config.ColorModeScript} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
export default MyDocument