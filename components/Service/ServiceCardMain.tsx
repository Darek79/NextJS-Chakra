import ServiceCard from "./ServiceCard";
import {useContext} from "react";
import {AppContext} from "../../store";
import One from "../SVG/1";
import Two from "../SVG/2";
import Three from "../SVG/3";
import GenericNumber from "../SVG/GenericNumber";
import {
  Box,
  Flex,
  Center,
  useMediaQuery,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {Fragment} from "react";
export default function ServiceCardMain(): JSX.Element {
  const {breakpoint, innerW} = useContext(AppContext);
  return (
    <Fragment>
      {console.log(breakpoint, innerW)}
      <Flex
        m={innerW > breakpoint ? "" : "100px 0 20px 0 "}
        flexDir={innerW > breakpoint ? "row" : "column"}
        justify='space-around'
        align='center'
        w='100%'
        h='100%'>
        <ServiceCard
          svg={<One />}
          title='Precise'
          text='Aenean sollicitudin consectetur sem, id volutpat
          enim interdum vel. Sed dictum dictum dolor.'
          innerW={innerW}
          breakpoint={breakpoint}
        />
        <ServiceCard
          svg={<Two />}
          title='Support'
          text='Aenean sollicitudin consectetur sem, id volutpat
          enim interdum vel. Sed dictum dictum dolor.'
          innerW={innerW}
          breakpoint={breakpoint}
        />
        <ServiceCard
          svg={<Three />}
          title='Responsive'
          text='Aenean sollicitudin consectetur sem, id volutpat
          enim interdum vel. Sed dictum dictum dolor.'
          innerW={innerW}
          breakpoint={breakpoint}
        />
      </Flex>
    </Fragment>
  );
}
