
import React from "react";
import { Text, Box, BoxProps, LinkBox } from "@chakra-ui/react";
import Image from "next/image";
import { LinkOverlayButton } from "../LinkOverlayButton";

interface IProps extends BoxProps {
	src: string;
	text: string;
	href: string;
	title: string;
	noTarget?: boolean;
}

export const CardWorks: React.FC<IProps> = (props)=> {
	const { src, text, title, href, noTarget, ...rest } = props;

	return (
		<LinkBox cursor="pointer" {...rest} justifyContent="flex-end" textAlign="center">
			<Box borderRadius="lg" overflow="hidden">
				<Image quality={100} layout="responsive" width="100%" height={50} src={src} />
			</Box>
			<LinkOverlayButton href={href} target={noTarget ? "" : "_blank"}>
				<Text fontSize="lg" fontWeight="extrabold" mt={3}>{title}</Text>
			</LinkOverlayButton>
			<Text mt={2} fontWeight="thin">{text}</Text>
		</LinkBox>
	);
};
