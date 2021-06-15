import {Box, Flex, Text} from "@chakra-ui/react";
import {breakpoint} from "../../page_defaults/defaults";

interface CompProps {
  width?: string;
  height?: string;
  title?: string;
  backC?: string;
  innerW: number;
  defaultCategoryColor: string;
  defaultCategoryTextColor: string;
  defaultBreakpoint: number;
  children: React.ReactNode;
}

export default function PageWrapper({
  title,
  backC,
  innerW,
  defaultBreakpoint,
  defaultCategoryColor,
  defaultCategoryTextColor,
  width,
  height,
  children,
}: CompProps): JSX.Element {
  return (
    <Flex w={width} h={height} pos="relative" bg={backC}>
      <Flex pos="absolute" top={0} left={0}>
        <Flex
          w={innerW > breakpoint ? "25vw" : "50vw"}
          h={24}
          bg={defaultCategoryColor}
        >
          <Text
            color={defaultCategoryTextColor}
            m="auto"
            letterSpacing={2}
            fontSize={"2xl"}
          >
            {title.toUpperCase()}
          </Text>
        </Flex>
        <Box
          w={0}
          h={0}
          borderTop={`96px solid #80b918`}
          borderRight={`96px solid transparent`}
        />
      </Flex>
      {children}
    </Flex>
  );
}
