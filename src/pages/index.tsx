/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../layout/MainLayout";
import { CardProfile, Stanza, SocialMedia, LinkButton } from "../components";
import { Box, Text } from "@chakra-ui/react";
import { PageContainer } from "../layout/PageContainer";
import { useColorModeValue } from "@chakra-ui/react";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import Strings from "../resources/strings";
import YouTube from "react-youtube";
import { useRouter } from "next/router";


const Home: NextPage = () => {
	const opts = {
		height: "320",
		width: "100%",
	};

	const router = useRouter();
	const strings = Strings({ acceptLanguage: router.locale });

	return (
	   <MainLayout>
		   <PageContainer>
		  	 <YouTube videoId="gwXdXkDYm44" opts={opts} />
			   <Box
				   borderRadius="base"
				   bg={useColorModeValue("#FFDCB8", "whiteAlpha.200")}
				   p={2}
			   >
				   <Text textAlign="center">{strings.home.hello}</Text>
			   </Box>
			   <CardProfile text={strings.home.me} />
			   <Stanza title={strings.home.works} >
				   <Text textAlign="justify">
					   {strings.home.worksBio}
					   <LinkButton color={useColorModeValue("#65463E", "#AAD6A0")} href="/works" >{strings.home.workTiny}</LinkButton>
					   {strings.home.period}
				   </Text>
			   </Stanza>
			   <Stanza title={strings.home.bio} >
				   <Text textAlign="justify">
					   {strings.home.born}
				   </Text>
			   </Stanza>
			   <Stanza title={strings.home.socialMedia.title} >
				   <SocialMedia href="https://github.com/ramonmartins9" icon={FiGithub} socialMedia={strings.home.socialMedia.github}/>
				   <SocialMedia href="https://www.linkedin.com/in/ramon-martins-113b1315b/" icon={FiLinkedin} socialMedia={strings.home.socialMedia.linkedin}/>
			   </Stanza>
		   </PageContainer>
	   </MainLayout>
	);
};

export default Home;
