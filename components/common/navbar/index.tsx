import Image from "next/image";
import { useAnimation, useCycle, useViewportScroll } from "framer-motion";
import useMeasure from "react-use-measure";
import { MenuToggle } from "./menuToggle";
import { Navigation } from "./navigation";
import { useEffect } from "react";
import useWindowDimensions from "../../../customHooks/useWindowsDimentions";
import { Box } from "@chakra-ui/react";
import { ChakraBox, ChakraNav } from "../framerMotionElements";

interface Props {}

const megaMenuVariants = {
  open: (height = 500) => ({
    clipPath: `circle(${height * 2 + 400}px at 87% 50px)`,
    // background: 'rgba(255,255,255,1)',
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(1px at 87% 50px)",
    //background: 'rgba(255,255,255,1)',
    opacity: 0,
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const menuBackgroundVariants = {
  open: {
    opacity: 1,
    display: "block",
    translateX: "0px",
    transition: {
      bounce: 0,
      duration: 0.5,
    },
  },
  closed: {
    opacity: 1,
    display: "none",
    translateX: "500px",
    transition: {
      bounce: 0,
      duration: 0.5,
    },
  },
};

export const Navbar = ({}: Props) => {
  const [ref, { height }] = useMeasure();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const windowDimensions = useWindowDimensions();

  return (
    <ChakraBox
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      boxSizing="border-box"
      px="10px"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="1"
      bg="white"
      initial="visible"
    >
      <Box
        position="relative"
        zIndex="200"
        maxWidth="100px"
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <Box height="50px" width="50px" mr="20px">
          {/* <Image
            width={403}
            height={403}
            alt="ivanrl.dev logo"
            src="/icon/icon_bg_r_x1.png"
            width="100%"
            //className={styles.navbar__logo_image}
          /> */}
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center" zIndex="200">
        <ChakraNav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={ref}
        >
          <ChakraBox
            position="fixed"
            top="0"
            right="0"
            //left="0"
            bottom="0"
            width={{ base: "100%", md: "40vw" }}
            bg="#0D3C68"
            opacity="0.8"
            onClick={() => toggleOpen()}
            variants={menuBackgroundVariants}
          />
          <ChakraBox
            position="fixed"
            height="10px"
            right="0"
            bottom="0"
            zIndex="1"
            backgroundColor="brand.main"
            overflow="hidden"
            width="100%"
            animate={{
              height: windowDimensions.height,
            }}
            variants={megaMenuVariants}
          >
            <Navigation hideSidebar={toggleOpen} />
          </ChakraBox>
          <MenuToggle toggle={() => toggleOpen()} isOpen={isOpen} />
        </ChakraNav>
      </Box>
    </ChakraBox>
  );
};
