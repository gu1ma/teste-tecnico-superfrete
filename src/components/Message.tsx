import { Text, Box } from "@chakra-ui/react";

type MessageProps = {
    message: string;
    date: string;
}

export default function Message({ message, date }: MessageProps) {
    return (
        <Box bg="white" p={4} borderRadius="md" boxShadow="sm">
            <Text mb={2} fontSize="1rem" lineHeight="1.5rem" fontWeight="400">{message}</Text>
            <Text fontSize="xs" color="gray.400">{date}</Text>
        </Box>
    )
}