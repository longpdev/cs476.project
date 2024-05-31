import { Box, Text, Image } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


import petData from '../assets/Mock-pets.json'

export interface Pet {
    id: number;
    breed: string;
    image: string;
    name: string;
    age: string;
    sex: string;
    category: string;
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
            <Box bg='yellow' w='100%' p={4} color='red'>
                <Text>Pet not found</Text>
            </Box>
        );
    }

    return (
        <>
            <Box bg='yellow' w='100%' p={4} color='red'>
                <Text>Details for pet ID: {pet.id}</Text>
                <Text>Pet Name {pet.name}</Text>
                <Image
                    src={pet.image}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                />            </Box>
        </>
    )
}
