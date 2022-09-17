import { Box, Button } from "@chakra-ui/react";
import Image from "next/image";

export const WhastappButton = () => {
  const handleClick = () => {
    const url = "https://api.whatsapp.com/send?phone=5492262245511";
    window.open(url, "_blank");
  };

  return (
    <Button
      bgColor="#25D366"
      borderRadius="100%"
      padding={0}
      height={"60px"}
      width="60px"
      _hover={{
        cursor: "pointer",
        opacity: 0.5,
      }}
      cursor="pointer"
      onClick={handleClick}
    >
      <Image src="/WhatsApp.svg" alt="Whatsapp logo" height={50} width={50} />
    </Button>
  );
};
