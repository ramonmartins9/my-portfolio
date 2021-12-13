import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../../layout/MainLayout";
import { PageContainer } from "../../layout/PageContainer";
import strings from "../../resources/strings";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const Book: NextPage = () => (
	<MainLayout>
    	<PageContainer pageTitle={strings.link.hobbies} workTitle={strings.hobbies.books.title}>
			<Text mt={2} fontSize="md" >{strings.hobbies.books.stanza}</Text>
			<SimpleGrid columns={2} spacing={8}>
				<Box borderRadius="lg" overflow="hidden">
					<Image layout="responsive" width="70%" height="100%" src="/love.jpeg" />
				</Box>
				<Box borderRadius="lg" overflow="hidden">
					<Image layout="responsive" width="70%" height="100%" src="/yourname.jpeg" />
				</Box>
				<Box borderRadius="lg" overflow="hidden">
					<Image layout="responsive" width="70%" height="100%" src="/mosquito.jpeg" />
				</Box>
				<Box borderRadius="lg" overflow="hidden">
					<Image layout="responsive" width="70%" height="100%" src="/extraordinario.jpeg" />
				</Box>
			</SimpleGrid>
			<Box borderRadius="lg" overflow="hidden">
				<Image layout="responsive" width="70%" height="100%" src="/escravidao.jpeg" />
			</Box>
	  	</PageContainer>
	</MainLayout>
);

export default Book;
