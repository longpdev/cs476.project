import {
  Box,
  Text,
  Image,
  Heading,
  SimpleGrid,
  TableContainer,
  Table,
  Tbody,
  Td,
  Tr,
  Button,
  Divider,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import petData from "../assets/Mock-pets.json";

export interface Pet {
  id: number;
  breed: string;
  image: string;
  name: string;
  age: string;
  sex: string;
  category: string;
  description: string;
  trained: string;
  characterstics: string;
  health: string;
  colour: string;
  height: string;
  weight: string;
  accommodative: string;
}

export default function PetDetail() {
  const { id } = useParams();
  const [pet, setPet] = useState<Pet | null>(null);

  useEffect(() => {
    if (id !== undefined) {
      const petId = parseInt(id, 10);
      const foundPet = petData.Pets.find((pet) => pet.id === petId);
      setPet(foundPet ?? null);
    }
  }, [id]);

  if (!pet) {
    return (
      <Box bg="yellow" w="100%" p={4} color="red">
        <Text>Pet not found</Text>
      </Box>
    );
  }

  return (
    <>
      <Heading textAlign={"center"} py={"20"} size="2xl">
        {pet.name}{" "}
      </Heading>
      <SimpleGrid
        m={{ base: "10", lg: "5" }}
        columns={{ base: 1, lg: 2 }}
        boxShadow={{ base: "", lg: "2xl" }}
      >
        <Box pl={{ base: "0", lg: "10" }} pt="5" height={"100%"}>
          <Box height={"50%"}>
            <Image
              height={"100%"}
              width={{ base: "100%", lg: "80%" }}
              src={pet.image}
              alt={pet.name}
            />
          </Box>

          <Box
            height={"50%"}
            py={{ base: "3", lg: "5" }}
            alignContent={"center"}
          >
            <Heading py="1">About</Heading>
            <Text pb="1" as="b">
              Trained:{" "}
            </Text>
            <Text pb="2">{pet.trained}</Text>

            <Text pb="1" as="b">
              Health{""}
            </Text>
            <Text pb="2">{pet.health}</Text>

            <Text pb="1" as="b">
              Characterstics:{" "}
            </Text>
            <Text pb="2">{pet.characterstics}</Text>

            <Text pb="1" as="b">
              Friendly with:{" "}
            </Text>
            <Text pb="2">{pet.accommodative}</Text>
          </Box>
        </Box>

        <Box
          pr={{ base: "0", lg: "10" }}
          pt={{ base: "0", lg: "5" }}
          height={"100%"}
        >
          <Divider orientation="horizontal" />
          <Box height={{ base: "40%", lg: "20%" }} pb={{ base: "0", lg: "5" }}>
            <Text size="">{pet.description}</Text>
          </Box>

          <Box height={"50%"} py="5">
            <TableContainer>
              <Table variant="striped" colorScheme="teal">
                <Tbody>
                  <Tr>
                    <Td textAlign={"center"} colSpan={2}>
                      <Text as="b"> Id: </Text> {pet.id}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Text as="b"> Breed: </Text> {pet.breed}
                    </Td>
                    <Td>
                      <Text as="b"> Sex: </Text> {pet.sex}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Text as="b"> Height: </Text> {pet.height}
                    </Td>
                    <Td>
                      <Text as="b"> Weight: </Text> {pet.weight}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>
                      <Text as="b"> Colour: </Text> {pet.colour}
                    </Td>
                    <Td>
                      <Text as="b"> Age: </Text> {pet.age}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </SimpleGrid>

      <Box pl="5" pr="5" alignContent={"center"}>
        <Button width={{ base: "100%", lg: "25%" }}> Adopt</Button>
      </Box>
    </>
  );
}
