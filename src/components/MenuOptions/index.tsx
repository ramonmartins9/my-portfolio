
import React from "react";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	useColorModeValue,
	Icon,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { LinkButton } from "../LinkButton";

export const MenuOptions = () => (
	<Menu>
		<MenuButton>
			<Icon
				display={{base: "block", lg: "none"}}
				cursor="pointer"
				borderWidth={1}
				borderColor={useColorModeValue("black", "#FFDCB8")}
				p={2}
				borderRadius="base"
				color={useColorModeValue("black", "#FFDCB8")}
				w={10}
				h={10}
				as={AiOutlineMenu}
			/>
		</MenuButton>
		<MenuList bg={useColorModeValue("#FFDCB8", "black")}>
			<LinkButton href="/works">
				<MenuItem>
					Work
				</MenuItem>
			</LinkButton>
			<LinkButton href="/hobbies">
				<MenuItem>
					Hobbies
				</MenuItem>
			</LinkButton>
		</MenuList>
	</Menu>
);
