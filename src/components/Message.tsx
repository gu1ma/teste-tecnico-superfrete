import { Text, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type MessageProps = {
    message: string;
    date: string;
    shouldShowHighlight?: boolean;
}

export default function Message({ message, date, shouldShowHighlight = false }: MessageProps) {
    const [highlight, setHighlight] = useState(shouldShowHighlight);
    useEffect(() => {
        const timer = setTimeout(() => {
          setHighlight(false);
        }, 500);
    
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <Box 
            p={4} 
            borderRadius="md" 
            bg={highlight ? "yellow.200" : "white"}
            boxShadow={highlight ? "md" : "sm"}
            animation={highlight ? `fadeOut 0.5s forwards` : ""}
            >
            <Text mb={2} fontSize="1rem" lineHeight="1.5rem" fontWeight="400">{message}</Text>
            <Text fontSize="xs" color="gray.400">{date}</Text>
        </Box>
    )
}