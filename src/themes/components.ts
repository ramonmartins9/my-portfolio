import { mode } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils/dist/types/types";

export const components = {
	Heading: {
		variants: {
			"section-title": {
				textDecoration: "underline",
				fontSize: 20,
				textUnderlineOffset: 6,
				textDecorationColor: "#525252",
				textDecorationThickness: 4,
			},
		},
	},
	Link: {
		baseStyle: (props: Dict) => ({
			color: mode("#B7B5E4", "#554348")(props),
			textUnderlineOffset: 3,
		}),
	},
};
