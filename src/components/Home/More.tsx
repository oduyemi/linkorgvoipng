import React from "react";
import { Box, Link, Heading, Text, Image, SimpleGrid, Container } from "@chakra-ui/react";

export const More: React.FC = () => {
    return (
        <Box bg="#F1F4F9" py={{ base: "6", md: "12" }}>
            <Container maxW="7xl">
                <Heading
                    as="h2"
                    color="gray.800"
                    fontSize={{ base: "2xl", md: "4xl" }}
                    textAlign="center"
                    mb={{ base: "4", md: "8" }}
                    className="blutext"
                >
                    Our Global Presence
                </Heading>
                <Text
                    color="gray.600"
                    fontSize={{ base: "md", md: "lg" }}
                    textAlign="center"
                    mb={{ base: "6", md: "12" }}
                    maxW="3xl"
                    mx="auto"
                >
                    LinkOrg Networks operates across multiple locations, ensuring seamless connectivity and communication solutions globally. Learn more about our branches and specialized services tailored for different regions.
                </Text>
                <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={{ base: "6", md: "8" }} mb="12">
                    <Box
                        bg="white"
                        borderRadius="lg"
                        boxShadow="lg"
                        overflow="hidden"
                        _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
                        transition="all 0.3s ease"
                    >
                        <Box>
                            <Image src="images/com.png" alt="LinkOrg UK" objectFit="cover" width="100%" height="auto" />
                        </Box>
                        <Box p="6">
                            <Heading as="h3" fontSize="xl" color="#5A6A9A" fontWeight="semibold">
                                LinkOrg UK
                            </Heading>
                            <Text color="gray.600" mt="4">
                                LinkOrg UK serves as the hub for our operations and business development. With a strong presence in the UK, we focus on providing high-quality satellite communication, internet services, and VoIP solutions to meet the needs of businesses and individuals.
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        bg="white"
                        borderRadius="lg"
                        boxShadow="lg"
                        overflow="hidden"
                        _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
                        transition="all 0.3s ease"
                    >
                        <Box>
                            <Image src="images/ng.png" alt="LinkOrg Nigeria" objectFit="cover" width="100%" height="auto" />
                        </Box>
                        <Box p="6">
                            <Heading as="h3" fontSize="xl" color="#5A6A9A" fontWeight="semibold">
                                LinkOrg Nigeria
                            </Heading>
                            <Text color="gray.600" mt="4">
                                LinkOrg Nigeria is committed to providing reliable internet and VoIP services across the country. Our solutions cater to remote operations, ensuring businesses have the connectivity they need to thrive, no matter the location.
                            </Text>
                        </Box>
                    </Box>
                    <Box
                        bg="white"
                        borderRadius="lg"
                        boxShadow="lg"
                        overflow="hidden"
                        _hover={{ boxShadow: "xl", transform: "scale(1.05)" }}
                        transition="all 0.3s ease"
                    >
                        <Box>
                            <Image src="images/linkorgvoip.png" alt="LinkOrg VoIP UK" objectFit="cover" width="100%" height="auto" />
                        </Box>
                        <Box p="6">
                            <Heading as="h3" fontSize="xl" color="#5A6A9A" fontWeight="semibold">
                                LinkOrg VoIP UK
                            </Heading>
                            <Text color="gray.600" mt="4">
                                LinkOrg VoIP UK specializes in delivering advanced VoIP services, including virtual phone numbers and top-tier VoIP hardware. We empower businesses with the tools they need for efficient and cost-effective communication.
                            </Text>
                        </Box>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    );
};
