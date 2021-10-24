import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "../Navbar";


export const MainLayout: React.FC = (props) => {
	const { children } = props;

	return (
		<Box>
			<Navbar />
			{children}
		</Box>
	);
};
