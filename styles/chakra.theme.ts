import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#e4e4e4",
    100: "#b8dafa",
    200: "#8ec1f1",
    300: "#62a8ea",
    400: "#3a8fe3",
    500: "#0D3C68",
    600: "#185c9e",
    700: "#0e4171",
    800: "#032746",
    900: "#000e1c",
  },
};

const buttonTheme = {
  defaultProps: {
    colorScheme: "brand",
  },
};
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  colors,
  config,
  components: {
    Button: { ...buttonTheme },
  },
});
