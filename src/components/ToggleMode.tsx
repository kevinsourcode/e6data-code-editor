import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { BsSun, BsMoon } from 'react-icons/bs';
import { FC } from 'react';

const Toggle: FC = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Mode Change"
      colorScheme="black"
      size="md"
      icon={useColorModeValue(
        <BsMoon color="#fff" size={25} />,
        <BsSun color="#fff" size={25} />,
      )}
      onClick={toggleColorMode}
    />
  );
};

export default Toggle;
