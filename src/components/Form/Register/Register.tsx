import { Box, TextField, Button, Link as LinkMui } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import formStore from "../../../store/formStore";

const Register = () => {
    return (
            <>
                <Typography variant="h1" component="h2">
                    Sign up
                </Typography>
                <Box component="form" sx={{ mt: 1 }} onSubmit={formStore.RegisterEvent}>
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
                            <LinkMui component="span">Already have an account? Sign in</LinkMui>
                        </Link>
                    </Box>
                </Box>
            </>
        )
}

export default Register