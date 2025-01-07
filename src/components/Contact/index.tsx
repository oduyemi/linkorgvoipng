import React from "react";
import { Box, Heading, Input, Textarea, Button, VStack, FormControl, FormLabel, Text } from "@chakra-ui/react";

export const ContactUs: React.FC = () => {
    return (
        <Box className="contact_section layout_padding" py={{ base: 10, md: 16 }} bg="white">
            <Box className="container" maxW="container.md" px={4}>
                <Box className="contact_main" textAlign="center">
                    <Heading as="h2" size="2xl" mb={6} className="blutext w-100">
                        Request a Call Back
                    </Heading>
                    <Text fontSize="lg" mb={8} color="gray.700">
                        We’d love to hear from you! Fill out the form below, and our team will reach out to you shortly.
                    </Text>
                    <form action="">
                        <VStack spacing={6} align="stretch">
                            <FormControl id="name" isRequired>
                                <FormLabel fontSize="lg" fontWeight="bold" color="gray.700">
                                    Your Name
                                </FormLabel>
                                <Input
                                    type="text"
                                    placeholder="Enter your name"
                                    variant="outline"
                                    size="lg"
                                    focusBorderColor="#e65d0f"
                                    borderRadius="md"
                                    boxShadow="sm"
                                    _hover={{ boxShadow: "md", borderColor: "#e65d0f" }}
                                    _focus={{ boxShadow: "0 0 0 3px rgba(230, 93, 15, 0.6)" }}
                                    aria-label="Enter your name"
                                />
                            </FormControl>

                            <FormControl id="email" isRequired>
                                <FormLabel fontSize="lg" fontWeight="bold" color="gray.700">
                                    Email Address
                                </FormLabel>
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    variant="outline"
                                    size="lg"
                                    focusBorderColor="#e65d0f"
                                    borderRadius="md"
                                    boxShadow="sm"
                                    _hover={{ boxShadow: "md", borderColor: "#e65d0f" }}
                                    _focus={{ boxShadow: "0 0 0 3px rgba(230, 93, 15, 0.6)" }}
                                    aria-label="Enter your email address"
                                />
                            </FormControl>

                            <FormControl id="phone" isRequired>
                                <FormLabel fontSize="lg" fontWeight="bold" color="gray.700">
                                    Phone Number
                                </FormLabel>
                                <Input
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    variant="outline"
                                    size="lg"
                                    focusBorderColor="#e65d0f"
                                    borderRadius="md"
                                    boxShadow="sm"
                                    _hover={{ boxShadow: "md", borderColor: "#e65d0f" }}
                                    _focus={{ boxShadow: "0 0 0 3px rgba(230, 93, 15, 0.6)" }}
                                    aria-label="Enter your phone number"
                                />
                            </FormControl>

                            <FormControl id="message" isRequired>
                                <FormLabel fontSize="lg" fontWeight="bold" color="gray.700">
                                    Message
                                </FormLabel>
                                <Textarea
                                    placeholder="Enter your message"
                                    rows={6}
                                    variant="outline"
                                    focusBorderColor="#e65d0f"
                                    borderRadius="md"
                                    boxShadow="sm"
                                    _hover={{ boxShadow: "md", borderColor: "#e65d0f" }}
                                    _focus={{ boxShadow: "0 0 0 3px rgba(230, 93, 15, 0.6)" }}
                                    aria-label="Enter your message"
                                />
                            </FormControl>

                            <Button
                                colorScheme="orange"
                                size="lg"
                                width="full"
                                mt={6}
                                borderRadius="md"
                                boxShadow="md"
                                transition="all 0.3s ease"
                                _hover={{ bg: "#e65d0f", transform: "scale(1.05)", boxShadow: "lg" }}
                                _active={{ transform: "scale(1)" }}
                            >
                                SEND MESSAGE
                            </Button>
                        </VStack>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};
