import { Box, Button } from '@chakra-ui/react';
import React from 'react';
import { BeatLoader, MoonLoader } from 'react-spinners';

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
  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      mt={8}
      pr={3}
    >
      <Button
        mt={4}
        mr={2}
        bg="orange.500"
        _hover={{ bg: '#fff', color: '#fff' }}
        onClick={runCode}
      >
        {isRunning ? <MoonLoader size={15} color="#000" /> : 'Run'}
      </Button>
      <Button mt={4} bg="green.400" onClick={submitCode}>
        {isLoading ? <BeatLoader size={10} color="#000" /> : 'Submit'}
      </Button>
    </Box>
  );
};

export default Buttons;
