
import React from "react";
import { Flex, Stack, Text, Heading, Image, useColorModeValue } from "@chakra-ui/react";
interface IProps {
	text: string;
}
export const CardProfile: React.FC<IProps> = (props) => {
	const { text } = props;

	return (
		<Flex flexDir={{base: "column", lg: "row"}} alignItems="center" justifyContent="space-between">
			<Stack w="100%" alignItems="flex-start">
				<Heading
					size="lg"
					fontWeight="extrabold"
				>
					Ramon Martins
				</Heading>
				<Text>{text}</Text>
			</Stack>
			<Image mt={{base: 4, lg: 0}} w="100px" h="100px" borderRadius="full" src={useColorModeValue("/me.png", "/me.jpg")} />
		</Flex>
	);
};
