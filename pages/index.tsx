import Head from "next/head";
import {Fragment} from "react";
import {
  Box,
  Flex,
  Center,
  Button,
  useMediaQuery,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import TextElement from "./../components/Elements/TextElement";
import Services from "./../components/Elements/PageWrapper";
import NavBar from "./../components/Elements/Navbar";
export default function Home(): JSX.Element {
  const [isSmallerThan880] = useMediaQuery(
    "(max-width:880px)"
  );

  function switcher(
    state: boolean,
    arg1: any,
    arg2: any
  ): any {
    return !state ? arg1 : arg2;
  }
  return (
    <Fragment>
      <Head>
        <meta charSet='UTF-8' />
        <meta
          httpEquiv='X-UA-Compatible'
          content='IE=edge'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        />
        <title>Document</title>
      </Head>
      <NavBar
        bg='gray.900'
        bgSideBar='gray.900'
        txtSize='md'
        txtSizeSideBar='4xl'
        txtColor='gray.50'
        txtColorSideBar='gray.50'
        iconColor='gray.50'
      />
      <Flex
        w='100vw'
        h='100vh'
        bgImage="url('./it.webp')"
        bgRepeat='no-repeat'
        bgPosition='left'
        bgSize='cover'
        justify={"start"}
        align='center'>
        <Flex flexDir='column'>
          <Text letterSpacing={2}>TECHNOLOGY</Text>
          <Text letterSpacing={2}>& VISUAL AGENCY</Text>
          <Button size='xs' variant='link'>
            LEARN MORE
          </Button>
        </Flex>
      </Flex>
    </Fragment>
  );
}

{
  /* <Services
width='100vw'
height='100vh'
title='Services'
breakPoint={isSmallerThan880}>
kick
</Services> */
}

{
  /* <NavBar
        bg='gray.900'
        bgSideBar='gray.900'
        txtSize='md'
        txtSizeSideBar='4xl'
        txtColor='gray.50'
        txtColorSideBar='gray.50'
        iconColor='gray.50'
      /> */
}
