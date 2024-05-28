import React from 'react'
import { Login } from './components/Login'
import { ChakraProvider, Container, Box } from "@chakra-ui/react"

function App() {

  return (
    <>
      <ChakraProvider>
       <Login/>
      </ChakraProvider>
        
    </>
  )
}

export default App
