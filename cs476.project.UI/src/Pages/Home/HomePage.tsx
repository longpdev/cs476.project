import EnquiryForm from '../../components/enquiryForm';
import { HomePageCarousel } from '../../components/homePageCarousel';
import { Box } from '@chakra-ui/react';

export default function Header() {
  return (
    <>
      <Box>
        <HomePageCarousel />
        <EnquiryForm />
      </Box>
    </>
  );
}
