import { Box, Button, Input, Text } from "@chakra-ui/react";


export default function InputMessage() {
    return (
        <Box p={4} bg="gray.50">
            <Text fontWeight="600" fontSize="18px" mb={2}>Digite um texto abaixo</Text>
            <Input 
                placeholder="Insira sua mensagem*"
                mb={4} 
                h={16} 
                borderRadius={12}
                color="gray.300"
            />
            <Button
                colorScheme="green"
                w="100%">
                Enviar
            </Button>
        </Box>
    )
}