import {
  Card,
  CardBody,
  Button,
  Text,
  Stack,
  Table,
  Tbody,
  Tr,
  Td,
  TableContainer,
  Image,
  Heading,
} from "@chakra-ui/react";

import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

//import petData from "../assets/Mock-pets.json";

import axios from "axios";

interface Pet {
  _id: number;
  breed: string;
  image: string;
  name: string;
  age: string;
  sex: string;
  category: string;
  description: string;
  trained: string;
  characteristics: string;
  health: string;
  colour: string;
  height: string;
  weight: string;
  accommodative: string;
}

export default function PetCard() {
  const [pets, setPets] = useState<Pet[]>([]);

  const navigate = useNavigate();

  const handleViewDetail = (id: number) => {
    navigate(`/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const petResponse = await axios.get<Pet[]>("/pets");
        setPets(petResponse.data);
        console.log(petResponse.data); // Log the fetched data
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {Array.isArray(pets) && pets.length > 0 ? (
        pets.map((pet) => (
          <Card maxW="sm" key={pet._id}>
            <CardBody>
              <Image
                width={"100%"}
                src={pet.image}
                alt={`Image of ${pet.name}`}
                borderRadius="lg"
              />
              <Stack mt="6" spacing="1">
                <Heading textAlign={"center"} as="b" size="lg" mb="6">
                  {pet.name}
                </Heading>
                <TableContainer m="0px">
                  <Table variant="striped" colorScheme="teal">
                    <Tbody>
                      <Tr>
                        <Td>
                          <Text as="b">Breed:</Text> {pet.breed}
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Text as="b">Age:</Text> {pet.age}
                        </Td>
                      </Tr>
                      <Tr>
                        <Td>
                          <Text as="b">Sex:</Text> {pet.sex}
                        </Td>
                      </Tr>
                    </Tbody>
                  </Table>
                </TableContainer>
                <Button
                  onClick={() => handleViewDetail(pet._id)}
                  variant="solid"
                  colorScheme="blue"
                  mt={"6"}
                >
                  View Detail
                </Button>
              </Stack>
            </CardBody>
          </Card>
        ))
      ) : (
        <Text>No pets available</Text>
      )}
    </>
  );
}
