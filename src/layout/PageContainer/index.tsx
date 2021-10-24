import React from "react";
import { Stack } from "@chakra-ui/react";

export const PageContainer: React.FC = (props) => {
	const { children } = props;

	return (
		<Stack
			mr={2}
			ml={2}
			mt={24}
			mb={8}
			spacing={10}
			w="500px"
		>
			{children}
		</Stack>
	);
};
