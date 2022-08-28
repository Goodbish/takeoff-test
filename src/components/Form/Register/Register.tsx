import { Box, TextField, Button, Link as LinkMui } from "@mui/material";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import formStore from "../../../store/formStore";

export default class Register extends React.Component {
    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const data = {
            name: form.get('name'),
            username: form.get('username'),
            password: form.get('password'),
            role: 'user'
        }
        fetch(`http://localhost:3003/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(
            (result) => {
                if (result.length !== 0) {
                    formStore.hideError();
                } else {
                    console.log('error');
                }
            },
            (error) => {
              console.log(error);
            }
        )
    }

    render() {
        return (
            <>
                <Typography variant="h1" component="h2">
                    Sign up
                </Typography>
                <Box component="form" sx={{ mt: 1 }} onSubmit={this.handleSubmit}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="name"
                        name="name"
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign up
                    </Button>
                    <Box>
                        <Link to="/">
                            <LinkMui>Already have an account? Sign in</LinkMui>
                        </Link>
                    </Box>
                </Box>
            </>
        )
    }
}