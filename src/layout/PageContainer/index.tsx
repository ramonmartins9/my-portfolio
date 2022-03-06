import React from "react";
import { HStack, Heading, Icon, Stack, StackProps } from "@chakra-ui/react";
import { LinkButton } from "../../components";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useColorModeValue } from "@chakra-ui/react";

interface IProps extends StackProps {
	pageTitle?: string;
	workTitle?: string;
	href?: string;
}

export const PageContainer: React.FC<IProps> = (props) => {
	const { children, href, pageTitle, workTitle, ...rest } = props;

	return (
		<Stack
			{...rest}
			mr={4}
			ml={4}
			mt={24}
			spacing={8}
			w="650px"
		>
			{pageTitle && workTitle && href && (
				<HStack>
					<LinkButton color={useColorModeValue("#65463E", "#AAD6A0")} href={href}>
						{pageTitle}
					</LinkButton>
					<Icon as={MdOutlineKeyboardArrowRight} />
					<Heading fontSize="lg" >
						{workTitle}
					</Heading>
				</HStack>
			)}
			{children}
		</Stack>
	);
};
