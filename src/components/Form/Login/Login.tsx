import { Box, Typography, TextField, Button, Grid, Link as LinkMui } from "@mui/material"
import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import contactsStore from "../../../store/contactsStore";
import formStore from "../../../store/formStore";

const Login = observer(() => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        fetch(`http://localhost:3003/users?username=${data.get('username')}&password=${data.get('password')}`)
        .then(res => res.json())
        .then(
            (result) => {
                if (result.length !== 0) {
                    formStore.hideError();
                    formStore.loggingEvent();
                    formStore.currentUser = result[0];
                    // get contacts in mobx state
                    contactsStore.currentUserId = result[0].id;
                    contactsStore.getContactsArray();
                } else {
                    formStore.showError();
                }
            },
            (error) => {
              console.log('Some error happened', error);
            }
        )
    }

    return (
        <>
            <Typography variant="h1" component="h2">
                Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={handleSubmit}>
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