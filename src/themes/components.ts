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
				marginTop: 3,
				marginBottom: 4,
			},
		},
	},
	Link: {
		baseStyle: (props: Dict) => ({
			color: mode("black", "white")(props),
			textUnderlineOffset: 3,
		}),
	},
};
