import React from "react";
import { Banner } from "../components/Home/Banner";
import { Box } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { ContactSection } from "../components/Home/Contact";
import { More } from "../components/Home/More";
import { ContactUs } from "../components/Contact";




const Contact: React.FC = () => {
    return (
        <Box>
            <Banner />
            <ContactUs />
            <Box>
                <Footer />
            </Box>
        </Box>
    )
}


export default Contact;