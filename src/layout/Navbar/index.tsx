import { Flex, Heading, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { Links } from "./Links";
import { ThemeToggle, MenuOptions, LinkButton, AnimateRoll } from "../../components";
import { useColorModeValue } from "@chakra-ui/react";

export const Navbar: React.FC = () => (
	<Flex
		position="fixed"
		zIndex={2} backdropFilter="blur(20px)"
		w="100%"
		pr={2}
		pl={2}
		justifyContent="center"
		h="16"
		bg={useColorModeValue("rgba(255,220,184,0.8)", "blackAlpha.800")}
	>
		<Flex
			minW={{ base: "100%", lg: "900px" }}
			alignItems="center"
			justifyContent="space-between"
		>
			<HStack spacing={8} color="secondary.500">
				<Flex justifyContent="center">
					<AnimateRoll>
						<Image w="25px" borderRadius="full" src={useColorModeValue("/icon.png", "/iconSun.png")} alt="icon page" />
					</AnimateRoll>
					<LinkButton color={useColorModeValue("black", "white")} cursor="pointer" href="/">
						<Heading
							size="md"
							fontWeight="extrabold"
							display={{ base: "none", md: "block"}}
						>
								Ramon Martins
						</Heading>
					</LinkButton>
				</Flex>
				<Links />
			</HStack>
			<HStack>
				<HStack>
					<AnimateRoll>
						<LinkButton href="/" locale="pt-BR">
							<Image
								w="50px"
								h="35px"
								borderRadius="full"
								src="/brazil.png"
								alt="icone do Brasil, idioma portugues"
								cursor="pointer"
							/>
						</LinkButton>
					</AnimateRoll>
					<AnimateRoll>
						<LinkButton href="/" locale="en-US">
							<Image
								w="50px"
								h="35px"
								borderRadius="full"
								src="/eua.png"
								alt="language english icon page"
								cursor="pointer"
							/>
						</LinkButton>
					</AnimateRoll>
				</HStack>
				<ThemeToggle />
				<MenuOptions />
			</HStack>
		</Flex>
	</Flex>
);
