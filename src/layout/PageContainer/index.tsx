import React from "react";
import { Stack, StackProps } from "@chakra-ui/react";

interface IProps extends StackProps {}

export const PageContainer: React.FC<IProps> = (props) => {
	const { children, ...rest } = props;

	return (
		<Stack
			{...rest}
			mr={2}
			ml={2}
			mt={24}
			spacing={10}
			w="500px"
		>
			{children}
		</Stack>
	);
};
