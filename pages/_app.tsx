import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/chakra.theme";
import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import Background from "../components/common/background";
import { Navbar } from "../components/common/navbar";

function MyApp({ Component, pageProps }: AppProps) {
  // const x = useMotionValue(0.5);
  // const { scrollYProgress } = useScroll();

  // const onMove = (e: any) => {
  //   const bounds = e.currentTarget.getBoundingClientRect();

  //   // set x,y local coordinates
  //   const xValue = (e.clientX - bounds.x) / e.currentTarget.clientWidth;
  //   const yValue = (e.clientY - bounds.y) / e.currentTarget.clientHeight;

  //   // update MotionValues
  //   x.set(xValue, true);
  // };

  // const translateX = useTransform(x, [0, 1], [-2, 2], {
  //   clamp: true,
  // });

  // const translateY = useTransform(scrollYProgress, [0, 1], [-10, 10], {
  //   clamp: true,
  // });

  return (
    <ChakraProvider theme={theme} resetCSS>
      <motion.div //onPointerMove={onMove}
      >
        <Background //translateX={translateX} translateY={translateY}
        />
        <Navbar />
        <Box pt="50px">
          <Component {...pageProps} />
        </Box>
      </motion.div>
    </ChakraProvider>
  );
}

export default MyApp;
