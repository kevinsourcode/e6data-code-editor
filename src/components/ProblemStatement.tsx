import React from 'react';
import { Box, Text, Code, ListItem, UnorderedList } from '@chakra-ui/react';

const ProblemStatement = () => {
  return (
    <Box
      minW="50%"
      display="flex"
      flexDirection="column"
      gap={8}
      bg="#1e1e1e"
      borderRadius={5}
    >
      <Box w="100%" bg="#fff" color="#000" borderTopRadius={5} p={1}>
        <Text>Code</Text>
      </Box>
      <Box display="flex" flexDirection="column" gap={8} borderRadius={5} p={5}>
        <Text fontSize={32} fontWeight="bold" color="orange.400">
          Two Sum
        </Text>
        <Text w="70%">
          Given an array of integers nums and an integer target, return indices
          of the two numbers such that they add up to target. You may assume
          that each input would have exactly one solution, and you may not use
          the same element twice. You can return the answer in any order.
        </Text>
        <Text color="orange.400" fontWeight="bold">
          Example 1:{' '}
        </Text>
        <Code w="60%" rounded={'true'}>
          Input: nums = [2,7,11,15], target = 9 Output: [0,1]
        </Code>
        <Text color="orange.400" fontWeight="bold">
          Example 2:{' '}
        </Text>
        <Code w="60%" rounded={'true'}>
          Input: nums = [3,2,4], target = 6 Output: [1,2]
        </Code>
        <Text color="orange.400" fontWeight="bold">
          Example 3:{' '}
        </Text>
        <Code w="60%" rounded={'true'}>
          Input: nums = [3,3], target = 6 Output: [0,1]
        </Code>

        <Text mt={5}>Constraints:</Text>
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
