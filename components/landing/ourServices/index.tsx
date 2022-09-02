import { Box, Flex, Text } from "@chakra-ui/react";
import { MdFamilyRestroom } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { Service } from "./service";
import { Title } from "../../common/title";

const services = [
  {
    title: "DERECHO DE FAMILIA",
    icon: MdFamilyRestroom,
  },
  {
    title: "DERECHO DE FAMILIA 2",
    icon: FiMoreHorizontal,
  },
  {
    title: "DERECHO DE FAMILIA 3",
    icon: MdFamilyRestroom,
  },
  {
    title: "VER TODOS",
    titleProps: { mt: "10px" },
    icon: FiMoreHorizontal,
  },
];

export const OurServices = () => {
  return (
    <Box>
      <Title>NUESTROS SERVICIOS</Title>
      <Flex wrap="wrap">
        {services.map((service, idx) => (
          <Service key={service.title} idx={idx} {...service} />
        ))}
      </Flex>
    </Box>
  );
};
