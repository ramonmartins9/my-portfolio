import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../../layout/MainLayout";
import { InfoCard } from "../../components";
import { PageContainer } from "../../layout/PageContainer";
import Strings from "../../resources/strings";
import { Link, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Portfolio: NextPage = () => {

	const router = useRouter();
	const strings = Strings({ acceptLanguage: router.locale });

	return (
		<MainLayout>
			<PageContainer href="/works" pageTitle={strings.link.works} workTitle={strings.works.portfolio.title}>
				<Text mt={2} fontSize="md" >
					{strings.works.portfolio.stanza}
					<Link isExternal href="https://www.youtube.com/devaslife">
						{strings.works.portfolio.devaslife}
					</Link>
				</Text>
				<InfoCard
					platform="Web"
					stack="React.js / Typescript / Next.js / Chakra UI"
					source="https://github.com/ramonmartins9/my-portfolio"
				/>
			  </PageContainer>
		</MainLayout>
	);
};


export default Portfolio;
