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
import NavBar from "./../components/Elements/Navbar";
export default function Home(): JSX.Element {
  const [isSmallerThan880] = useMediaQuery(
    "(max-width:880px)"
  );
  return (
    <Fragment>
      <Head>
        <meta charSet='UTF-8' />
        <meta
          http-equiv='X-UA-Compatible'
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
        mediaQuerySize={isSmallerThan880}
      />
      <Flex
        w='100vw'
        h='100vh'
        bgImage="url('./it.webp')"
        bgRepeat='no-repeat'
        bgPosition='left'
        bgSize='cover'
        justify={!isSmallerThan880 ? "start" : "center"}
        align='center'>
        <Flex flexDir='column'>
          <Text
            mx={!isSmallerThan880 ? Number(48) : Number(0)}
            fontWeight='bold'
            h={!isSmallerThan880 ? "60px" : "30px"}
            color='gray.50'
            fontSize={!isSmallerThan880 ? "7xl" : "3xl"}
            letterSpacing={2}>
            TECHNOLOGY
          </Text>
          <Text
            mx={!isSmallerThan880 ? Number(48) : Number(0)}
            fontWeight='bold'
            h={!isSmallerThan880 ? "60px" : "30px"}
            color='gray.50'
            fontSize={!isSmallerThan880 ? "7xl" : "3xl"}
            letterSpacing={2}>
            & VISUAL AGENCY
          </Text>
          <Button
            size='xs'
            w={!isSmallerThan880 ? "40%" : "100%"}
            mx={!isSmallerThan880 ? Number(48) : Number(0)}
            fontSize={!isSmallerThan880 ? "4xl" : "3xl"}
            my={!isSmallerThan880 ? Number(40) : Number(5)}
            variant='link'>
            LEARN MORE
          </Button>
        </Flex>
      </Flex>
    </Fragment>
  );
}
