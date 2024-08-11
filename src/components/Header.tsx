import { Flex, Image } from "@chakra-ui/react";

export default function Header() {
    return (
        <Flex justify="center" align="center" p={4} bg="white">
            <Image src="logo.svg" alt="SuperFrete" w="120px" h="50px" />
        </Flex>
    )
}