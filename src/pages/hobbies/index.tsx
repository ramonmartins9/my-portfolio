import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../../layout/MainLayout";
import { PageContainer } from "../../layout/PageContainer";
import { Heading, HStack } from "@chakra-ui/react";
import { CardWorks } from "../../components";
import strings from "../../resources/strings";

const Hobbies: NextPage = () => (
	<MainLayout>
          	<PageContainer>
			<Heading variant="section-title" >{strings.hobbies.title}</Heading>
			<HStack alignItems="flex-start" spacing={4}>
				<CardWorks
					src="/bahiaQuarto.png"
					title={strings.works.bot.title}
					text={strings.works.bot.description}
				/>
				<CardWorks
					src="/spiderman.jpg"
					title={strings.works.emprestei.title}
					text={strings.works.emprestei.description}
				/>
			</HStack>
			<HStack alignItems="flex-start" spacing={4}>
				<CardWorks
					src="/setup.jpeg"
					title={strings.works.bot.title}
					text={strings.works.bot.description}
				/>
				<CardWorks
					src="/vandal.jpg"
					title={strings.works.emprestei.title}
					text={strings.works.emprestei.description}
				/>
			</HStack>
			<HStack alignItems="flex-start" spacing={4}>
				<CardWorks
					src="/lovecraftcountry.png"
					title={strings.works.bot.title}
					text={strings.works.bot.description}
				/>
				<CardWorks
					src="/soccertean.png"
					title={strings.works.portfolio.title}
					text={strings.works.portfolio.description}
				/>
			</HStack>
			<CardWorks
				w="100%"
				src="/journey.webp"
				title={strings.works.portfolio.title}
				text={strings.works.portfolio.description}
			/>
	  	</PageContainer>
	</MainLayout>
);

export default Hobbies;
