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

  useEffect(() => {
    return setFaqs(faqsData.faqs);
  }, []);

  return (
    <>
      <Heading as="h1" size="3xl" textAlign="center" m="20">
        Know Your Pets
      </Heading>

      <Box p="10">
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
    </>
  );
}
