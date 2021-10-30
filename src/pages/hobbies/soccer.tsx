import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../../layout/MainLayout";
import { PageContainer } from "../../layout/PageContainer";
import strings from "../../resources/strings";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

const Soccer: NextPage = () => (
	<MainLayout>
    	<PageContainer pageTitle={strings.link.hobbies} workTitle={strings.hobbies.soccer.title}>
			<Text mt={2} fontSize="md" >{strings.hobbies.soccer.stanza}</Text>
			<Box borderRadius="lg" overflow="hidden">
				<Image quality={100} layout="responsive" width="80%" height="100%" src="/futebolme.jpeg" />
			</Box>
			<Box borderRadius="lg" overflow="hidden">
				<Image quality={100} layout="responsive" width="100%" height="50%" src="/soccertean.png" />
			</Box>
	  	</PageContainer>
	</MainLayout>
);

export default Soccer;
