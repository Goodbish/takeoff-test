import { AccountCircle } from "@mui/icons-material"
import { Box, AppBar, Toolbar, Button, Typography } from "@mui/material"
import formStore from "../../store/formStore"

const Header = () => {
    return (
        <>
         <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{display: 'flex', columnGap: '20px', alignItems: 'center',  marginLeft: 'auto'}}>
                        <AccountCircle />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {formStore.currentUser.name}
                        </Typography>
                        <Button color="inherit" onClick={formStore.logOut}>Logout</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    )
}

export default Header