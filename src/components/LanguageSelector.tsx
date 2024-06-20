import { LANGUAGE_VERSIONS } from '@/app/constants';
import {
  Box,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { useColorMode } from '@chakra-ui/react';
import { IoMdArrowDropdown } from 'react-icons/io';

const languages = Object.entries(LANGUAGE_VERSIONS);

interface LanguageSelectorProps {
  language: string;
  onSelect: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  language,
  onSelect,
}) => {
  const { colorMode } = useColorMode();

  return (
    <Box display="flex" alignItems="center">
      <Menu isLazy>
        <MenuButton
          colorScheme="#000"
          bg={colorMode === 'light' ? '#fff' : '#000'}
          color={colorMode === 'light' ? '#000' : '#fff'}
          as={Button}
          _hover={{ color: 'gray.400' }}
        >
          {language}
        </MenuButton>
        <MenuList>
          {languages.map(([lang]) => (
            <MenuItem
              key={lang}
              color={lang === language ? 'orange.400' : ''}
              bg={lang === language ? 'gray.900' : ''}
              _hover={{
                color: 'white',
                bg: 'gray.900',
              }}
              onClick={() => {
                onSelect(lang);
              }}
            >
              {lang}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default LanguageSelector;
