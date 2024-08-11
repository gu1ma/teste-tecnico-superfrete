
import { ChakraProvider } from '@chakra-ui/react'
import Header from './components/Header';
import InputMessage from './components/InputMessage';
import MessageList from './components/MessageList';
import InputMessageContextProvider from './contexts/InputMessageContext';

function App() {
  return (
    <ChakraProvider>
      <InputMessageContextProvider>
        <Header />
        <InputMessage />
        <MessageList />
      </InputMessageContextProvider>
    </ChakraProvider>
  );
}

export default App;
