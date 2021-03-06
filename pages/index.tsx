import Head from "next/head";
import {Fragment, useContext} from "react";
import {Flex, Button, Text} from "@chakra-ui/react";
import ServiceCardMain from "../components/Service/ServiceCardMain";
import Services from "./../components/Elements/PageWrapper";
import NavBar from "./../components/Elements/Navbar";
import AboutCard from "./../components/About/AboutCard";
import NewsCard from "./../components/News/NewsCardMain";
import Footer from "./../components/Elements/Footer";
import {AppContext} from "./../store";
export default function Home(): JSX.Element {
  const {breakpoint, innerW} = useContext(AppContext);
  // let innerW = IsBreakpoint();

  return (
    <Fragment>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          httpEquiv="X-UA-Compatible"
          content="IE=edge"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="google-site-verification"
          content="ySKGebSqf-mEeO64BDZs1Op7AQ0JgLnOYEHptwIQIBM"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K8DZGCT');`,
          }}
        ></script>
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-NWVDCGX"></script>
        <title>Mainpage</title>
      </Head>
      <NavBar
        bg="gray.900"
        bgSideBar="gray.900"
        txtSize="md"
        txtSizeSideBar="4xl"
        txtColor="gray.50"
        txtColorSideBar="gray.50"
        iconColor="gray.50"
        mediaQuery={innerW}
        defaultBreakpoint={breakpoint}
      />
      <Flex
        w="100vw"
        h="100vh"
        bgImage="url('./it.webp')"
        bgRepeat="no-repeat"
        bgPosition="left"
        bgSize="cover"
        justify={innerW > breakpoint ? "start" : "center"}
        align="center"
      >
        <Flex flexDir="column">
          <Text
            ml={
              innerW > breakpoint ? Number(48) : Number(0)
            }
            fontWeight="bold"
            h={innerW > breakpoint ? "60px" : "30px"}
            color="gray.50"
            fontSize={innerW > breakpoint ? "7xl" : "3xl"}
            letterSpacing={2}
          >
            TECHNOLOGY
          </Text>
          <Text
            ml={
              innerW > breakpoint ? Number(48) : Number(0)
            }
            fontWeight="bold"
            h={innerW > breakpoint ? "60px" : "30px"}
            color="gray.50"
            fontSize={innerW > breakpoint ? "7xl" : "3xl"}
            letterSpacing={2}
          >
            & VISUAL AGENCY
          </Text>
          <Button
            size="xs"
            w={innerW > breakpoint ? "40%" : "100%"}
            ml={
              innerW > breakpoint ? Number(48) : Number(0)
            }
            fontSize={innerW > breakpoint ? "4xl" : "3xl"}
            mt={innerW > breakpoint ? Number(5) : Number(0)}
            variant="link"
          >
            LEARN MORE
          </Button>
        </Flex>
      </Flex>
      <Services
        width="100vw"
        height="100vh"
        title="Services"
        backC="gray.900"
        innerW={innerW}
        defaultCategoryColor="#80b918"
        defaultCategoryTextColor="gray.50"
        defaultBreakpoint={breakpoint}
      >
        <ServiceCardMain />
      </Services>
      <Services
        width="100vw"
        title="About"
        backC="gray.100"
        defaultCategoryColor="#80b918"
        defaultCategoryTextColor="gray.50"
        defaultBreakpoint={breakpoint}
        innerW={innerW}
      >
        <AboutCard
          intro="who we are"
          title="Live up to
          your creative potential."
          text="Tempor ad mollit mollit dolor ut labore et velit commodo proident proident. Cillum dolor nisi pariatur ullamco proident veniam adipisicing. Pariatur deserunt nulla sit culpa cupidatat."
          textColor="gray.500"
          introColor="gray.500"
          titleColor="gray.900"
        />
      </Services>
      <Services
        width="100vw"
        // height='100vh'
        title="News"
        backC="gray.100"
        defaultCategoryColor="#80b918"
        defaultCategoryTextColor="gray.50"
        defaultBreakpoint={breakpoint}
        innerW={innerW}
      >
        <NewsCard />
      </Services>
      <Footer />
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K8DZGCT"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      ></noscript>
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
