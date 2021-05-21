import Head from "next/head";
import {
  Fragment,
  useState,
  useMemo,
  useEffect,
  useRef,
  useContext,
} from "react";
import debounce from "lodash.debounce";
import {
  Box,
  Flex,
  Center,
  Button,
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
import ServiceCardMain from "../components/Service/ServiceCardMain";
import Services from "./../components/Elements/PageWrapper";
import NavBar from "./../components/Elements/Navbar";
import AboutCard from "./../components/About/AboutCard";
import {AppContext} from "./../store";
export default function Home(): JSX.Element {
  const {breakpoint, innerW} = useContext(AppContext);
  // let innerW = IsBreakpoint();

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
        <title>Mainpage</title>
      </Head>
      <NavBar
        bg='gray.900'
        bgSideBar='gray.900'
        txtSize='md'
        txtSizeSideBar='4xl'
        txtColor='gray.50'
        txtColorSideBar='gray.50'
        iconColor='gray.50'
        mediaQuery={innerW}
        defaultBreakpoint={breakpoint}
      />
      {console.log(breakpoint, "object")}
      <Flex
        w='100vw'
        h='100vh'
        bgImage="url('./it.webp')"
        bgRepeat='no-repeat'
        bgPosition='left'
        bgSize='cover'
        justify={innerW > breakpoint ? "start" : "center"}
        align='center'>
        <Flex flexDir='column'>
          <Text
            ml={
              innerW > breakpoint ? Number(48) : Number(0)
            }
            fontWeight='bold'
            h={innerW > breakpoint ? "60px" : "30px"}
            color='gray.50'
            fontSize={innerW > breakpoint ? "7xl" : "3xl"}
            letterSpacing={2}>
            TECHNOLOGY
          </Text>
          <Text
            ml={
              innerW > breakpoint ? Number(48) : Number(0)
            }
            fontWeight='bold'
            h={innerW > breakpoint ? "60px" : "30px"}
            color='gray.50'
            fontSize={innerW > breakpoint ? "7xl" : "3xl"}
            letterSpacing={2}>
            & VISUAL AGENCY
          </Text>
          <Button
            size='xs'
            w={innerW > breakpoint ? "40%" : "100%"}
            ml={
              innerW > breakpoint ? Number(48) : Number(0)
            }
            fontSize={innerW > breakpoint ? "4xl" : "3xl"}
            mt={innerW > breakpoint ? Number(5) : Number(0)}
            variant='link'>
            LEARN MORE
          </Button>
        </Flex>
      </Flex>
      <Services
        width='100vw'
        // height='100vh'
        title='Services'
        backC='gray.900'
        innerW={innerW}
        defaultCategoryColor='#80b918'
        defaultCategoryTextColor='gray.50'
        defaultBreakpoint={breakpoint}>
        <ServiceCardMain />
      </Services>
      <Services
        width='100vw'
        height='100vh'
        title='About'
        backC='gray.100'
        defaultCategoryColor='#80b918'
        defaultCategoryTextColor='gray.50'
        defaultBreakpoint={breakpoint}
        innerW={innerW}>
        <AboutCard
          intro='who we are'
          title='Live up to
          your creative potential.'
          text='Tempor ad mollit mollit dolor ut labore et velit commodo proident proident. Cillum dolor nisi pariatur ullamco proident veniam adipisicing. Pariatur deserunt nulla sit culpa cupidatat.'
          textColor='gray.500'
          introColor='gray.500'
          titleColor='gray.900'
        />
      </Services>
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
