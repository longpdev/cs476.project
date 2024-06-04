import { Center } from '@chakra-ui/react';




import Enquiry from '../components/Enquiry';

export default function Header ()
{
    return (
      <>
           This is a homepage
           <Center bg='grey'  padding={50} fontSize="30px" color='white'>Please submit your enquiry here.</Center>
         <Enquiry />
      </>
    );
}