
import { ChakraProvider, Stack } from '@chakra-ui/react'
import Header from './components/Header';
import InputMessage from './components/InputMessage';
import MessageList from './components/MessageList';

function App() {
  return (
    <ChakraProvider>
      <Stack h="100vh" w="100%" m={0} p={0}>
        <Stack>
          <Header />
          <InputMessage />
        </Stack>
        <Stack flex={1}>
          <MessageList />
        </Stack>
      </Stack>
    </ChakraProvider>
  );
}

export default App;
