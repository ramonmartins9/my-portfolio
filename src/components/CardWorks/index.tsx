
import React from "react";
import { Text, Box, BoxProps } from "@chakra-ui/react";
import Image from "next/image";

interface IProps extends BoxProps {
	src: string;
	text: string;
	title: string;
}

export const CardWorks: React.FC<IProps> = (props)=> {
	const { src, text, title, ...rest } = props;

	return (
		<Box cursor="pointer" w="50%" {...rest} justifyContent="flex-end" textAlign="center">
			<Box borderRadius="lg" overflow="hidden">
				<Image quality={100} layout="responsive" width="100%" height={50} src={src} />
			</Box>
			<Text fontSize="lg" fontWeight="medium" mt={3}>{title}</Text>
			<Text mt={2} fontSize="sm" fontWeight="light">{text}</Text>
		</Box>
	);
};
