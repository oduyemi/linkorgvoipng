import React from "react";
import { Banner } from "../components/Home/Banner";
import { Box } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { LoginForm } from "../components/Forms/LoginForm";



const Login: React.FC = () => {
    return (
        <Box>
            <Banner />
            <LoginForm />
            <Box>
                <Footer />
            </Box>
        </Box>
    )
}


export default Login;