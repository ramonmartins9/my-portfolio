
import React from "react";
import { Flex, Stack, Text, Heading, Image } from "@chakra-ui/react";

export const CardProfile = () => (
	<Flex flexDir={{base: "column", lg: "row"}} alignItems="center" justifyContent="space-between">
		<Stack>
			<Heading
				size="lg"
				fontWeight="extrabold"
			>
				Ramon Martins
			</Heading>
			<Text>Aways Learning ( Developer / Movie Buff / Reader )</Text>
		</Stack>
		<Image mt={{base: 4, lg: 0}} w="100px" h="100px" borderRadius="full" src="/me.png" />
	</Flex>
);
