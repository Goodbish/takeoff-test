import { Box, Typography, TextField, Button, Grid, Link as LinkMui } from "@mui/material"
import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import contactsStore from "../../../store/contactsStore";
import formStore from "../../../store/formStore";

const Login = observer(() => {
    return (
        <>
            <Typography variant="h1" component="h2">
                Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={formStore.loginEvent}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="Username"
                    name="username"
                    autoFocus
                    error={formStore.error}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    error={formStore.error}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                Sign In
                </Button>
                <Box>
                    <Link to="/sign-up">
                        <LinkMui component="span">Don't have an account? Sign Up</LinkMui>
                    </Link>
                </Box>
            </Box>
        </>
    );
})

export default Login;