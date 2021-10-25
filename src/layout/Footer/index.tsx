import { HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import strings from "../../resources/strings";
import { BiCopyright } from "react-icons/bi";

export const Footer: React.FC = () => (
	<HStack mt={4} mb={4} spacing={1} fontStyle="italic" opacity="0.4" justifyContent="center">
		<Icon as={BiCopyright} />
		<Text>{strings.footer.madeInPotato}</Text>
	</HStack>
);
