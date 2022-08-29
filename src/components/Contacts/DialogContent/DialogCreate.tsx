import { Box, TextField, Button, DialogActions } from "@mui/material"
import contactsStore from "../../../store/contactsStore"
import InterfaceStore from "../../../store/InterfaceStore";

const DialogCreate = () => {
    return (
        <Box component="form" sx={{ mt: 1, padding: '0 24px' }} onSubmit={contactsStore.createContact}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="name"
                name="name"
                autoFocus
                defaultValue={''}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="phone"
                name="phone"
                defaultValue={''}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="email"
                type="email"
                id="email"
                defaultValue={''}
            />
            <DialogActions>
                <Button onClick={InterfaceStore.closeDialog}>Close</Button>
                <Button type="submit" variant="contained">Add new contact</Button>
            </DialogActions>
        </Box>
    )
}

export default DialogCreate