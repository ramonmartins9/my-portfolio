
import React from "react";
import { Badge, Text, Box, HStack, Stack, Link } from "@chakra-ui/react";

interface IProps {
	website?: string;
	platform: string;
	stack: string;
	source?: string;
}

export const InfoCard: React.FC<IProps> = (props)=> {
	const { website, platform, stack, source, ...rest } = props;

	return (
		<Box p={2} cursor="pointer" {...rest} justifyContent="flex-end" textAlign="center">
			 <Stack>
			 {website && (
				 <HStack>
         	 		<Badge colorScheme="primary">Website</Badge>
          			<Link href={website} fontSize="md" isExternal fontWeight="bold" >{website}</Link>
       			 </HStack>
				)}
				 <HStack>
         	 		<Badge colorScheme="primary">Platform</Badge>
          			<Text fontSize="md" fontWeight="bold">{platform}</Text>
       			 </HStack>
				 <HStack>
         	 		<Badge colorScheme="primary">Stack</Badge>
          			<Text fontSize="md" fontWeight="bold">{stack}</Text>
       			 </HStack>
				{source && (
					<HStack>
						<Badge colorScheme="primary">Source</Badge>
						<Link href={source} isExternal fontSize="md" fontWeight="bold">{source}</Link>
				 	</HStack>
				)}
			 </Stack>
		</Box>
	);
};
