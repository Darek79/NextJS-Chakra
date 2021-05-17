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
  width?: string;
  height?: string;
  title?: string;
  backC?: string;
  breakPoint: boolean;
  children: React.ReactNode;
}

export default function PageWrapper({
  title,
  backC,
  breakPoint,
  width,
  height,
  children,
}: CompProps): JSX.Element {
  return (
    <Flex w={width} h={height}>
      <Flex>
        <Flex w={32} h={32} bg='#80b918'>
          <Text m='auto' letterSpacing={2} fontSize={"2xl"}>
            {title.toUpperCase()}
          </Text>
        </Flex>
        <Box
          w={0}
          h={0}
          borderTop={`128px solid #80b918`}
          borderRight={`128px solid transparent`}
        />
      </Flex>
      {children}
    </Flex>
  );
}
