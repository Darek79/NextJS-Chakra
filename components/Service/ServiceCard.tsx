import {Box, Text} from "@chakra-ui/react";

interface CompProps {
  svg?: React.ReactElement;
  title?: string;
  text?: string;
  breakpoint?: number;
  innerW?: number;
}

export default function ServiceCard({
  svg,
  text,
  title,
  innerW,
  breakpoint,
}: CompProps): JSX.Element {
  return (
    <Box
      w={72}
      h='400px'
      my={innerW > breakpoint ? 40 : 20}>
      <Box
        w={40}
        pos='relative'
        left={innerW > breakpoint ? 2 : 10}>
        {svg}
      </Box>
      <Box
        w='100%'
        h='40%'
        zIndex={10}
        top={-36}
        pos='relative'
        bg='gray.900'>
        <Text
          color='gray.50'
          fontWeight='bold'
          fontSize='5xl'
          textAlign={
            innerW > breakpoint ? "left" : "center"
          }
          letterSpacing={2}>
          {title}
        </Text>
        <Text
          color='gray.50'
          fontSize='2xl'
          textAlign={
            innerW > breakpoint ? "left" : "center"
          }
          letterSpacing={2}>
          {text}
        </Text>
      </Box>
    </Box>
  );
}
