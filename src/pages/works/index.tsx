import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../../layout/MainLayout";
import { PageContainer } from "../../layout/PageContainer";
import { CardWorks } from "../../components";
import { Heading, HStack } from "@chakra-ui/react";
import strings from "../../resources/strings";

const Works: NextPage = () => (
	<MainLayout>
    	<PageContainer>
			<Heading variant="section-title" >{strings.works.personWorks}</Heading>
			<HStack alignItems="flex-start" spacing={4}>
				<CardWorks
					w="50%"
					src="/bahia.jpeg"
					title={strings.works.bot.title}
					text={strings.works.bot.description}
				/>
				<CardWorks
					w="50%"
					src="/emprestei.png"
					title={strings.works.emprestei.title}
					text={strings.works.emprestei.description}
				/>
			</HStack>
			<CardWorks
				src="/banner.png"
				title={strings.works.portfolio.title}
				text={strings.works.portfolio.description}
			/>
			<Heading variant="section-title" >{strings.works.teamCollaborations}</Heading>
			<HStack alignItems="flex-start" spacing={4}>
				<CardWorks
					w="50%"
					src="/necessial.png"
					title={strings.works.necessial.title}
					text={strings.works.necessial.description}
				/>
				<CardWorks
					w="50%"
					src="/apuama.png"
					title={strings.works.portfolio.title}
					text={strings.works.portfolio.description}
				/>
			</HStack>
			<HStack alignItems="flex-start" spacing={4}>
				<CardWorks
					w="50%"
					src="/startapp.png"
					title={strings.works.necessial.title}
					text={strings.works.necessial.description}
				/>
				<CardWorks
					w="50%"
					src="/drunb.png"
					title={strings.works.portfolio.title}
					text={strings.works.portfolio.description}
				/>
			</HStack>
	  	</PageContainer>
	</MainLayout>
);

export default Works;
