import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../../layout/MainLayout";
import { PageContainer } from "../../layout/PageContainer";
import { CardWorks } from "../../components";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import Strings from "../../resources/strings";
import { useRouter } from "next/router";

const Works: NextPage = () => {
	const router = useRouter();
	const strings = Strings({ acceptLanguage: router.locale });

	return (
		<MainLayout>
			<PageContainer>
				<Heading variant="section-title" >{strings.works.personWorks}</Heading>
				<SimpleGrid columns={2} spacing={10}>
					<CardWorks
						src="/bahia.jpeg"
						title={strings.works.bot.title}
						text={strings.works.bot.description}
						href="/works/bbmpbot"
						noTarget
					/>
					<CardWorks
						src="/emprestei.png"
						title={strings.works.emprestei.title}
						text={strings.works.emprestei.description}
						href="/works/emprestei"
						noTarget
					/>
				</SimpleGrid>
				<CardWorks
					src="/banner.png"
					title={strings.works.portfolio.title}
					text={strings.works.portfolio.description}
					href="/works/portfolio"
					noTarget
				/>
				<Heading variant="section-title" >{strings.works.teamCollaborations}</Heading>
				<SimpleGrid columns={2} spacing={10}>
					<CardWorks
						src="/necessial.png"
						title={strings.works.necessial.title}
						text={strings.works.necessial.description}
						href="https://necessial.com.br/"
					/>
					<CardWorks
						src="/startapp.png"
						title={strings.works.startapp.title}
						text={strings.works.startapp.description}
						href="https://startapp.one/"
					/>
					<CardWorks
						src="/consenso.png"
						title={strings.works.consenso.title}
						text={strings.works.consenso.description}
						href="https://play.google.com/store/apps/details?id=com.consenso"
					/>
					<CardWorks
						src="/rifei.png"
						title={strings.works.rifei.title}
						text={strings.works.rifei.description}
						href="https://rifeiapp.com.br/"
					/>
					<CardWorks
						src="/apuama.png"
						title={strings.works.apuama.title}
						text={strings.works.apuama.description}
						href="https://play.google.com/store/apps/details?id=com.apuama"
					/>
					<CardWorks
						src="/laboral.png"
						title={strings.works.laboral.title}
						text={strings.works.laboral.description}
						href="https://apps.apple.com/br/app/laboral-life/id1568860884"
					/>
					<CardWorks
						src="/ace.png"
						title={strings.works.ace.title}
						text={strings.works.ace.description}
						href="https://play.google.com/store/apps/details?id=com.aceranking"
					/>
					<CardWorks
						src="/upjet.png"
						title={strings.works.upjet.title}
						text={strings.works.upjet.description}
						href="https://upjetapp.com/pt-BR/"
					/>
					<CardWorks
						src="/tamoaqui.png"
						title={strings.works.tamoaqui.title}
						text={strings.works.tamoaqui.description}
						href="https://tamoaqui.com.br/"
					/>
					<CardWorks
						src="/drunb.png"
						title={strings.works.drunb.title}
						text={strings.works.drunb.description}
						href="https://play.google.com/store/apps/details?id=com.drunb"
					/>
				</SimpleGrid>
			</PageContainer>
		</MainLayout>
	);
};

export default Works;
