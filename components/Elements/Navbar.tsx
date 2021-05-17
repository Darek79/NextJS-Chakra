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
import React, {
  useState,
  useRef,
  Fragment,
  useEffect,
} from "react";
import {HamburgerIcon} from "@chakra-ui/icons";
import Image from "next/image";
import categories from "./../../page_defaults/defaults";
import SideBar from "./SideBar";
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
}: CompProps): JSX.Element {
  const [innerW, setInnerW] = useState<number | null>(null);
  const {isOpen, onOpen, onClose} = useDisclosure();

  function resizeW(){
    console.log(window.innerWidth)
  }

  useEffect(() => {
    setInnerW(window.innerWidth);
    window.addEventListener('resize',resizeW)
    console.log(window.innerWidth);
    return ()=> window.removeEventListener('resize',resizeW)
  }, []);
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
            bg={bg}
            display='flex'
            flexDir='column'
            alignItems='center'
            justifyContent='start'>
            {categories &&
              categories.map((el) => (
                <TextElement
                  key={v4()}
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
        <Box
          w='15%'
          h='100%'
          minW={44}
          bgRepeat='no-repeat'
          bgImage="url('logo.svg')"
          bgPosition='center'></Box>
        <Box w='100%' h='100%'>
          {innerW > 880 ? (
            <Flex
              w='100%'
              h='100%'
              align='center'
              justify='flex-end'>
              {categories &&
                categories.map((el) => (
                  <Link
                    key={el}
                    href={el === "Home" ? "/" : `/${el}`}>
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

// {!isSmallerThan880 ? (
//   <Flex
//     w='100%'
//     h='100%'
//     align='center'
//     justify='flex-end'>
//     {categories &&
//       categories.map((el) => (
//         <Link
//           key={el}
//           href={el === "Home" ? "/" : `/${el}`}>
//           <Box px={4}>
//             {console.log(el)}
//             <Text
//               color={txtColor}
//               fontSize={txtSize}
//               letterSpacing={1}
//               _hover={{
//                 color: "yellow.300",
//                 cursor: "pointer",
//                 transition: "all 350ms",
//               }}>
//               {el.toUpperCase()}
//             </Text>
//           </Box>
//         </Link>
//       ))}
//   </Flex>
// ) : undefined}
