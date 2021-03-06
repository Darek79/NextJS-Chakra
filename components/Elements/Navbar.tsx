import {
  Box,
  Flex,
  Center,
  Text,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import React, {Fragment} from "react";
import {HamburgerIcon} from "@chakra-ui/icons";
import categories from "./../../page_defaults/defaults";
import TextElement from "./TextElement";
import {v4} from "uuid";

interface CompProps {
  bg?: string;
  txtSize?: string;
  txtColor?: string;
  iconColor?: string;
  bgSideBar?: string;
  txtColorSideBar?: string;
  txtSizeSideBar?: string;
  mediaQuery?: number;
  defaultBreakpoint?: number;
}

export default function NavBar({
  bg,
  bgSideBar,
  txtSize,
  txtSizeSideBar,
  txtColor,
  txtColorSideBar,
  iconColor,
  mediaQuery,
  defaultBreakpoint,
}: CompProps): JSX.Element {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <Fragment>
      <Drawer
        placement="right"
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            bg="gray.100"
            _hover={{bg: "yellow.300"}}
          />
          <DrawerBody
            bg={bg}
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="start"
          >
            {categories &&
              categories.map((el) => (
                <TextElement
                  key={v4()}
                  margin={5}
                  txtColor={txtColorSideBar}
                  txtSize={txtSizeSideBar}
                  txtSpacing={2}
                >
                  {el}
                </TextElement>
              ))}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex
        w="100vw"
        h="3rem"
        bg={bg}
        pos="fixed"
        zIndex={20}
      >
        <Box
          w="15%"
          h="100%"
          minW={44}
          bgRepeat="no-repeat"
          bgImage="url('logo.svg')"
          bgPosition="center"
        ></Box>
        <Box w="100%" h="100%">
          {mediaQuery > defaultBreakpoint ? (
            <Flex
              w="100%"
              h="100%"
              align="center"
              justify="flex-end"
            >
              {categories &&
                categories.map((el) => (
                  <Link
                    key={el}
                    href={el === "Home" ? "/" : `/${el}`}
                  >
                    <Box px={4}>
                      <Text
                        color={txtColor}
                        fontSize={txtSize}
                        letterSpacing={1}
                        _hover={{
                          color: "yellow.300",
                          cursor: "pointer",
                          transition: "all 350ms",
                        }}
                      >
                        {el.toUpperCase()}
                      </Text>
                    </Box>
                  </Link>
                ))}
            </Flex>
          ) : undefined}
        </Box>
        <Center
          w="5%"
          minW={9}
          onClick={onOpen}
          _hover={{cursor: "pointer"}}
        >
          <HamburgerIcon w={8} h={8} color={iconColor} />
        </Center>
      </Flex>
    </Fragment>
  );
}
