import {
  Box,
  Button,
  Text,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { BeatLoader, MoonLoader } from 'react-spinners';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';
import { useColorMode } from '@chakra-ui/react';

interface ButtonsProps {
  submitCode: () => void;
  runCode: () => void;
  isLoading: boolean;
  isRunning: boolean;
}

const Buttons: React.FC<ButtonsProps> = ({
  submitCode,
  runCode,
  isLoading,
  isRunning,
}) => {
  const { colorMode } = useColorMode();
  const justifyContent = useBreakpointValue<'center' | 'end'>({
    base: 'center',
    md: 'end',
  });

  return (
    <Box
      display="flex"
      justifyContent={justifyContent}
      alignItems="center"
      mt={9}
      pr={3}
    >
      <Button
        mt={4}
        mr={2}
        bg="orange.500"
        _hover={{
          bg: colorMode === 'light' ? '#fff' : '#000',
        }}
        onClick={runCode}
        w={20}
      >
        {isRunning ? (
          <MoonLoader size={15} color="#000" />
        ) : (
          <Box display="flex" alignItems="center" gap={2}>
            <FaPlay size={18} color={colorMode === 'light' ? '#000' : '#fff'} />
            <Text color={colorMode === 'light' ? '#000' : '#fff'}>Run</Text>
          </Box>
        )}
      </Button>
      <Button
        mt={4}
        w={40}
        bg="green.400"
        _hover={{
          bg: colorMode === 'light' ? '#fff' : '#000',
        }}
        onClick={submitCode}
      >
        {isLoading ? (
          <BeatLoader size={10} color="#000" />
        ) : (
          <Box display="flex" alignItems="center" gap={2}>
            <AiOutlineCloudUpload
              size={25}
              color={colorMode === 'light' ? '#000' : '#fff'}
            />
            <Text color={colorMode === 'light' ? '#000' : '#fff'}>Submit</Text>
          </Box>
        )}
      </Button>
    </Box>
  );
};

export default Buttons;
