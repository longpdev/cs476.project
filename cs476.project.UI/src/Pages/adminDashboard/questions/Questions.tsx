import { useQuery } from 'react-query';
import { getAllQuestions } from '../../../apiServices';

import {
  Button,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

export const Questions = () => {
  const { data: questions } = useQuery('questions', getAllQuestions);

  console.log(questions);
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>First Name</Th>
          <Th>Last Name</Th>
          <Th>Phone Number</Th>
          <Th>Home Type</Th>
          <Th>Inspection Date</Th>
        </Tr>
      </Thead>
      <Tbody>
        {questions?.map((question: any) => (
          <Tr key={question._id}>
            <Td>{question.firstName}</Td>
            <Td>{question.lastName}</Td>
            <Td>{question.phoneNumber}</Td>
            <Td>{question.homeType}</Td>
            <Td>{question.inspectionDate}</Td>
            <Td>
              <Button>View</Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
