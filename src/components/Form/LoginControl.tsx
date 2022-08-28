import { Box, Container } from "@mui/material"
import React from "react"
import { Route, Routes } from "react-router-dom"
import Login from "./Login/Login"
import Register from "./Register/Register"

export default class LoginControl extends React.Component {
    
    render() {
        return(
            <Container maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="sign-up" element={<Register />} />
                    </Routes>
                </Box>
            </Container>
        )
    }
}