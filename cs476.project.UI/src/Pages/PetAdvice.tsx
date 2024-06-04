import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

import petAdviceFaqsData from "../assets/PetAdviceFaqs.json";

type PetAdviceFaqsType = {
  question: string;
  details: string;
};

export default function PetAdvice() {
  const petAdvicefaqs: PetAdviceFaqsType[] = petAdviceFaqsData.petAdvicefaqs;

  return (
    <>
      <Heading as="h1" size="3xl" textAlign="center" m="20">
        Pet Advice
      </Heading>

      <Text as="h1" size="lg" textAlign="center" m="20">
        Consider them before adopting a pet
      </Text>

      <Box p="10">
        {petAdvicefaqs.map((petAdvicefaqs) => (
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text as="b">{petAdvicefaqs.question}</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{petAdvicefaqs.details}</AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </Box>
    </>
  );
}
