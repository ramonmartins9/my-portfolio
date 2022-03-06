import { HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import Strings from "../../resources/strings";
import { BiCopyright } from "react-icons/bi";
import { useRouter } from "next/router";

export const Footer: React.FC = () => {
	const router = useRouter();
	const strings = Strings({ acceptLanguage: router.locale });

	return (
		<HStack mt={4} mb={4} spacing={1} fontStyle="italic" opacity="0.4" justifyContent="center">
			<Icon as={BiCopyright} />
			<Text>{strings.footer.madeInPotato}</Text>
		</HStack>
	);
};

