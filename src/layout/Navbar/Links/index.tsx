import { HStack } from "@chakra-ui/react";
import { LinkButton } from "../../../components";
import React from "react";

export const Links: React.FC = () => (
	<HStack display={{base: "none", lg: "flex"}} spacing={8}>
		<LinkButton href="/works">
            Works
		</LinkButton>
		<LinkButton href="/hobbies">
            Hobbies
		</LinkButton>
	</HStack>
);
