import { Flex, Heading, HStack, Image, Link } from "@chakra-ui/react";
import React from "react";
import { Links } from "./Links";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle, MenuOptions } from "../../components";
import { useColorModeValue } from "@chakra-ui/react";

export const Navbar: React.FC = () => (
	<Flex pr={2} pl={2} justifyContent="center" h="16" bg={useColorModeValue("#FFDCB8", "black")} >
		<Flex
			minW={{base: "100%", lg: "700px"}}
			alignItems="center"
			justifyContent="space-between"
		>
			<HStack spacing={8} color="secondary.500">
				<Flex justifyContent="center">
					<AnimatePresence exitBeforeEnter initial={false}>
						<motion.div
							style={{ display: "inline-block" }}
							key={useColorModeValue("light", "dark")}
							initial={{ y: -20, opacity: 0 }}
							animate={{ y: 0, opacity: 1, rotate: [0, 0, 360, 180, 0] }}
							exit={{ y: 20, opacity: 0 }}
							transition={{ duration: 0.5 }}
						>
							<Image w="25px" borderRadius="full" src={useColorModeValue("/icon.png", "/iconSun.png")} alt="icon page" />
						</motion.div>
					</AnimatePresence>
					<Link cursor="pointer" href="/">
						<Heading size="md" fontWeight="extrabold">
							Ramon Martins
						</Heading>
					</Link>
				</Flex>
				<Links />
			</HStack>
			<HStack>
				<ThemeToggle />
				<MenuOptions />
			</HStack>
		</Flex>
	</Flex>
);