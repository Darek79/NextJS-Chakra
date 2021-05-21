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

interface CompProps {
  path?: string;
}
export default function One({
  path,
}: CompProps): JSX.Element {
  return (
    <Box
      bgImage="url('/1a.svg')"
      bgPosition='center'
      bgRepeat='no-repeat'
      w='150px'
      h='385px'></Box>
  );
}


