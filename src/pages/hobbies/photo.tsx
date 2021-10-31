import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../../layout/MainLayout";
import { PageContainer } from "../../layout/PageContainer";
import strings from "../../resources/strings";
import { SimpleGrid, Box } from "@chakra-ui/react";
import Image from "next/image";

const Photo: NextPage = () => (
	<MainLayout>
    	<PageContainer pageTitle={strings.link.hobbies} workTitle={strings.hobbies.photos.title}>
			<SimpleGrid columns={2} spacing={8}>
				<Box borderRadius="lg" overflow="hidden">
					<Image quality={100} layout="responsive" width="70%" height="100%" src="/sol2.jpeg" />
				</Box>
				<Box borderRadius="lg" overflow="hidden">
					<Image quality={100} layout="responsive" width="70%" height="100%" src="/sol.jpeg" />
				</Box>
			</SimpleGrid>
			<Box borderRadius="lg" overflow="hidden">
				<Image quality={100} layout="responsive" width="100%" height="50%" src="/setup.jpeg" />
			</Box>
			<SimpleGrid columns={2} spacing={8}>
				<Box borderRadius="lg" overflow="hidden">
					<Image quality={100} layout="responsive" width="70%" height="100%" src="/salvador.jpeg" />
				</Box>
				<Box borderRadius="lg" overflow="hidden">
					<Image quality={100} layout="responsive" width="70%" height="100%" src="/salvador2.jpeg" />
				</Box>
			</SimpleGrid>
			<Box borderRadius="lg" overflow="hidden">
				<Image quality={100} layout="responsive" width="70%" height="100%" src="/praia.jpeg" />
			</Box>
			<Box borderRadius="lg" overflow="hidden">
				<Image quality={100} layout="responsive" width="100%" height="50%" src="/praia2.jpeg" />
			</Box>
	  	</PageContainer>
	</MainLayout>
);

export default Photo;
