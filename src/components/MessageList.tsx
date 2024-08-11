import { Box, Stack, Text } from "@chakra-ui/react";
import Message from "./Message";


export default function MessageList() {
    return (
        <Box p={4} bg="gray.50">
            <Text fontWeight="bold" mb={2}>
                Mensagens enviadas
            </Text>
            <Stack spacing={4}>
                <Message
                    message="Oi 😊 esta é a sua mensagem enviada anteriormente."
                    date="23/02/2024 - 12h30"
                />
                <Message
                    message="Oi 😊 este é um outro exemplo de mensagem enviada"
                    date="23/02/2024 - 12h30"
                />
            </Stack>
        </Box>
    )
}