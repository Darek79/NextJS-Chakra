import {Box, Text, Flex} from "@chakra-ui/react";
import {useContext} from "react";
import {AppContext} from "../../store";
import Image from "next/image";
interface CompProps {
  title?: string;
  titleColor?: string;
  text?: string;
  textColor?: string;
  img?: string;
  innerW: number;
  breakpoint?: number;
  url?: string;
}

export default function NewsCard({
  title,
  text,
  textColor,
  titleColor,
  innerW,
  breakpoint,
  url,
}: CompProps): JSX.Element {
  return (
    <Flex
      flexDir='column'
      mt={innerW > breakpoint ? "120px" : "120px"}
      w={innerW > breakpoint ? "400px" : "auto"}
      align={innerW > breakpoint ? "center" : ""}
      justify={innerW > breakpoint ? "center" : ""}
      _hover={{
        transition: "all 350ms",
      }}>
      <Box
        minW='320px'
        w={innerW > breakpoint ? "100%" : "auto"}
        maxW={innerW > breakpoint ? "400px" : "100%"}
        px={innerW > breakpoint ? 0 : 2}
        overflow='hidden'>
        <Box
          w={innerW > breakpoint ? "400px" : "100%"}
          h={innerW > breakpoint ? "600px" : "400px"}
          bgImage={`url(${url})`}
          bgPosition='center'
          bgRepeat='no-repeat'
          _hover={{
            transform: "scale(1.1)",
            transition: "all 0.3s ease-in",
          }}
        />
      </Box>
      <Box w={innerW > breakpoint ? "100%" : "100%"} p={2}>
        <Text
          textAlign={
            innerW > breakpoint ? "left" : "center"
          }
          fontSize='3xl'
          lineHeight={innerW > breakpoint ? 1.5 : 1}
          fontWeight='bold'
          letterSpacing={1.5}
          my={4}
          color={titleColor}>
          {title}
        </Text>
        <Text
          fontSize={innerW > breakpoint ? "xl" : "lg"}
          textAlign={
            innerW > breakpoint ? "left" : "center"
          }
          color={textColor}
          letterSpacing={1.5}
          mb={innerW > breakpoint ? 12 : 0}>
          {text}
        </Text>
      </Box>
    </Flex>
  );
}
// "url('./blog1.jpg')"
