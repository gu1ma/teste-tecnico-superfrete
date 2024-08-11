import { Box, Stack, Text } from "@chakra-ui/react";
import Message from "./Message";
import { useEffect, useState } from "react";
import { collection, DocumentData, onSnapshot, QuerySnapshot } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { DateTime } from 'luxon';

export type Date = {
    nanoseconds: number;
    seconds: number;
}

export type MessageType = {
    content: string;
    date: Date;
}

export default function MessageList() {
    const [messages, setMessages] = useState<MessageType[]>([]);

    const formatDate = (dateInMillis: number) => {
        const date = DateTime.fromMillis(Math.trunc(Number(dateInMillis)));
        return date.toFormat("dd/MM/yyyy - HH:mm");
    }

    useEffect(() => {
        const colRef = collection(db, "messages");

        const unsubscribe = onSnapshot(colRef, (snapshot: QuerySnapshot<DocumentData>) => {
            const updatedData: MessageType[] = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data() as MessageType
            }));
            const sortedData = updatedData.sort((a, b) => b.date.seconds - a.date.seconds);
            setMessages(sortedData);
        });

        return () => unsubscribe();
    }, []);

    return (
        <Box p={4} bg="gray.50" overflow="scroll">
            <Text fontWeight="bold" mb={2}>
                Mensagens enviadas
            </Text>
            <Stack spacing={2} overflow="scroll" h="55vh">
                {
                    messages.map((message) => (
                        <Message
                            key={message.date.seconds}
                            message={message.content}
                            date={formatDate(message.date.seconds * 1000)}
                        />
                    ))
                }
            </Stack>
        </Box>
    )
}