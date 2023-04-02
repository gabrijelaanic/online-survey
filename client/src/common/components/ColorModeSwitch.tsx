import { HStack, Switch, useColorMode, Text } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack justifyContent="end" paddingTop={6} paddingRight={6} paddingBottom={2}>
      <Switch colorScheme="green" isChecked={colorMode === 'dark'} onChange={toggleColorMode} />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
