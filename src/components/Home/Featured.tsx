import React from "react";
import { Box, Heading, Text, Image, Button, Stack } from "@chakra-ui/react";

export const Featured: React.FC = () => {
    return (
        <Box className="cycle_section layout_padding" bg="gray.50">
            <Box className="container">
                <Heading className="cycle_taital blutext" color="blue.600" mb={4}>Featured Products</Heading>
                <Text className="cycle_text" fontSize="lg" mb={8}>
                    Explore our top VoIP hardware and services 
                    designed to keep you connected with ease 
                    and efficiency.
                </Text>

                <Box className="cycle_section_2 layout_padding" mt={6}>
                    <Box className="row" display="flex" flexWrap="wrap" justifyContent="space-between">
                        <Box className="col-md-6" width={{ base: "100%", md: "48%" }} p={4}>
                            <Box className="box_main" bg="white" p={6} borderRadius="lg" boxShadow="md">
                                <Text className="number_text" fontSize="2xl" fontWeight="bold" color="gray.700">01</Text>
                                <Box className="image_2" mt={4}>
                                    <Image src="images/homehero1.png" borderRadius="md" boxShadow="sm" />
                                </Box>
                            </Box>
                        </Box>
                        <Box className="col-md-6" width={{ base: "100%", md: "48%" }} p={4}>
                            <Heading className="cycles_text blutext" size="md" color="blue.600" mb={2}>VoIP Service – Virtual Phone Numbers</Heading>
                            <Text className="lorem_text" mb={4}>
                                Enhance your business presence with our virtual 
                                phone numbers. Choose local or international 
                                numbers to give your business a professional 
                                touch, while enjoying features like call 
                                forwarding, voicemail, and more.
                            </Text>
                            <Box className="btn_main">
                                <Button className="buy_bt" variant="outline" colorScheme="orange" mb={2}>Buy Now</Button>
                                <Heading className="price_text" size="sm">Price &nbsp;<span style={{ color: "#e65d0f" }}>&#8358; </span> <span style={{ color: "#325662" }}>200</span></Heading>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box className="cycle_section_3 layout_padding" mt={6}>
                    <Box className="row" display="flex" flexWrap="wrap" justifyContent="space-between">
                        <Box className="col-md-6" width={{ base: "100%", md: "48%" }} p={4}>
                            <Heading className="cycles_text blutext" size="md" color="blue.600" mb={2}>Yealink w37P SIP DECT Telephone</Heading>
                            <Text className="lorem_text" mb={4}>
                                The Yealink W73P DECT base station that works with 
                                the Yealink W73H handsets. It is a professional and 
                                scalable DECT system for VoIP telephony. In total, 
                                up to 10 W73H handsets can be connected, with 10 
                                SIP accounts and up to 20 simultaneous calls.
                            </Text>
                            <Box className="btn_main">
                                <Button className="buy_bt" variant="outline" colorScheme="orange" mb={2}>Buy Now</Button>
                                <Heading className="price_text" size="sm">Price &nbsp;
                                    <span style={{ color: "#f7c17b" }}>&#8358; </span> 
                                    <span style={{ color: "#325662" }}>5000</span>
                                </Heading>
                            </Box>
                        </Box>
                        <Box className="col-md-6" width={{ base: "100%", md: "48%" }} p={4}>
                            <Box className="box_main_3" bg="white" p={6} borderRadius="lg" boxShadow="md">
                                <Text className="number_text_2" fontSize="2xl" fontWeight="bold" color="gray.700">02</Text>
                                <Box className="image_2" mt={4}>
                                    <Image src="images/yealinkW37p.png" borderRadius="md" boxShadow="sm" />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box className="cycle_section_2 layout_padding" mt={6}>
                    <Box className="row" display="flex" flexWrap="wrap" justifyContent="space-between">
                        <Box className="col-md-6" width={{ base: "100%", md: "48%" }} p={4}>
                            <Box className="box_main_3" bg="white" p={6} borderRadius="lg" boxShadow="md">
                                <Text className="number_text_2" fontSize="2xl" fontWeight="bold" color="gray.700">03</Text>
                                <Box className="image_2" mt={4}>
                                    <Image src="images/cisco7821.png" borderRadius="md" boxShadow="sm" />
                                </Box>
                            </Box>
                        </Box>
                        <Box className="col-md-6" width={{ base: "100%", md: "48%" }} p={4}>
                            <Heading className="cycles_text blutext" size="md" color="blue.600" mb={2}>Cisco 7821 IP Phone</Heading>
                            <Text className="lorem_text" mb={4}>
                                The Cisco 7821 is part of the Cisco 7800 series 
                                and offers support for two lines. The black and 
                                white display shows details about the call and 
                                options to manage your calls. Connect the Cisco 
                                7821 to the network and to your computer via 
                                the two Fast Ethernet ports.
                            </Text>
                            <Box className="btn_main">
                                <Button className="buy_bt" variant="outline" colorScheme="orange" mb={2}>Buy Now</Button>
                                <Heading className="price_text" size="sm">
                                    Price &nbsp;
                                    <span style={{ color: "#f7c17b" }}>&#8358;</span> 
                                    <span style={{ color: "#325662" }}>5000</span>
                                </Heading>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box className="read_btn_main" mt={6} textAlign="center">
                    <Button as="a" href="/shop" colorScheme="orange">See All Products</Button>
                </Box>
            </Box>
        </Box>
    );
};
