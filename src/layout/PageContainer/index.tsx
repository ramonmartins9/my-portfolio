import React from "react";
import { HStack, Heading, Icon, Stack, StackProps } from "@chakra-ui/react";
import { LinkButton } from "../../components";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useColorModeValue } from "@chakra-ui/react";

interface IProps extends StackProps {
	pageTitle?: string;
	workTitle?: string;
}

export const PageContainer: React.FC<IProps> = (props) => {
	const { children, pageTitle, workTitle, ...rest } = props;

	return (
		<Stack
			{...rest}
			mr={2}
			ml={2}
			mt={24}
			spacing={6}
			w="650px"
		>
			{pageTitle && workTitle && (
				<HStack>
					<LinkButton color={useColorModeValue("#65463E", "#AAD6A0")} href={`/${pageTitle}`}>
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
