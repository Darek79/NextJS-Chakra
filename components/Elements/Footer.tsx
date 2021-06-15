import {Box, Flex} from "@chakra-ui/react";
export default function Footer(): JSX.Element {
  return (
    <Flex bg="gray.900" w="100vw" h="30vh">
      <Box
        m="auto"
        w="15%"
        h="100%"
        minW={44}
        bgRepeat="no-repeat"
        bgImage="url('logo.svg')"
        bgPosition="center"
      ></Box>
    </Flex>
  );
}
