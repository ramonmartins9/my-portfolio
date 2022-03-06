import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../../layout/MainLayout";
import { PageContainer } from "../../layout/PageContainer";
import Strings from "../../resources/strings";
import { SimpleGrid, Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import YouTube from "react-youtube";
import { useRouter } from "next/router";

const Music: NextPage = () => {
	const router = useRouter();
	const strings = Strings({ acceptLanguage: router.locale });

	return (
		<MainLayout>
			<PageContainer pageTitle={strings.link.hobbies} workTitle={strings.hobbies.music.title}>
				<YouTube
					videoId="gwXdXkDYm44"
					opts={{
						height: "320",
						width: "100%",
					}}
				/>
				<Text mt={2} fontSize="md" >{strings.hobbies.music.stanza}</Text>
				<Box borderRadius="lg" overflow="hidden">
					<Image layout="responsive" width="100%" height="65%" src="/belchior.jpg" />
				</Box>
				<SimpleGrid columns={2} spacing={8}>
					<Box borderRadius="lg" overflow="hidden">
						<Image layout="responsive" width="100%" height="65%" src="/willow.jpeg" />
					</Box>
					<Box borderRadius="lg" overflow="hidden">
						<Image layout="responsive" width="100%" height="65%" src="/tyler.png" />
					</Box>
					<Box borderRadius="lg" overflow="hidden">
						<Image layout="responsive" width="100%" height="65%" src="/timmaia.jpg" />
					</Box>
					<Box borderRadius="lg" overflow="hidden">
						<Image layout="responsive" width="100%" height="65%" src="/lorde.png" />
					</Box>
				</SimpleGrid>
				<Box borderRadius="lg" overflow="hidden">
					<Image layout="responsive" width="100%" height="65%" src="/vandal.jpg" />
				</Box>
				<SimpleGrid columns={2} spacing={8}>
					<Box borderRadius="lg" overflow="hidden">
						<Image layout="responsive" width="100%" height="65%" src="/bluesman.png" />
					</Box>
					<Box borderRadius="lg" overflow="hidden">
						<Image layout="responsive" width="100%" height="65%" src="/amarelo.jpg" />
					</Box>
				</SimpleGrid>
			  </PageContainer>
		</MainLayout>
	);
};

export default Music;
