import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../../layout/MainLayout";
import { PageContainer } from "../../layout/PageContainer";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import { CardWorks } from "../../components";
import strings from "../../resources/strings";

const Hobbies: NextPage = () => (
	<MainLayout>
          	<PageContainer>
			<Heading variant="section-title" >{strings.hobbies.title}</Heading>
			<SimpleGrid columns={2} spacing={10}>
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
			</SimpleGrid>
			<SimpleGrid columns={2} spacing={10}>
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
			</SimpleGrid>
			<SimpleGrid columns={2} spacing={10}>
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
			</SimpleGrid>
			<CardWorks
				src="/journey.webp"
				title={strings.works.portfolio.title}
				text={strings.works.portfolio.description}
			/>
	  	</PageContainer>
	</MainLayout>
);

export default Hobbies;
