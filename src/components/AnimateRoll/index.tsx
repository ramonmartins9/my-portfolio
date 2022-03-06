
import React from "react";
import { useColorModeValue } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

export const AnimateRoll: React.FC = (props) => {
	const { children } = props;

	return (
		<AnimatePresence exitBeforeEnter initial={false}>
			<motion.div
				style={{ display: "inline-block" }}
				key={useColorModeValue("light", "dark")}
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1, rotate: [0, 0, 360, 180, 0] }}
				exit={{ y: 20, opacity: 0 }}
				transition={{ duration: 0.5 }}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
};
