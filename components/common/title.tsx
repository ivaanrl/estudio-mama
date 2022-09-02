import { ChakraStyledOptions, Text } from "@chakra-ui/react";
import React from "react";

interface TitleProps {
  children: React.ReactNode;
  noMt?: boolean;
}

export const Title = ({ children, noMt = false }: TitleProps) => {
  return (
    <Text
      fontSize={{ base: "24px" }}
      fontWeight="bold"
      textAlign="center"
      mb={{ base: "30px" }}
      mt={noMt ? {} : { base: "30px" }}
    >
      {children}
    </Text>
  );
};
