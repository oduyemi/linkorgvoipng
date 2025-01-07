import React from "react";
import { Box, Button, Container, HStack, IconButton, Text } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

export const Footer: React.FC = () => {
  return (
    <Box bg="lightgray" className="footer_section" color="white">
      <Container py={4} maxW="container.lg">
        <HStack spacing={4} justify="center" mb={4}>
          <Button
            as="a"
            href="#!"
            bg="#3b5998"
            _hover={{ bg: "#3b5998" }}
            borderRadius="50%"
            p={4}
            colorScheme="facebook"
          >
            <FaFacebookF />
          </Button>

          <Button
            as="a"
            href="#!"
            bg="#55acee"
            _hover={{ bg: "#55acee" }}
            borderRadius="50%"
            p={4}
            colorScheme="twitter"
          >
            <FaTwitter />
          </Button>

          <Button
            as="a"
            href="#!"
            bg="#ac2bac"
            _hover={{ bg: "#ac2bac" }}
            borderRadius="50%"
            p={4}
            colorScheme="pink"
          >
            <FaInstagram />
          </Button>

          <Button
            as="a"
            href="#!"
            bg="#0082ca"
            _hover={{ bg: "#0082ca" }}
            borderRadius="50%"
            p={4}
            colorScheme="linkedin"
          >
            <FaLinkedinIn />
          </Button>

        </HStack>
      </Container>

      <Box textAlign="center" p={3} bg="rgba(0, 0, 0, 0.2)">
        <Text>
          © 2020 Copyright:
          <a href="https://linkorgnet.com/" style={{ color: "white" }}>
            LinkOrg Networks LTD
          </a>
        </Text>
      </Box>
    </Box>
  );
};

