import { Card, CardBody, Button, Text, Stack, Table, Tbody, Tr, Td, TableContainer, Image, Heading } from '@chakra-ui/react';

import { useState, useEffect } from 'react';

import petData from '../assets/Mock-pets.json'

type Pet = {
  id: number;
  name: string;
  image: string;
  breed: string;
  age: string;
  sex: string;
};

export default function PetCard() {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    setPets(petData.Pets);
  }, []);

  return (
    <>
      {pets.map(pet => (
        <Card maxW="sm" key={pet.id}>
          <CardBody>
            <Image
              width={"100%"}
              src={pet.image}
              alt='Green double couch with wooden legs'
              borderRadius='lg'
            />
            <Stack mt="6" spacing="1">
              <Heading textAlign={'center'} as="b" size="lg" mb="6" >
                {pet.name}
              </Heading>
              <TableContainer m="0px">
                <Table variant="striped" colorScheme="teal">
                  <Tbody>
                    <Tr>
                      <Td>
                        {' '}
                        <Text as="b">Breed : </Text>
                        {pet.breed}
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        {' '}
                        <Text as="b"> Age : </Text>
                        {pet.age}
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        {' '}
                        <Text as="b"> Sex : </Text>
                        {pet.sex}
                      </Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
              <Button variant="solid" colorScheme="blue" mt={"6"}>
                View Detail
              </Button>
            </Stack>
          </CardBody>
        </Card>
      ))}
    </>
  )
}