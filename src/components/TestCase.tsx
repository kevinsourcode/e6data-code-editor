import { Box, Text } from '@chakra-ui/react';
import { FaCheckSquare } from 'react-icons/fa';
import { useColorMode } from '@chakra-ui/react';

interface TestCaseProps {
  runCode: () => void;
  program: boolean;
}

const TestCase: React.FC<TestCaseProps> = ({ runCode, program }) => {
  const { colorMode } = useColorMode();

  return (
    <Box borderRadius={10} h="24vh">
      <Box
        w="100%"
        color="#000"
        borderTopRadius={5}
        p={2}
        display="flex"
        alignItems="center"
        gap={2}
        bg={colorMode === 'light' ? '#1e1e1e' : '#fff'}
      >
        <FaCheckSquare color={colorMode === 'light' ? '#fff' : '#000'} />
        <Text color={colorMode === 'light' ? '#fff' : '#000'}>Test Cases</Text>
      </Box>
      <Box
        p={4}
        h="105%"
        borderBottomRadius={5}
        bg={colorMode === 'light' ? '#fff' : '#1e1e1e'}
      >
        {program ? (
          <Box>
            <Text>Output: </Text>
            <Text color="#fff">Hello, Alex! </Text>
            <Text color="green.500" fontWeight="bold" mt={8}>
              Test case passed succesfully!
            </Text>
          </Box>
        ) : (
          <Text alignItems="center">
            Run The Program to determine whether it passes the test cases.
          </Text>
        )}
      </Box>
    </Box>
  );
};

export default TestCase;
