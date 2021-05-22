import {Flex} from "@chakra-ui/react";
import NewsCard from "./NewsCard";
import {useContext} from "react";
import {AppContext} from "../../store";
import {v4} from "uuid";
export default function NewsCardMain(): JSX.Element {
  const {breakpoint, innerW} = useContext(AppContext);
  return (
    <Flex
      justify='space-evenly'
      w='100%'
      flexDir={innerW > breakpoint ? "row" : "column"}>
      {[1, 2, 3].map((el) => (
        <NewsCard
        key={v4()}
          textColor='gray.500'
          titleColor='gray.900'
          breakpoint={breakpoint}
          innerW={innerW}
          url={`/blog${el}.jpg`}
          title='How to write rogue mote of dust love'
          text='Bearable only through love hydrogen atoms bits of moving fluff culture shores of the cosmic ocean paroxysm of global death ...'
        />
      ))}
    </Flex>
  );
}
