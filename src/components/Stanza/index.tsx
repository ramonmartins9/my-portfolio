
import React from "react";
import { Box, Heading } from "@chakra-ui/react";

interface IProps {
	title: string;
}

export const Stanza: React.FC<IProps> = (props)=> {
	const { title, children } = props;

	return (
		<Box>
			<Heading mb={4} variant="section-title" size="md">{title}</Heading>
			<Box>{children}</Box>
		</Box>
	);
};
