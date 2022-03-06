import React from "react";
import NextLink from "next/link";
import { Link, LinkProps } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/react";
interface IProps extends LinkProps {
	href: string;
	locale?: string;
}

export const LinkButton: React.FC<IProps> = (props) => {
	const { href, locale, children, ...rest } = props;
	return (
		<NextLink
			href={href}
			locale={locale}
		>
			<Link color={useColorModeValue("black", "white")} {...rest}>
				{children}
			</Link>
		</NextLink>
	);

};

