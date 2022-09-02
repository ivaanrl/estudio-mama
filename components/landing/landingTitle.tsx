import { Box, Text } from "@chakra-ui/react";
import { Title } from "../common/title";

export const LandingTitle = () => {
  return (
    <Box>
      <Title>
        LUSICH DEL CASTELLO <br /> & ASOCIADOS
      </Title>
      <Text
        fontSize={{ base: "16px" }}
        fontWeight="semibold"
        textAlign="center"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin amet
        metus id elit porta eros. Pretium velit aenean nam enim lacus
        sollicitudin mi.
      </Text>
    </Box>
  );
};
