import Strings from "../resources/strings";
import { useRouter } from "next/router";

const router = useRouter();
const strings = Strings({ acceptLanguage: router.locale });

export interface IInfo {
	platform: string;
	stack: string;
	website: string;
	source?: string;
}

export interface IWork {
	id: string;
	src: string;
	href: string;
	title: string;
	text: string;
	stanza: string;
	reference?: string;
	platform: IInfo;
}

export const works: IWork[] = [
	{
		id: "1",
		src: "/bahia.jpeg",
		title: strings.works.bot.title,
		text: strings.works.bot.description,
		stanza: strings.works.bot.stanza,
		href: "/works/1",
		platform: {
			platform: "Twitter",
			stack: "NodeJs / Javascript",
			website: "https://twitter.com/BbmpBot",
			source: "https://github.com/ramonmartins9/bbmpbot",
		},
	},
	{
		id: "2",
		src: "/emprestei.png",
		title: strings.works.emprestei.title,
		stanza: strings.works.bot.stanza,
		text: strings.works.emprestei.description,
		href: "/works/2",
		platform: {
			platform: "Android",
			stack: "React Native / Typescript / Firebase / Magnus UI",
			website: "https://play.google.com/store/apps/details?id=com.emprestei",
		},
	},
	{
		id: "3",
		src: "/banner.png",
		title: strings.works.portfolio.title,
		text: strings.works.portfolio.description,
		stanza: strings.works.portfolio.stanza,
		reference: "https://www.youtube.com/devaslife",
		href: "/works/3",
		platform: {
			platform: "Web",
			stack: "React.js / Typescript / Next.js / Chakra UI",
			website: "https://ramonmartins9.vercel.app/",
			source: "https://github.com/ramonmartins9/my-portfolio",
		},
	},
	{
		id: "4",
		src: "/necessial.png",
		stanza: strings.works.bot.stanza,
		title: strings.works.necessial.title,
		text: strings.works.startapp.description,
		href: "/works/4",
		platform: {
			platform: "PWA",
			stack: "React.js / Typescript / Next.js / Chakra UI / NodeJS",
			website: "https://necessial.com.br/",
		},
	},
	{
		id: "5",
		src: "/consenso.png",
		stanza: strings.works.bot.stanza,
		title: strings.works.consenso.title,
		text: strings.works.consenso.description,
		href: "/works/5",
		platform: {
			platform: "Android / IOS",
			stack: "React Native / Typescript",
			website: "https://play.google.com/store/apps/details?id=com.consenso",
		},
	},
	{
		id: "6",
		src: "/startapp.png",
		stanza: strings.works.bot.stanza,
		title: strings.works.startapp.title,
		text: strings.works.startapp.description,
		href: "/works/6",
		platform: {
			platform: "PWA",
			stack: "React.js / Typescript / Next.js / Chakra UI",
			website: "https://startapp.one/",
		},
	},
	{
		id: "7",
		src: "/rifei.png",
		stanza: strings.works.bot.stanza,
		title: strings.works.rifei.title,
		text: strings.works.rifei.description,
		href: "/works/7",
		platform: {
			platform: "PWA / Android / IOS",
			stack: "React / Typescript / Next.js / Chakra UI / NodeJS",
			website: "https://rifeiapp.com.br/",
		},
	},
	{
		id: "8",
		src: "/apuama.png",
		stanza: strings.works.bot.stanza,
		title: strings.works.apuama.title,
		text: strings.works.apuama.description,
		href: "/works/8",
		platform: {
			platform: "Android / IOS",
			stack: "React Native / Typescript",
			website: "https://play.google.com/store/apps/details?id=com.apuama",
		},
	},
	{
		id: "9",
		src: "/laboral.png",
		stanza: strings.works.bot.stanza,
		title: strings.works.laboral.title,
		text: strings.works.laboral.description,
		href: "/works/9",
		platform: {
			platform: "Android / IOS",
			stack: "React Native / Typescript",
			website: "https://apps.apple.com/br/app/laboral-life/id1568860884",
		},
	},
	{
		id: "10",
		src: "/ace.png",
		stanza: strings.works.bot.stanza,
		title: strings.works.ace.title,
		text: strings.works.ace.description,
		href: "/works/10",
		platform: {
			platform: "Android / IOS",
			stack: "React Native / Typescript",
			website: "https://play.google.com/store/apps/details?id=com.aceranking",
		},
	},
	{
		id: "11",
		src: "/upjet.png",
		stanza: strings.works.bot.stanza,
		title: strings.works.upjet.title,
		text: strings.works.upjet.description,
		href: "/works/11",
		platform: {
			platform: "PWA / Android / IOS",
			stack: "React",
			website: "https://upjetapp.com/pt-BR/",
		},
	},
	{
		id: "12",
		src: "/tamoaqui.png",
		stanza: strings.works.bot.stanza,
		title: strings.works.tamoaqui.title,
		text: strings.works.tamoaqui.description,
		href: "/works/12",
		platform: {
			platform: "PWA",
			stack: "React / Typescript",
			website: "https://tamoaqui.com.br/",
		},
	},
	{
		id: "13",
		src: "/drunb.png",
		stanza: strings.works.bot.stanza,
		title: strings.works.drunb.title,
		text: strings.works.drunb.description,
		href: "/works/12",
		platform: {
			platform: "Android / IOS",
			stack: "React Native / Typescript",
			website: "https://play.google.com/store/apps/details?id=com.drunb",
		},
	},
];

export const findOneClinic = (id: string): IWork | undefined => works.find((work) => work.id === id);
