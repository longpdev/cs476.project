import EnquiryForm from "../components/enquiryForm";
import { HomePageCarousel } from "../components/homePageCarousel";
import SearchBar from "../components/SeachBar";
import { Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Box alignSelf="flex-start">
        <SearchBar />
      </Box>
      <Box alignItems={"left"}>
        <HomePageCarousel />
      </Box>

      <EnquiryForm />
    </>
  );
}
