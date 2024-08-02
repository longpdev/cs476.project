import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import permissionDeniedGif from '../assets/permission-denied.gif';

class UnauthorizedPage extends React.Component {
  render() {
    return (
      <VStack alignContent={'center'} spacing='20'>
        {this.renderHeader()}
        {this.renderMain()}
        {this.renderFooter()}
      </VStack>
    );
  }

  renderHeader(): React.ReactNode {
    return null;
  }

  renderMain(): React.ReactNode {
    return null;
  }

  renderFooter(): React.ReactNode {
    return null;
  }
}

export class NotAnAdmin extends UnauthorizedPage {
  renderHeader(): React.ReactNode {
    return (
      <Heading as="h1" size="2xl" color="black" pt={5}>
          Upcoming Feature
      </Heading>
    );
  }

  renderMain(): React.ReactNode {
    return (
      <Box h='100px'>
        <Image width='200px' height='200px' src={permissionDeniedGif} />
      </Box>
    );
  }

  renderFooter(): React.ReactNode {
    return (
      <Box h='40px'>
       <Text fontSize="lg" color="teal.700">
       This feature is incoming, only admin can onboard pet for now. Please login with your admin to continue 
      </Text>
      </Box>
    );
  }
}

export class NotAnUser extends UnauthorizedPage {
  renderHeader(): React.ReactNode {
    return (
      <Heading as="h1" size="2xl" color="black" pt={5}>
      Not a Customer
    </Heading>
    );
  }

  renderMain(): React.ReactNode {
    return (
      <Box h='100px' mb='200px'>
        <Image width='300px' height='300px' src={permissionDeniedGif} />
      </Box>
    );
  }

  renderFooter(): React.ReactNode {
    return (
      <Box h='40px'>
        <Text fontSize="lg" color="teal.700">
        This feature is not for admin. Please login with your customer account
        to view this page. 
        </Text>
      </Box>
    );
  }
}

export class NotAuthenticated extends UnauthorizedPage {
  renderHeader(): React.ReactNode {
    return (
      <Heading py='10' textAlign={'center'}>
        You have not been authenticated.
      </Heading>
    );
  }

  renderMain(): React.ReactNode {
    return (
      <Box h='100px' mb="200px">
        <Image width='300px' height='300px' src={permissionDeniedGif} />
      </Box>
    );
  }

  renderFooter(): React.ReactNode {
    return (
      <Box h='40px'>
        <Text fontSize='2xl' as='b'>
          Please login to continue.
        </Text>
      </Box>
    );
  }
}
