
import React from "react";
import { Text, Box, BoxProps, LinkBox, LinkOverlay } from "@chakra-ui/react";
import Image from "next/image";

interface IProps extends BoxProps {
	src: string;
	text: string;
	href?: string;
	title: string;
}

export const CardWorks: React.FC<IProps> = (props)=> {
	const { src, text, title, href, ...rest } = props;

	return (
		<LinkBox cursor="pointer" {...rest} justifyContent="flex-end" textAlign="center">
			<Box borderRadius="lg" overflow="hidden">
				<Image quality={100} layout="responsive" width="100%" height={50} src={src} />
			</Box>
			<LinkOverlay href={href} target="_blank">
				<Text fontSize="lg" fontWeight="extrabold" mt={3}>{title}</Text>
			</LinkOverlay>
			<Text mt={2} fontWeight="thin">{text}</Text>
		</LinkBox>
	);
};
