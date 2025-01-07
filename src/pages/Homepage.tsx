import React from "react";
import { Banner } from "../components/Home/Banner";
import { Featured } from "../components/Home/Featured";
import { Box } from "@chakra-ui/react";
import { AboutSection } from "../components/Home/About";
import { Footer } from "../components/Footer";
import { ContactSection } from "../components/Home/Contact";
import { More } from "../components/Home/More";



const Home: React.FC = () => {
    return (
        <Box>
            <Banner />
            <Featured />
            <AboutSection />
            <More />
            <ContactSection />
            <Box>
                <Footer />
            </Box>
        </Box>
    )
}


export default Home;