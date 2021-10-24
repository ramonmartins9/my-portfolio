
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const ThemeToggle = () => {
	const { toggleColorMode } = useColorMode();

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
				<IconButton
					aria-label="Toggle theme"
					colorScheme={useColorModeValue("moon", "orange")}
					icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
					onClick={toggleColorMode}
				 />
			</motion.div>
		</AnimatePresence>
	);
};
