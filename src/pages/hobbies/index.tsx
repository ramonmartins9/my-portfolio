import React from "react";
import type { NextPage } from "next";
import { MainLayout } from "../../layout/MainLayout";
import { PageContainer } from "../../layout/PageContainer";
import { Heading, SimpleGrid } from "@chakra-ui/react";
import { CardWorks } from "../../components";
import Strings from "../../resources/strings";
import { useRouter } from "next/router";

const Hobbies: NextPage = () => {
	const router = useRouter();
	const strings = Strings({ acceptLanguage: router.locale });

	return (
		<MainLayout>
			<PageContainer>
				<Heading variant="section-title" >{strings.hobbies.title}</Heading>
				<SimpleGrid columns={2} spacing={10}>
					<CardWorks
						src="/bahiaQuarto.png"
						title={strings.hobbies.bahia.title}
						text={strings.hobbies.bahia.description}
						href="/hobbies/bahia"
						noTarget
					/>
					<CardWorks
						src="/spiderman.jpg"
						title={strings.hobbies.cinema.title}
						text={strings.hobbies.cinema.description}
						href="/hobbies/cinema"
						noTarget
					/>
					<CardWorks
						src="/setup.jpeg"
						title={strings.hobbies.photos.title}
						text={strings.hobbies.photos.description}
						href="/hobbies/photo"
						noTarget
					/>
					<CardWorks
						src="/tyler.png"
						title={strings.hobbies.music.title}
						text={strings.hobbies.music.description}
						href="/hobbies/music"
						noTarget
					/>
					<CardWorks
						src="/books.jpeg"
						title={strings.hobbies.books.title}
						text={strings.hobbies.books.description}
						href="/hobbies/book"
						noTarget
					/>
					<CardWorks
						src="/soccertean.png"
						title={strings.hobbies.soccer.title}
						text={strings.hobbies.soccer.description}
						href="/hobbies/soccer"
						noTarget
					/>
				</SimpleGrid>
				<CardWorks
					src="/journey.webp"
					title={strings.hobbies.game.title}
					text={strings.hobbies.game.description}
					href="/hobbies/game"
					noTarget
				/>
			</PageContainer>
		</MainLayout>
	);
};

export default Hobbies;
