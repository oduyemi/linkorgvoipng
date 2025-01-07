import React from "react";
import { Box, Heading, Text, Link, Image, Button, VStack, HStack } from "@chakra-ui/react";

export const AboutSection: React.FC = () => {
    return (
        <Box
            bg="#010156"
            py={{ base: "6", md: "12" }}
            px={{ base: "4", md: "8" }}
            borderRadius="lg"
            boxShadow="lg"
            position="relative"
            overflow="hidden"
        >
            <Box
                position="absolute"
                top="0"
                left="0"
                right="0"
                bottom="0"
                bg="rgba(0, 0, 0, 0.1)"
                zIndex="-1"
                borderRadius="lg"
            />

            <VStack spacing={{ base: "6", md: "8" }} align="center">
                <Heading
                    as="h2"
                    color="white"
                    fontSize={{ base: "2xl", md: "4xl" }}
                    textAlign="center"
                    fontWeight="bold"
                    letterSpacing="wider"
                    textTransform="uppercase"
                >
                    About LinkOrg Networks
                </Heading>
                <Text
                    color="whiteAlpha.900"
                    fontSize={{ base: "md", md: "lg" }}
                    maxW="3xl"
                    textAlign="center"
                    lineHeight="1.8"
                    px={{ base: "4", md: "0" }}
                    opacity="0.85"
                >
                    LinkOrg Networks specializes in reliable satellite internet and VoIP solutions, offering
                    VSAT internet, high-speed connectivity, video broadcasting, and IT & telecommunications support.
                    Leveraging advanced technologies like LEO and GEO satellites, we ensure seamless services for
                    remote and mobile operations.
                </Text>
                
                <HStack spacing={6} direction={{ base: "column", sm: "row" }} justify="center" width="full">
                    <Image
                        src="images/abtsectn.png"
                        alt="About LinkOrg Networks"
                        borderRadius="lg"
                        boxShadow="xl"
                        maxW={{ base: "80%", md: "70%" }}
                        objectFit="cover"
                        transition="all 0.3s ease"
                        _hover={{ transform: "scale(1.05)" }}
                    />
                </HStack>
                
                <Link
                    href="https://linkorgnet.com.ng"
                    target="_blank"
                    _hover={{ textDecoration: "none" }}
                >
                    <Button
                        colorScheme="orange"
                        size="lg"
                        variant="solid"
                        boxShadow="md"
                        _hover={{ boxShadow: "lg", transform: "scale(1.05)" }}
                        transition="all 0.2s ease-in-out"
                    >
                        Visit Website
                    </Button>
                </Link>
            </VStack>
        </Box>
    );
};
