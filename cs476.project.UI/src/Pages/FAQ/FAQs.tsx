import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from '@chakra-ui/react';

import { useState, useEffect } from 'react';

import faqsData from '../../assets/Faqs.json';

type FAQs = {
  question: string;
  details: string;
};

export default function FAQs() {
  const [faqs, setFaqs] = useState<FAQs[]>([]);
  const [petAdvicefaqs, setPetAdvice] = useState<FAQs[]>([]);

  useEffect(() => {
    return setFaqs(faqsData.faqs);
  }, []);

  useEffect(() => {
    return setPetAdvice(faqsData.petAdvicefaqs);
  });

  return (
    <>
      <Heading
        as="h1"
        size="3xl"
        textAlign="center"
        m={{ base: '10', lg: '20' }}
      >
        Know Your Pets
      </Heading>

      <Box p={{ base: '4', lg: '10' }}>
        {faqs.map((faq) => (
          <Accordion allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <Text as="b">{faq.question}</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>{faq.details}</AccordionPanel>
            </AccordionItem>
          </Accordion>
        ))}
      </Box>

      <Heading
        as="h1"
        size="3xl"
        textAlign="center"
        m={{ base: '10', lg: '20' }}
      >
        Pet Advice
      </Heading>

      <Heading
        as="h2"
        size="lg"
        textAlign="center"
        m={{ base: '10', lg: '20' }}
      >
        Consider them before adopting a pet
      </Heading>

      <Box p={{ base: '4', lg: '10' }}>
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
