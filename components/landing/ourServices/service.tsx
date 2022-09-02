import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IconType } from "react-icons";

interface ServiceProps {
  title: string;
  titleProps?: object;
  icon: IconType;
  idx: number;
}

export const Service = ({ title, icon, idx, titleProps }: ServiceProps) => {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(idx === 0 || idx === 3);
  }, [idx]);

  return (
    <Flex
      flex={{ base: "40%" }}
      bg={isDark ? "brand.500" : "brand.50"}
      borderRadius={{ base: "10px" }}
      padding={{ base: "20px" }}
      mx="5px"
      alignItems="center"
      direction="column"
      mb="10px"
    >
      <Icon as={icon} w={12} h={12} color={isDark ? "white" : "black"} />
      <Text
        fontWeight="semibold"
        textAlign="center"
        color={isDark ? "white" : "black"}
        {...titleProps}
      >
        {title}
      </Text>
    </Flex>
  );
};
