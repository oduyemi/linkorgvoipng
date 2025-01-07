import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  VStack,
  Link,
  HStack,
  InputGroup,
  InputRightElement,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const LoginForm: React.FC = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      height="100vh"
      bg="white"
      px={4}
    >
      <Box
        width="100%"
        maxW="400px"
        p={8}
        borderWidth={1}
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
        borderColor="gray.300"
        transition="transform 0.3s ease-in-out"
        _hover={{
          transform: 'scale(1.05)',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Heading as="h2" mb={6} textAlign="center" className="blutext">
            Login to Your Account
          </Heading>

          <form>
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-label="Email address"
                  _focus={{
                    borderColor: 'teal.500',
                    boxShadow: '0 0 0 1px teal.500',
                  }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup>
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    aria-label="Password"
                    _focus={{
                      borderColor: 'teal.500',
                      boxShadow: '0 0 0 1px teal.500',
                    }}
                  />
                  <InputRightElement>
                    <Button size="sm" onClick={toggleShowPassword}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Button
                colorScheme="orange"
                type="submit"
                width="full"
                isLoading={loading}
                loadingText="Logging in..."
                _hover={{ bg: 'orange' }}
                _active={{ bg: 'orange.400' }}
              >
                Login
              </Button>
            </Stack>
          </form>

          <HStack justify="space-between" mt={4}>
            <Link color="teal.500" href="#">
              Forgot Password?
            </Link>
            <Link color="teal.600" fontSize="sm" href="/register">
              Don't have an account? Sign Up
            </Link>
          </HStack>
        </motion.div>
      </Box>
    </VStack>
  );
};
