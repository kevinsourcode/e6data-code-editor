import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { FaCheckSquare } from 'react-icons/fa';

interface TestCaseProps {
  runCode: () => void;
  program: boolean;
}

const TestCase: React.FC<TestCaseProps> = ({ runCode, program }) => {
  const bg = useColorModeValue('#Fffffe', '#1e1e1e');
  const color = useColorModeValue('#000', 'orange.500');

  return (
    <Box borderRadius={10} h="24vh">
      <Box
        w="100%"
        bg="#fff"
        color="#000"
        borderTopRadius={5}
        p={2}
        display="flex"
        alignItems="center"
        gap={2}
      >
        <FaCheckSquare />
        <Text>Test Cases</Text>
      </Box>
      <Box bg={bg} p={4} h="105%" borderBottomRadius={5}>
        {program ? (
          <Box>
            <Text>Output: </Text>
            <Text color="#fff">Hello, Alex! </Text>
            <Text color="green.500" fontWeight="bold" mt={8}>
              Test case passed succesfully!
            </Text>
          </Box>
        ) : (
          <Text alignItems="center" color={color}>
            Run The Program to determine whether it passes the test cases.
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default TestCase;
