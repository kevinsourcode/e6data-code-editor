import React from 'react';
import {
  Box,
  Text,
  Code,
  ListItem,
  UnorderedList,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdOutlineDescription } from 'react-icons/md';

const ProblemStatement = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      minW="50%"
      display="flex"
      bg={colorMode === 'light' ? '#fffffe' : '#1e1e1e'}
      flexDirection="column"
      gap={8}
      borderRadius={5}
      h="80vh"
      boxShadow="20px"
    >
      <Box
        w="100%"
        className="codeBackground"
        color="#000"
        borderTopRadius={5}
        p={2}
        display="flex"
        alignItems="center"
        gap={2}
        bg={colorMode === 'light' ? '#1e1e1e' : '#fff'}
      >
        <MdOutlineDescription color={colorMode === 'light' ? '#fff' : '#000'} />
        <Text color={colorMode === 'light' ? '#fff' : '#000'}>
          Problem Description
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        gap={8}
        borderRadius={5}
        p={5}
        overflow="scroll"
      >
        <Text fontSize={32} fontWeight="bold">
          Find The Largest Two Sum
        </Text>
        <Text w="80%" pl={2}>
          Given an array of integers nums and an integer target, return indices
          of the two numbers such that they add up to target
        </Text>
        <Text w="80%" pl={2}>
          You may assume that each input would have exactly one solution, and
          you may not use the same element twice. You can return the answer in
          any order.
        </Text>
        <Text fontWeight="bold">Example 1:</Text>
        <Code w="60%" rounded={'true'}>
          Input: nums = [2,7,11,15], target = 9 Output: [0,1]
        </Code>
        <Text fontWeight="bold">Example 2: </Text>
        <Code w="60%" rounded={'true'}>
          Input: nums = [3,2,4], target = 6 Output: [1,2]
        </Code>
        <Text fontWeight="bold">Example 3: </Text>
        <Code w="60%" rounded={'true'}>
          Input: nums = [3,3], target = 6 Output: [0,1]
        </Code>

        <Text fontWeight="bold" mt={5}>
          Constraints:
        </Text>
        <UnorderedList spacing={3}>
          <ListItem>
            2 &gt;= nums.length &lt;= 104 -109 &gt;= target &lt;= 109 Only one
            valid answer exists.
          </ListItem>
          <ListItem>-109 &gt;= nums[i] &lt;= 109</ListItem>
          <ListItem>
            -109 &gt;= target &lt;= 109 Only one valid answer exists.
          </ListItem>
        </UnorderedList>
      </Box>
    </Box>
  );
};

export default ProblemStatement;
