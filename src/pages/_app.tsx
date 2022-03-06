/* eslint-disable prefer-arrow/prefer-arrow-functions */
import React from "react";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../themes";

const MyApp = ({ Component, pageProps }: AppProps) => (
	  <ChakraProvider theme={theme}>
		<Component {...pageProps} />
	  </ChakraProvider>
);
export default MyApp;
