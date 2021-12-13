import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../../layout/MainLayout";
import { PageContainer } from "../../layout/PageContainer";
import strings from "../../resources/strings";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const Cinema: NextPage = () => (
	<MainLayout>
    	<PageContainer pageTitle={strings.link.hobbies} workTitle={strings.hobbies.cinema.title}>
			<Text mt={2} fontSize="md" >{strings.hobbies.cinema.stanza}</Text>
			<SimpleGrid columns={2} spacing={8}>
				<Box borderRadius="lg" overflow="hidden">
					<Image layout="responsive" width="75%" height="100%" src="/parasita.png" />
				</Box>
				<Box borderRadius="lg" overflow="hidden">
					<Image layout="responsive" width="75%" height="100%" src="/littlewoman.jpeg" />
				</Box>
				<Box borderRadius="lg" overflow="hidden">
					<Image layout="responsive" width="70%" height="100%" src="/hamilton.jpg" />
				</Box>
				<Box borderRadius="lg" overflow="hidden">
					<Image layout="responsive" width="70%" height="100%" src="/tarantino.jpeg" />
				</Box>
			</SimpleGrid>
			<Box borderRadius="lg" overflow="hidden">
				<Image layout="responsive" width="100%" height="50%" src="/spiderman.jpg" />
			</Box>
	  	</PageContainer>
	</MainLayout>
);

export default Cinema;
