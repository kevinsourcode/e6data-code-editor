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

const languages = Object.entries(LANGUAGE_VERSIONS);

interface LanguageSelectorProps {
  language: string;
  onSelect: (language: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  language,
  onSelect,
}) => {
  return (
    <Box>
      <Menu isLazy>
        <MenuButton as={Button}>{language}</MenuButton>
        <MenuList bg="110c1b">
          {languages.map(([lang]) => (
            <MenuItem
              key={lang}
              color={lang === language ? 'orange.400' : ''}
              bg={lang === language ? 'gray.900' : ''}
              _hover={{
                color: 'orange.400',
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
