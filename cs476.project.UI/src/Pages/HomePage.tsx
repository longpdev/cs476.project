import EnquiryForm from "../components/enquiryForm";
import SearchBar from "../components/SeachBar";
import { Box } from "@chakra-ui/react";

export default function Header() {
  return (
    <>
      <Box alignSelf="flex-start"><SearchBar /></Box>
      <EnquiryForm />

    </>
  );
}
