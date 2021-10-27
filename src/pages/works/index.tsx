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
			<Heading variant="section-title" >{strings.works.teamCollaborations}</Heading>
			<HStack alignItems="flex-start" spacing={4}>
				<CardWorks
					src="/necessial.png"
					title={strings.works.necessial.title}
					text={strings.works.necessial.description}
				/>
				<CardWorks
					src="/startapp.png"
					title={strings.works.startapp.title}
					text={strings.works.startapp.description}
				/>
			</HStack>
			<HStack alignItems="flex-start" spacing={4}>
				<CardWorks
					src="/consenso.png"
					title={strings.works.consenso.title}
					text={strings.works.consenso.description}
				/>
				<CardWorks
					src="/rifei.png"
					title={strings.works.rifei.title}
					text={strings.works.rifei.description}
				/>
			</HStack>
			<HStack alignItems="flex-start" spacing={4}>
				<CardWorks
					src="/apuama.png"
					title={strings.works.apuama.title}
					text={strings.works.apuama.description}
				/>
				<CardWorks
					src="/laboral.png"
					title={strings.works.laboral.title}
					text={strings.works.laboral.description}
				/>
			</HStack>
			<HStack alignItems="flex-start" spacing={4}>
				<CardWorks
					src="/ace.png"
					title={strings.works.ace.title}
					text={strings.works.ace.description}
				/>
				<CardWorks
					src="/upjet.png"
					title={strings.works.upjet.title}
					text={strings.works.upjet.description}
				/>
			</HStack>
			<CardWorks
				w="100%"
				src="/tamoaqui.png"
				title={strings.works.tamoaqui.title}
				text={strings.works.tamoaqui.description}
			/>
			<Heading variant="section-title" >{strings.works.personWorks}</Heading>
			<HStack alignItems="flex-start" spacing={4}>
				<CardWorks
					src="/bahia.jpeg"
					title={strings.works.bot.title}
					text={strings.works.bot.description}
				/>
				<CardWorks
					src="/emprestei.png"
					title={strings.works.emprestei.title}
					text={strings.works.emprestei.description}
				/>
			</HStack>
			<CardWorks
				w="100%"
				src="/banner.png"
				title={strings.works.portfolio.title}
				text={strings.works.portfolio.description}
			/>
	  	</PageContainer>
	</MainLayout>
);

export default Works;
