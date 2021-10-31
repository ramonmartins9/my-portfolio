import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../../layout/MainLayout";
import { InfoCard } from "../../components";
import { PageContainer } from "../../layout/PageContainer";
import strings from "../../resources/strings";
import { Text, Link, Box, SimpleGrid } from "@chakra-ui/react";
import Image from "next/image";

const Emprestei: NextPage = () => (
	<MainLayout>
    	<PageContainer pageTitle={strings.link.works} workTitle={strings.works.emprestei.title}>
			<Text mt={2} fontSize="md" >
				{strings.works.emprestei.whenI}
				<Link isExternal href="https://www.linkedin.com/in/luan-oliveira-00585b186/">
					{strings.works.emprestei.luan}
				</Link>
				{strings.works.emprestei.and}
				<Link isExternal href="https://www.linkedin.com/in/thais-maia-585b11181/">
					{strings.works.emprestei.thais}
				</Link>
				{strings.works.emprestei.stanza}
			</Text>
			<InfoCard
				platform="Android"
				stack="React Native / Typescript / Firebase / Magnus UI"
				website="https://play.google.com/store/apps/details?id=com.emprestei"
			/>
			<SimpleGrid columns={2} spacing={8}>
				<Box borderRadius="lg" overflow="hidden">
					<Image quality={100} layout="responsive" width="70%" height="100%" src="/e1.webp" />
				</Box>
				<Box borderRadius="lg" overflow="hidden">
					<Image quality={100} layout="responsive" width="70%" height="100%" src="/e2.webp" />
				</Box>
				<Box borderRadius="lg" overflow="hidden">
					<Image quality={100} layout="responsive" width="70%" height="100%" src="/e3.webp" />
				</Box>
				<Box borderRadius="lg" overflow="hidden">
					<Image quality={100} layout="responsive" width="70%" height="100%" src="/e4.webp" />
				</Box>
			</SimpleGrid>
	  	</PageContainer>
	</MainLayout>
);

export default Emprestei;
