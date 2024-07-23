import EnquiryForm from '../../components/enquiryForm';
import { HomePageCarousel } from '../../components/homePageCarousel';
import { Box } from '@chakra-ui/react';

export default function HomePage() {
  return (
    <>
      <Box>
        <HomePageCarousel />
        <EnquiryForm />
      </Box>
    </>
  );
}
