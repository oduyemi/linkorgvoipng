import React from "react";
import { Banner } from "../components/Home/Banner";
import { Box } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { More } from "../components/Home/More";
import { AboutSection } from "../components/Home/About";
import { ContactSection } from "../components/Home/Contact";



const About: React.FC = () => {
    return (
        <Box>
            <Banner />
            <AboutSection />
            <More />
            <ContactSection />
            
            <Box>
                <Footer />
            </Box>
        </Box>
    )
}


export default About;