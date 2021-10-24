/* eslint-disable @typescript-eslint/no-unsafe-call */
import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../layout/MainLayout";
import { CardProfile, Stanza, SocialMedia } from "../components";
import { Box, Text, Link } from "@chakra-ui/react";
import { PageContainer } from "../layout/PageContainer";
import { useColorModeValue } from "@chakra-ui/react";
import { FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";
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
				   <Text>
					   {strings.home.worksBio}
					   <Link isExternal href="https://www.linkedin.com/in/ramon-martins-113b1315b/" >{strings.home.linkedin}</Link>
				   </Text>
			   </Stanza>
			   <Stanza title={strings.home.bio} >
				   <Text>
					   {strings.home.born}
				   </Text>
			   </Stanza>
			   <Stanza title={strings.home.socialMedia} >
				   <SocialMedia href="https://www.linkedin.com/in/ramon-martins-113b1315b/" icon={FiLinkedin} socialMedia="Linkedin"/>
				   <SocialMedia href="https://www.instagram.com/ramonmartins_9/" icon={FiInstagram} socialMedia="Instagram"/>
				   <SocialMedia href="https://twitter.com/ramonmartins_9" icon={FiTwitter} socialMedia="Twitter"/>
			   </Stanza>
		   </PageContainer>
	   </MainLayout>
	);
};

export default Home;
