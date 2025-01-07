import React from "react";
import { Box, Flex, Link, Image, IconButton, Stack, Spacer } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";

export const Header: React.FC = () => {
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    return (
        <Box className="header header_bg" color="white" px={4} py={3}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Flex align="center" justify="space-between" width="100%">
                    {/* Logo Section */}
                    <Link href="/" className="logo">
                        <Image src="images/logo/logo_whitebg.png" className="ps-4 logoImg" alt="Logo" height="70px" />
                    </Link>

                    <Spacer />
                    <IconButton
                        icon={isNavOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label="Toggle navigation"
                        onClick={toggleNav}
                        display={{ base: "block", md: "none" }}
                    />

<Box
                    display={{ base: isNavOpen ? "block" : "none", md: "block" }}
                    width={{ base: "full", md: "auto" }}
                    mt={{ base: 4, md: 0 }}
                >
                    <Stack
                        direction={{ base: "column", md: "row" }}
                        spacing={4}
                        align="center"
                        mt={{ base: 2, md: 0 }} 
                    >
                        <Link href="/" aria-label="Home">Home</Link>
                        <Link href="/about" aria-label="About">About</Link>
                        <Link href="/faq" aria-label="FAQs">FAQs</Link>
                        <Link href="/shop" aria-label="Shop">Shop</Link>
                        <Link href="/contact" aria-label="Contact Us">Contact Us</Link>
                    </Stack>
                </Box>
                    <Box ml={4} display="flex" alignItems="center">
                        <Link href="/login" mr={4} className="nav-link">Login</Link>
                        <Link href="/cart" mr={4} aria-label="Cart" className="nav-link">
                            <Image src="images/trolly-icon.png" alt="Cart" height="24px" />
                        </Link>
                        <IconButton
                            icon={<SearchIcon />}
                            aria-label="Search"
                            color="white"
                            variant="ghost"
                            height="24px"
                            fontSize="20px"
                        />
                    </Box>
                </Flex>
            </nav>
        </Box>
    );
};
