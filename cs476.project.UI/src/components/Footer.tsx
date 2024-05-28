import { Flex, Text, Box } from '@chakra-ui/react'

export default function Footer() {
    return (
        <Flex textAlign={'center'} bg='#FF9F66' color='white' p='10'>
            <Box flex='1'>
                <Text as='b' >© 2024 Pet Adoption Website</Text>
            </Box>
        </Flex>
    )
}