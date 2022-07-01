import type { AppProps } from "next/app";
import GlobalStyle, { theme } from "styles/globals";
import { ThemeProvider } from "styled-components";
import { Header } from "components/Header";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Header />
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
