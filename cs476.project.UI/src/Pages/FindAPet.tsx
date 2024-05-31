import {
    Heading,
    SimpleGrid
} from '@chakra-ui/react';

import PetCard from '../components/PetCard';

export default function FindAPet() {


    return (

        <>
            <Heading as="h1" size="3xl" textAlign="center" m="20">
                Find A Pet
            </Heading><SimpleGrid columns={{ md: 2, lg: 3 }} spacing="10px">
            </SimpleGrid>

            <SimpleGrid columns={{ md: 2, lg: 3 }} spacing="40px">

                <PetCard />
            </SimpleGrid>

        </>
    )
}