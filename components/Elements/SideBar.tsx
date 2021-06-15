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
import {v4} from "uuid";
import categories from "./../../page_defaults/defaults";
interface CompProps {
  bgSideBar?: string;
  txtColorSideBar?: string;
  txtSizeSideBar?: string;
}
export default function SideBar({
  bgSideBar,
  txtColorSideBar,
  txtSizeSideBar,
}: CompProps): JSX.Element {
  const {isOpen, onClose} = useDisclosure();
  return (
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
              <Text
                key={v4()}
                m={5}
                color={txtColorSideBar}
                fontSize={txtSizeSideBar}
                letterSpacing={2}
                _hover={{
                  color: "yellow.300",
                  cursor: "pointer",
                  transition: "all 350ms",
                }}>
                {el.toUpperCase()}
              </Text>
            ))}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
