import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../../layout/MainLayout";
import { PageContainer } from "../../layout/PageContainer";
import strings from "../../resources/strings";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const Bahia: NextPage = () => (
	<MainLayout>
    	<PageContainer pageTitle={strings.link.hobbies} workTitle={strings.hobbies.bahia.title}>
			<Text mt={2} fontSize="md" >{strings.hobbies.bahia.stanza}</Text>
			<SimpleGrid columns={2} spacing={8}>
				<Box borderRadius="lg" overflow="hidden">
					<Image quality={100} layout="responsive" width="100%" height="100%" src="/torcedor.jpg" />
				</Box>
				<Box borderRadius="lg" overflow="hidden">
					<Image quality={100} layout="responsive" width="100%" height="100%" src="/bahia.jpeg" />
				</Box>
			</SimpleGrid>
			<Box borderRadius="lg" overflow="hidden">
				<Image quality={100} layout="responsive" width="100%" height={40} src="/bahiabanco.jpg" />
			</Box>
	  	</PageContainer>
	</MainLayout>
);

export default Bahia;
