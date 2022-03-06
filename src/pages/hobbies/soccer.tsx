import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../../layout/MainLayout";
import { PageContainer } from "../../layout/PageContainer";
import Strings from "../../resources/strings";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

const Soccer: NextPage = () => {
	const router = useRouter();
	const strings = Strings({ acceptLanguage: router.locale });

	return (
		<MainLayout>
			<PageContainer href="/hobbies" pageTitle={strings.link.hobbies} workTitle={strings.hobbies.soccer.title}>
				<Text mt={2} fontSize="md" >{strings.hobbies.soccer.stanza}</Text>
				<Box borderRadius="lg" overflow="hidden">
					<Image layout="responsive" width="100%" height="50%" src="/soccertean.png" />
				</Box>
			  </PageContainer>
		</MainLayout>
	);
};

export default Soccer;
