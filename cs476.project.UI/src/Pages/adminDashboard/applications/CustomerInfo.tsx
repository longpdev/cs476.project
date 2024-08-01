import { Box, Text, Heading } from '@chakra-ui/react';
import { ApplicationType } from './Applications';

const CustomerInfoRow = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  return (
    <Box>
      <Text as='b'>{title}</Text>
      <Text>{value}</Text>
    </Box>
  );
};

interface CustomerInfoProps {
  application: ApplicationType;
}

const CustomerInfo = ({ application }: CustomerInfoProps) => {
  return (
    <Box>
      <Heading  py={8} textAlign={'center'} as={'h2'} size='lg'>
        Customer Information
      </Heading>
      <CustomerInfoRow
        title='Full Name:'
        value={`${application.firstName + ' ' + application.lastName}`}
      />
      <CustomerInfoRow title='Email: ' value={`${application.email}`} />
      <CustomerInfoRow title='Address: ' value={`${application.address}`} />

      <CustomerInfoRow
        title='Phone Number: '
        value={`${application.phoneNumber}`}
      />
      <CustomerInfoRow
        title='Are you a pet owner? '
        value={`${application.petOwner}`}
      />
      <CustomerInfoRow
        title='Do you have any pets at home? '
        value={`${application.petsAtHome}`}
      />
      <CustomerInfoRow
        title='What type of home do you live in? '
        value={`${application.homeType}`}
      />
      <CustomerInfoRow
        title='Who will be responsible for the pet’s care? '
        value={`${application.petCareResponsible}`}
      />
      <CustomerInfoRow
        title='Are you prepared for the financial responsibilities of pet ownership? '
        value={`${application.financialPreparedness}`}
      />
      <CustomerInfoRow
        title='Why do you want to adopt a pet? '
        value={`${application.adoptionReason}`}
      />
    </Box>
  );
};

export default CustomerInfo;
