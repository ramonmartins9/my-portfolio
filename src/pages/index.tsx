/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../layout/MainLayout";
import { CardProfile, Stanza, SocialMedia, LinkButton } from "../components";
import { Box, Text } from "@chakra-ui/react";
import { PageContainer } from "../layout/PageContainer";
import { useColorModeValue } from "@chakra-ui/react";
import { FiLinkedin, FiInstagram, FiTwitter, FiGithub } from "react-icons/fi";
import strings from "../resources/strings";
import YouTube from "react-youtube";

const Home: NextPage = () => {
	const opts = {
		height: "320",
		width: "100%",
	};

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
			   <CardProfile />
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
				   <SocialMedia href="https://www.instagram.com/ramonmartins_9/" icon={FiInstagram} socialMedia={strings.home.socialMedia.instagram}/>
				   <SocialMedia href="https://twitter.com/ramonmartins_9" icon={FiTwitter} socialMedia={strings.home.socialMedia.twitter}/>
			   </Stanza>
		   </PageContainer>
	   </MainLayout>
	);
};

export default Home;
