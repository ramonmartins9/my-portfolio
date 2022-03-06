import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../../layout/MainLayout";
import { InfoCard } from "../../components";
import { PageContainer } from "../../layout/PageContainer";
import Strings from "../../resources/strings";
import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Bbmpbot: NextPage = () => {
	const router = useRouter();
	const strings = Strings({ acceptLanguage: router.locale });

	return (
		<MainLayout>
			<PageContainer pageTitle={strings.link.works} workTitle={strings.works.bot.title}>
				<Text mt={2} fontSize="md" >{strings.works.bot.stanza}</Text>
				<InfoCard
					platform="Twitter"
					stack="NodeJs / Javascript"
					website="https://twitter.com/BbmpBot"
					source="https://github.com/ramonmartins9/bbmpbot"
				/>
			  </PageContainer>
		</MainLayout>
	);
};

export default Bbmpbot;
