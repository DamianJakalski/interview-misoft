import React from "react";
import { Center, Box, Image, Button } from "@chakra-ui/react";
import { SingleCharacterProps } from "./types";

export const CharacterCard: React.FC<SingleCharacterProps> = ({
  id,
  image,
  name,
}) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={image} alt={`Image of ${name}`} />
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {name}
        </Box>
      </Box>
    </Box>
  );
};
