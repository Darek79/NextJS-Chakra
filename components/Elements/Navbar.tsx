import {
  Box,
  Flex,
  Center,
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
import Link from "next/link";
import React, {useState, useRef, Fragment} from "react";
import {HamburgerIcon} from "@chakra-ui/icons";
import Image from "next/image";
import {categories} from "./../../page_defaults/defaults";
import SideBar from "./SideBar";
import TextElement from "./TextElement";

interface CompProps {
  bg?: string;
  txtSize?: string;
  txtColor?: string;
  iconColor?: string;
  bgSideBar?: string;
  txtColorSideBar?: string;
  txtSizeSideBar?: string;
  mediaQuerySize?: boolean;
}

// bgSideBar='gray.900'
//  txtSizeSideBar='4xl'
// txtColorSideBar='gray.50'

export default function NavBar({
  bg,
  bgSideBar,
  txtSize,
  txtSizeSideBar,
  txtColor,
  txtColorSideBar,
  iconColor,
  mediaQuerySize,
}: CompProps): JSX.Element {
  const [isSmallerThan880] = useMediaQuery(
    "(max-width:880px)"
  );
  const {isOpen, onOpen, onClose} = useDisclosure();
  return (
    <Fragment>
      <Drawer
        placement='right'
        isOpen={isOpen}
        onClose={onClose}
        size='sm'>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody
            bg={bgSideBar}
            display='flex'
            flexDir='column'
            alignItems='center'
            justifyContent='start'>
            {categories &&
              categories.map((el) => (
                <TextElement
                  margin={5}
                  txtColor={txtColorSideBar}
                  txtSize={txtSizeSideBar}
                  txtSpacing={2}>
                  {el}
                </TextElement>
              ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex
        w='100vw'
        h='3rem'
        bg={bg}
        pos='fixed'
        zIndex={2}>
        <Box w='15%' h='100%' minW={44}>
          <Box
            h='100%'
            bgRepeat='no-repeat'
            bgImage="url('logo.svg')"
            bgPosition='center'
          />
        </Box>
        <Box w='100%' h='100%'>
          {!mediaQuerySize ? (
            <Flex
              w='100%'
              h='100%'
              align='center'
              justify='flex-end'>
              {categories &&
                categories.map((el) => (
                  <Link key={el} href={`/${el}`}>
                    <Box px={4}>
                      <Text
                        color={txtColor}
                        fontSize={txtSize}
                        letterSpacing={1}
                        _hover={{
                          color: "yellow.300",
                          cursor: "pointer",
                          transition: "all 350ms",
                        }}>
                        {el.toUpperCase()}
                      </Text>
                    </Box>
                  </Link>
                ))}
            </Flex>
          ) : undefined}
        </Box>
        <Center
          w='5%'
          minW={9}
          onClick={onOpen}
          _hover={{cursor: "pointer"}}>
          <HamburgerIcon w={8} h={8} color={iconColor} />
        </Center>
      </Flex>
    </Fragment>
  );
}
