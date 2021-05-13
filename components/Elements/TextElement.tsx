import {position, SpaceProps, Text} from "@chakra-ui/react";
interface CompProps {
  txtColor: string;
  txtSize: string;
  txtSpacing: number;
  children: string;
  margin?: number;
 
}
export default function TextElement({
  txtColor,
  txtSize,
  txtSpacing,
  children,
  margin,
  
}: CompProps): JSX.Element {
  return (
    <Text
      m={margin}
      color={txtColor}
      fontSize={txtSize}
      letterSpacing={txtSpacing}
      _hover={{
        color: "yellow.300",
        cursor: "pointer",
        transition: "all 350ms",
      }}>
      {children.toUpperCase()}
    </Text>
  );
}
