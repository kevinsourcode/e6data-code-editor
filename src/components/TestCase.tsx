import { Box, Text } from '@chakra-ui/react';

interface TestCaseProps {
  runCode: () => void;
  program: boolean;
}

const TestCase: React.FC<TestCaseProps> = ({ runCode, program }) => {
  return (
    <Box borderRadius={10} h="24vh">
      <Box
        w="100%"
        bg="#fff"
        color="#000"
        borderTopRadius={5}
        p={1}
        display="flex"
        alignItems="center"
      >
        <Text>Test Cases</Text>
      </Box>
      <Box bg="#1e1e1e" p={4} h="100%">
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
