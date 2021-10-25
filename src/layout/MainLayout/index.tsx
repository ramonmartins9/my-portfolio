import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

export const MainLayout: React.FC = (props) => {
	const { children } = props;

	return (
		<Box>
			<Navbar />
			<Flex justifyContent="center">
				{children}
			</Flex>
			<Footer />
		</Box>
	);
};
