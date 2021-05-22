import {Box, Text, Flex} from "@chakra-ui/react";
import {useContext} from "react";
import {AppContext} from "../../store";
import Image from "next/image";
interface CompProps {
  title?: string;
  titleColor?: string;
  text?: string;
  textColor?: string;
  intro?: string;
  introColor?: string;
  img?: string;
}

export default function AboutCard({
  intro,
  title,
  text,
  textColor,
  titleColor,
  introColor,
}: CompProps): JSX.Element {
  const {breakpoint, innerW} = useContext(AppContext);
  return (
    <Flex
      flexDir={innerW > breakpoint ? "row" : "column"}
      mt={innerW > breakpoint ? "100px" : "120px"}
      w='100vw'
      h={innerW > breakpoint ? "100vh" : "auto"}
      align={innerW > breakpoint ? "center" : ""}
      justify={innerW > breakpoint ? "center" : ""}>
      <Box
        w={innerW > breakpoint ? "30%" : "100%"}
        mr={innerW > breakpoint ? 12 : 0}>
        <Text
          fontSize={innerW > breakpoint ? "xl" : "lg"}
          textAlign={
            innerW > breakpoint ? "left" : "center"
          }
          color={introColor}
          letterSpacing={2}>
          {intro.toUpperCase()}
        </Text>
        <Text
          textAlign={
            innerW > breakpoint ? "left" : "center"
          }
          fontSize={innerW > breakpoint ? "6xl" : "4xl"}
          lineHeight={innerW > breakpoint ? 1.5 : 1}
          fontWeight='bold'
          letterSpacing={1.5}
          my={8}
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
          mb={12}>
          {text}
        </Text>
      </Box>
      <Box
        minW='320px'
        w={innerW > breakpoint ? "100%" : "auto"}
        maxW='500px'
        p={2}>
        <Image
          layout='responsive'
          width={500}
          height={700}
          src='/womanlaptop.webp'
        />
      </Box>
    </Flex>
  );
}
