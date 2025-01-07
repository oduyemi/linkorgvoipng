import React from "react";
import { Box, Button, Container, HStack, IconButton, Text } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <Box bg="#010156" color="white">
      <Container py={6} maxW="container.lg">
        <HStack spacing={6} justify="center" mb={6}>
          <Button
            as="a"
            href="#!"
            bg="#3b5998"
            _hover={{ bg: "#2d4373" }}
            borderRadius="50%"
            p={4}
            colorScheme="facebook"
            boxShadow="lg"
          >
            <FaFacebookF />
          </Button>

          <Button
            as="a"
            href="#!"
            bg="#55acee"
            _hover={{ bg: "#2791d2" }}
            borderRadius="50%"
            p={4}
            colorScheme="twitter"
            boxShadow="lg"
          >
            <FaTwitter />
          </Button>

          <Button
            as="a"
            href="#!"
            bg="#ac2bac"
            _hover={{ bg: "#9e2381" }}
            borderRadius="50%"
            p={4}
            colorScheme="pink"
            boxShadow="lg"
          >
            <FaInstagram />
          </Button>

          <Button
            as="a"
            href="#!"
            bg="#0082ca"
            _hover={{ bg: "#006a98" }}
            borderRadius="50%"
            p={4}
            colorScheme="linkedin"
            boxShadow="lg"
          >
            <FaLinkedinIn />
          </Button>
        </HStack>
      </Container>

      <Box textAlign="center" p={4} bg="rgba(0, 0, 0, 0.3)">
        <Text color="white" fontSize="sm">
          © {new Date().getFullYear()} Copyright:
          <a href="https://linkorgnet.com/" style={{ color: "#e65d0f" }}>
            {" "}LinkOrg Networks LTD
          </a>
        </Text>
      </Box>
    </Box>
  );
};
