
import React from "react";
import { Badge, Text, Box, HStack, Stack, Link } from "@chakra-ui/react";

interface IProps {
	website?: string;
	platform: string;
	stack: string;
	source?: string;
}

export const InfoCard: React.FC<IProps> = (props) => {
	const { website, platform, stack, source, ...rest } = props;

	return (
		<Box p={2} cursor="pointer" {...rest}  >
			<Stack fontSize="md">
				{website && (
					<HStack spacing={1}>
						<Badge colorScheme="primary">Website</Badge>
						<Link
							href={website}
							isExternal
							fontWeight="bold"
						>
							<Text isTruncated maxW={{base: "200px", sm: "100%"}} >{website}</Text>
						</Link>
					</HStack>
				)}
				<Text fontWeight="bold"><Badge colorScheme="primary">Platform</Badge> {platform}</Text>
				<Text fontWeight="bold"><Badge colorScheme="primary">Stack</Badge> {stack}</Text>
				{source && (
					<HStack spacing={1}>
						<Badge colorScheme="primary">Source</Badge>
						<Link
							href={source}
							isExternal
							fontWeight="bold"
						>
							<Text isTruncated maxW={{base: "200px", sm: "100%"}} >{source}</Text>
						</Link>
					</HStack>
				)}
			</Stack>
		</Box>
	);
};
