import { motion } from "framer-motion";
import { MenuItem } from "./menuItem";
// import styles from "../../styles/navbar.module.scss";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../../customHooks/useWindowsDimentions";
import { ChakraBox, ChakraUl } from "../framerMotionElements";
// import SocialIcon from "./socialIcon";
// import linkedinOutlined from "@iconify/icons-ant-design/linkedin-outlined";
// import instagramOutlined from "@iconify/icons-ant-design/instagram-outlined";
// import youtubeOutlined from "@iconify/icons-ant-design/youtube-outlined";
// import twitterOutlined from "@iconify/icons-ant-design/twitter-outlined";

interface Props {
  hideSidebar: () => void;
}

const navigationItems = [
  { label: "Nuestros servicios", path: "servicios" },
  { label: "Blog", path: "blog" },
  { label: "My Projects", path: "#projects" },
  { label: "My Skills", path: "#skills" },
  { label: "Contactanos", path: "contact" },
];

export const Navigation = ({ hideSidebar }: Props) => {
  const windowDimentions = useWindowDimensions();
  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setHeight(windowDimentions.height);
    setWidth(windowDimentions.width);
  }, [windowDimentions.width, windowDimentions.height]);

  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <ChakraBox
      height="100%"
      display="flex"
      flexDirection="column"
      pt="20%"
      justifyContent="flex-start"
    >
      <ChakraUl
        height="60%"
        maxHeight="100vh"
        display="flex"
        flexDirection="column"
        alignItems="center"
        zIndex="300"
        width="100%"
        justifyContent="space-between"
        overflow="hidden"
        variants={variants}
      >
        {navigationItems.map(({ label, path }) => {
          return (
            <MenuItem
              key={path}
              label={label}
              path={path}
              hideSidebar={hideSidebar}
            />
          );
        })}
      </ChakraUl>
      {/* <ChakraUl
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        left="0"
        right="0"
        bottom="10%"
        variants={variants}
      >
        <SocialIcon icon={linkedinOutlined} />
        <SocialIcon icon={instagramOutlined} />
        <SocialIcon icon={youtubeOutlined} />
        <SocialIcon icon={twitterOutlined} />
      </ChakraUl> */}
    </ChakraBox>
  );
};
