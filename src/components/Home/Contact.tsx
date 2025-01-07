import React from "react";
import { Box, Heading, Text, Input, Textarea, Button, Stack, FormControl, FormLabel, useToast } from "@chakra-ui/react";

export const ContactSection: React.FC = () => {
    const toast = useToast();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        toast({
            title: "Message Sent",
            description: "Thank you for reaching out! We will get back to you shortly.",
            status: "success",
            duration: 5000,
            isClosable: true,
        });
    };

    return (
        <Box bg="#010156" py={10}>
            <Box maxW="container.md" mx="auto" px={4}>
                <Box textAlign="center" mb={8}>
                    <Heading size="lg" mb={6} color="white">
                        Contact Us
                    </Heading>
                    <Text color="gray.300" fontSize="lg">
                        We would love to hear from you! Please fill out the form below and we’ll get back to you as soon as possible.
                    </Text>
                </Box>
                <form onSubmit={handleSubmit}>
                    <Stack spacing={6}>
                        <FormControl id="name" isRequired>
                            <FormLabel color="white">Name</FormLabel>
                            <Input
                                type="text"
                                placeholder="Enter your name"
                                bg="white"
                                color="gray.700"
                                _placeholder={{ color: "gray.400" }}
                                focusBorderColor="#e65d0f"
                            />
                        </FormControl>

                        <FormControl id="email" isRequired>
                            <FormLabel color="white">Email</FormLabel>
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                bg="white"
                                color="gray.700"
                                _placeholder={{ color: "gray.400" }}
                                focusBorderColor="#e65d0f"
                            />
                        </FormControl>

                        <FormControl id="phone" isRequired>
                            <FormLabel color="white">Phone Number</FormLabel>
                            <Input
                                type="tel"
                                placeholder="Enter your phone number"
                                bg="white"
                                color="gray.700"
                                _placeholder={{ color: "gray.400" }}
                                focusBorderColor="#e65d0f"
                            />
                        </FormControl>

                        <FormControl id="message" isRequired>
                            <FormLabel color="white">Message</FormLabel>
                            <Textarea
                                placeholder="Enter your message"
                                rows={5}
                                bg="white"
                                color="gray.700"
                                _placeholder={{ color: "gray.400" }}
                                focusBorderColor="#e65d0f"
                            />
                        </FormControl>

                        <Button
                            colorScheme="orange"
                            size="lg"
                            width="full"
                            mt={4}
                            type="submit"
                            bg="#e65d0f"
                            color="white"
                            _hover={{
                                transform: "scale(1.05)",
                                boxShadow: "lg",
                                bg: "#e65d0f",
                            }}
                            transition="all 0.2s ease-in-out"
                        >
                            Send
                        </Button>
                    </Stack>
                </form>
            </Box>
        </Box>
    );
};
