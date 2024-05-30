import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import FindAPet from "./Pages/FindAPet";
import PetAdvice from "./Pages/PetAdvice";
import MyAdoptions from "./Pages/MyAdoption";
import AboutUs from "./Pages/AboutUs";
import MyAccount from "./Pages/MyAccount";
import FAQs from "./Pages/FAQs";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

import {
  Routes,
  Route,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

function App() {

  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/FindAPet" element={<FindAPet />}></Route>
          <Route path="/PetAdvice" element={<PetAdvice />}></Route>
          <Route path="/MyAdoptions" element={<MyAdoptions />}></Route>
          <Route path="/AboutUs" element={<AboutUs />}></Route>
          <Route path="/FAQs" element={<FAQs />}></Route>
          <Route path="/MyAccount" element={<MyAccount />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>

        </Routes>
      </div>
      <Flex direction="column" minHeight="100vh">
        <Box flex="1">
        </Box>
        <Footer />
      </Flex>
    </>
  )
}

export default App
