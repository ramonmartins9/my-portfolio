import React from "react";
import NextLink from "next/link";
import { LinkOverlay, LinkProps } from "@chakra-ui/react";
interface IProps extends LinkProps {
	href: string;
}

export const LinkOverlayButton: React.FC<IProps> = (props) => {
	const { href, children, ...rest } = props;
	return (
		<NextLink
			href={href}
			passHref
		>
			<LinkOverlay {...rest}>
				{children}
			</LinkOverlay>
		</NextLink>
	);
};

