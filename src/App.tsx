
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header';
import InputMessage from './components/InputMessage';
import MessageList from './components/MessageList';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <InputMessage />
      <MessageList />
    </ChakraProvider>
  );
}

export default App;
