import { useQuery } from 'react-query';
import { getAllQuestions } from '../../../apiServices';

import { Text } from '@chakra-ui/react';

export const Questions = () => {
  const { data } = useQuery('questions', getAllQuestions);
  console.log(data);
  return <Text>Test</Text>;
};
