import { mode } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils/dist/types/types";

export const styles = {
	global: (props: Dict) => ({
		body: {
			bg: mode("#FFCF9C", "#202023")(props),
		},
	}),
};
