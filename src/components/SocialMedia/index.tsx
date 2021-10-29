
import React from "react";
import { Link, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useColorModeValue } from "@chakra-ui/react";

interface IProps {
	href: string;
	icon: IconType;
	socialMedia: string;
}

export const SocialMedia: React.FC<IProps> = (props) => {
	const { icon, socialMedia, href } = props;

	return (
		<Link href={href} p={2} isExternal  _hover={{ bg: "whiteAlpha.200" }} borderRadius={4} bg={useColorModeValue("#FFDCB8", "blackAlpha.100")} d="flex" mt={2} alignItems="center">
			<Icon as={icon} />
			<Text ml={2} >{socialMedia}</Text>
		</Link>
	);
};
