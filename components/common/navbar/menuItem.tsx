import Link from "next/link";
import { useState } from "react";
import { ChakraLi, ChakraPath, ChakraSvg } from "../framerMotionElements";

interface Props {
  label: string;
  path: string;
  hideSidebar: () => void;
}

const variants = {
  open: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: 500,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ label, path, hideSidebar }: Props) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleClick = () => {
    hideSidebar();
  };

  return (
    <Link href={`/${path}`}>
      <ChakraLi
        color="white"
        fontSize="28px"
        padding="10px"
        position="relative"
        width="fit-content"
        overflow="hidden"
        variants={variants}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <>
          {" "}
          {label}{" "}
          <ChakraSvg position="absolute" left="0" right="0" top="45%">
            <ChakraPath
              animate={{
                pathLength: isHovered ? 1 : 0,
                transition: {
                  duration: 0.3,
                },
              }}
              d="M 0,0
          L 500,0
          "
              initial={{
                pathLength: 0,
              }}
              stroke="black"
              //   stroke={theme.sidebarStroke}
              strokeWidth="10px"
            />
          </ChakraSvg>
        </>
      </ChakraLi>
    </Link>
  );
};
