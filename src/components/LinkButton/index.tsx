import React from "react";
import NextLink from "next/link";
import { Link, LinkProps } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
interface IProps extends LinkProps {
	href: string;
}

export const LinkButton: React.FC<IProps> = (props) => {
	const { href, children, ...rest } = props;
	return (
		<NextLink
			href={href}
		>
			<Link color={useColorModeValue("black", "white")} {...rest}>
				{children}
			</Link>
		</NextLink>
	);

};

