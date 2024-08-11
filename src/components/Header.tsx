import { Flex, Image } from "@chakra-ui/react";

export default function Header() {
    return (
        <Flex justify="center" align="center" p={4} bg="white">
            <Image src="logo.svg" alt="SuperFrete" h={8} />
        </Flex>
    )
}