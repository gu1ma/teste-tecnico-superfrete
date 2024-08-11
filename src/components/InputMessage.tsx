import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useState, ChangeEvent } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { MessageType } from "./MessageList";

export default function InputMessage() {
    const [message, setMessage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const handleSendMessage = async () => {
        try {
            setLoading(true);
            const newMessage: MessageType = {
                content: message,
                date: {
                    nanoseconds: Date.now() % 1000000000,
                    seconds: Math.floor(Date.now() / 1000),
                },
            };
          
            await addDoc(collection(db, "messages"), newMessage);
        } catch (e) {
            console.log("message", e);
        } finally {
            setLoading(false);
            setMessage('');
        }
    }
    return (
        <Box p={4} bg="gray.50">
            <Text fontWeight="600" fontSize="18px" mb={2}>Digite um texto abaixo</Text>
            <Input 
                placeholder="Insira sua mensagem*"
                mb={4} 
                h={16} 
                borderRadius={12}
                color="gray.300"
                value={message}
                onChange={(event: ChangeEvent<HTMLInputElement>) => setMessage(event.target.value)}
            />
            <Button
                isDisabled={message.length === 0}
                colorScheme="green"
                onClick={handleSendMessage}
                isLoading={loading}
                w="100%">
                Enviar
            </Button>
        </Box>
    )
}