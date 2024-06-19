import { Box, Text } from '@chakra-ui/react';

const TestCase = () => {
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
        <Text>Output: </Text>
        <Text color="#fff">Hello, Alex! </Text>
        <Text color="green.500" fontWeight="bold" mt={8}>
          Test case passed succesfully!{' '}
        </Text>
      </Box>
    </Box>
  );
};

export default TestCase;
