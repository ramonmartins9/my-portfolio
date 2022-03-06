import "moment/locale/pt-br";
import LocalizedStrings from "localized-strings";
import { enUs } from "./enUs";
import { ptBr } from "./ptBr";
import { GetServerSidePropsContext, NextPageContext } from "next";
import { default as AcceptLanguage } from "accept-language";
import { default as nookies } from "nookies";

const stringsAllLanguages = {
	"en-US": {
		...enUs,
	},
	"pt-BR": {
		...ptBr,
	},
};

const Strings = (options?: { acceptLanguage?: string | null; ctx?: NextPageContext | GetServerSidePropsContext }) => {
	const strings = new LocalizedStrings(stringsAllLanguages);

	let acceptLanguage: string | null = options && options.acceptLanguage || null;

	const cookies = nookies.get(options ? options.ctx : undefined);

	if (!acceptLanguage && cookies.acceptLanguage) {
		acceptLanguage = cookies.acceptLanguage;
	}

	if (!acceptLanguage) {
		try {
			AcceptLanguage.languages(strings.getAvailableLanguages());

			acceptLanguage = options && options.ctx && options.ctx.req ?
				AcceptLanguage.get(options.ctx.req.headers["accept-language"] as string) :
				window.navigator.language;
		} catch (e) {
			// eslint-disable-next-line no-console
			console.log(strings, e);
		}
	}

	if (
		options &&
		options.ctx &&
		options.ctx.query.language &&
		strings.getAvailableLanguages().includes(options.ctx.query.language.toString())
	) {
		acceptLanguage = options.ctx.query.language.toString();
	}

	strings.setLanguage(acceptLanguage || strings.getLanguage());
	nookies.set(
		options ? options.ctx : undefined,
		"acceptLanguage",
		strings.getLanguage(),
		{
			path: "/",
		},
	);

	return strings;
};

export type StringsType = ReturnType<typeof Strings>;
export default Strings;
