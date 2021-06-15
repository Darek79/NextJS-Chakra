import "@fontsource/roboto";
import type {AppProps /*, AppContext */} from "next/app";
import {ChakraProvider} from "@chakra-ui/react";
import {WithContext} from "./../store";
import theme from "./../styles/theme";
import "./../styles/globals.css";

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WithContext>
        <Component {...pageProps} />
      </WithContext>
    </ChakraProvider>
  );
}

export default MyApp;
