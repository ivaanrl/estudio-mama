import { motion } from "framer-motion";
import { ChakraButton, ChakraPath, ChakraSvg } from "../framerMotionElements";

interface Props {
  toggle: () => void;
  isOpen: boolean;
}

const Path = (props: any) => (
  <ChakraPath strokeWidth="3" strokeLinecap="round" {...props} />
);

export const MenuToggle = ({ toggle, isOpen }: Props) => {
  return (
    <ChakraButton
      aria-label="sidebar toggle"
      padding="7px"
      border="none"
      position="relative"
      zIndex="500"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      whileHover={{
        cursor: "pointer",
        backgroundColor: isOpen ? "#0D3C68" : "#e4e4e4",
        transition: {
          duration: 0.3,
        },
      }}
      onClick={toggle}
    >
      <ChakraSvg height="25px" width="25px" pt="5px" viewBox="0 0 21 21">
        <Path
          variants={{
            closed: {
              d: "M 8 2.5 L 20 2.5",
              stroke: isOpen ? "#e4e4e4" : "#0D3C68",
            },
            open: {
              d: "M 3 16.5 L 17 2.5",
              stroke: isOpen ? "#e4e4e4" : "#0D3C68",
            },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1, stroke: isOpen ? "#e4e4e4" : "#0D3C68" },
            open: { opacity: 0, stroke: isOpen ? "#e4e4e4" : "#0D3C68" },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: {
              d: "M 14 16.346 L 20 16.346",
              stroke: isOpen ? "#e4e4e4" : "#0D3C68",
            },
            open: {
              d: "M 3 2.5 L 17 16.346",
              stroke: isOpen ? "#e4e4e4" : "#0D3C68",
            },
          }}
        />
      </ChakraSvg>
    </ChakraButton>
  );
};
