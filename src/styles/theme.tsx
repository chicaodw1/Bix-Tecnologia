import { createSystem, defaultConfig } from "@chakra-ui/react";

const customConfig = {
  theme: {
    tokens: {
      colors: {
        brand: {
          500: { value: "tomato" },
          600: { value: "red" },
        },
      },
      fonts: {
        heading: { value: "'Arial', sans-serif" },
        body: { value: "'Arial', sans-serif" },
      },
    },
    styles: {
      global: {
        "html, body": {
          backgroundColor: { value: "white" },
          color: { value: "black" },
        },
      },
    },
  },
};

export const system = createSystem(defaultConfig, customConfig);
