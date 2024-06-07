import React from "react";
import { Box, InputGroup, InputLeftElement, Input,

 } from "@chakra-ui/react";
 import { SearchIcon } from '@chakra-ui/icons';

export default function SearchBar (){
    return (

<Box alignSelf="flex-end"  width="100%" maxWidth="500px" mx="auto" mt="5">
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Input
          type="text"
          placeholder="Search your pet..."
        />
      </InputGroup>
    </Box>
  );
}