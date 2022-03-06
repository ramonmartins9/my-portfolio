import React from "react";
import { HStack } from "@chakra-ui/react";
import { LinkButton } from "../../../components";
import { useRouter } from "next/router";
import Strings from "../../../resources/strings";

export const Links: React.FC = () => {
	const router = useRouter();
	const strings = Strings({ acceptLanguage: router.locale });

	return (
		<HStack display={{ base: "none", lg: "flex" }} spacing={8}>
			<LinkButton href="/works">
				{strings.home.works}
			</LinkButton>
			<LinkButton href="/hobbies">
				{strings.home.hobbies}
			</LinkButton>
		</HStack>
	);
};
