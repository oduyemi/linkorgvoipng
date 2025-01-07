import React from "react";
import Slider from "react-slick";
import { Box, Text, Link, Image, Button, Heading } from "@chakra-ui/react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export const Banner: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box className="header_section header_bg" style={{ height: "90vh" }}>
      <Box className="banner_section layout_padding">
        <Slider {...settings}>
          <Box className="carousel-item">
            <Box className="container">
              <Box className="row">
                <Box className="col-md-7">
                  <Box className="best_text" color="white">Best</Box>
                  <Box className="image_1">
                    <Image src="images/home1.png" alt="first image" />
                  </Box>
                </Box>
                <Box className="col-md-5">
                  <Heading className="banner_taital w-md-75">Buy VoIP Hardware</Heading>
                  <Text className="banner_text">Telephony, the right way! All your business communication in one place. Any channel. Any device. Anywhere.</Text>
                  <Box className="contact_bt"><Link href="/shop">Shop Now</Link></Box>
                </Box>
              </Box>
            </Box>
          </Box>

            <Box className="carousel-item" position="relative">
            <Box className="container" p={8}>
              <Box className="row" display="flex" alignItems="center">
                <Box className="col-md-7" textAlign="center">
                  <Text className="best_text" fontSize="3xl" color="white" fontWeight="bold">#1</Text>
                  <Box className="image_1">
                    <Image src="images/home3.png" alt="third image" borderRadius="md" boxShadow="lg" />
                  </Box>
                </Box>
                <Box className="col-md-5">
                  <Heading className="banner_taital w-md-75">Get a Virtual Phone Number</Heading>
                  <Text className="banner_text">
                  Conquer the market with ease. Buy a 
                  virtual phone number at affordable prices, and connect with customers globally.
                  </Text>
                  <Box className="contact_bt"><Link target="_blank" href="/buy-number">Buy Now</Link></Box>
                </Box>
              </Box>
            </Box>
            </Box>
        </Slider>
      </Box>
    </Box>
  );
}
