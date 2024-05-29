import Header from "./components/Header"
import Footer from "./components/Footer"
import HomePage from "./Pages/HomePage"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

function App() {

  return (
    <>
      <Header/>
        <div>
          <Routes>
            <Route path="/" element={<HomePage/>}></Route>
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
