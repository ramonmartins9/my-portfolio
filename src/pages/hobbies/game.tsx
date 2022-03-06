import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../../layout/MainLayout";
import { PageContainer } from "../../layout/PageContainer";
import Strings from "../../resources/strings";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";

const Game: NextPage = () => {
	const router = useRouter();
	const strings = Strings({ acceptLanguage: router.locale });

	return (
		<MainLayout>
			<PageContainer pageTitle={strings.link.hobbies} workTitle={strings.hobbies.game.title}>
				<Text mt={2} fontSize="md" >{strings.hobbies.game.stanza}</Text>
				<Box borderRadius="lg" overflow="hidden">
					<Image layout="responsive" width="100%" height="50%" src="/journey.webp" />
				</Box>
				<Text mt={2} fontSize="md" >{strings.hobbies.game.stanza2}</Text>
				<Box borderRadius="lg" overflow="hidden">
					<Image layout="responsive" width="100%" height="100%" src="/carpeado.jpeg" />
				</Box>
			  </PageContainer>
		</MainLayout>
	);
};

export default Game;
