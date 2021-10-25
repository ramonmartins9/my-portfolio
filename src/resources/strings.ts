/* eslint-disable max-len */
import "moment/locale/pt-br";
import LocalizedStrings from "localized-strings";

const strings = new LocalizedStrings({
	ptBr:{
		home: {
			hello: "Hello, I'm full-stack developer based in Brasil!",
			works: "Works",
			worksBio: " I work professionally with development since the end of 2019, I love what I do, I've worked in several segments of the area, today I work in a software factory where I face daily challenges, if you want to know a little more, take a look at my ",
			linkedin: "linkedin.",
			bio: "Bio",
			born: "A little more precise, I was born in Salvador, Bahia. I'm very happy here, you know, many beaches, but I don't go to any of them because I love movies, games and technology in general, nerd alert, but I sometimes go out... to watch movies. I used to be a good soccer player and won some championships, they called me show men (just me) and that's it.",
			socialMedia: "Other places I am too",
		},
		footer: {
			madeInPotato: "Copyright 2021 Ramon Martins.",
		},
		works: {
			bot: {
				title: "BBMPBOT",
				description: "I had never made a bot, and I guess, why not? then i made this simple bot for my heart's team.",
			},
			portfolio: {
				title: "My Portfolio",
				description: "This project here, I saw that I needed a place to show my work and spell",
			},
			emprestei: {
				title: "Emprestei",
				description: "A simple project to fill a hole in the loan market between family members and never forget to borrow that money",
			},
			necessial: {
				title: "Necessial",
				description: "A natural products marketplace that I'm very proud of being part of the work",
			},
			personWorks: "Personal Work",
			teamCollaborations: "Team Collaborations",
		},
		link: {
			works: "Works",
			hobbies: "Hobbies",
		},
	},
});

export default strings;
