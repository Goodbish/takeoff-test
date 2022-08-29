import { Box, TextField, Button, DialogActions } from "@mui/material"
import contactsStore from "../../../store/contactsStore"
import InterfaceStore from "../../../store/InterfaceStore"

const DialogUpdate = () => {
    return (
        <Box component="form" sx={{ mt: 1, padding: '0 24px' }} onSubmit={contactsStore.updateContact}>
            <input type="text" hidden id="id" name="id" value={contactsStore.currentCardProps.id} readOnly/>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="name"
                name="name"
                autoFocus
                defaultValue={contactsStore.currentCardProps.name}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="phone"
                label="phone"
                name="phone"
                defaultValue={contactsStore.currentCardProps.phone}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                label="email"
                type="email"
                id="email"
                defaultValue={contactsStore.currentCardProps.email}
            />
            <DialogActions>
                <Button onClick={InterfaceStore.closeDialog}>Close</Button>
                <Button
                    type="submit"
                    variant="contained"
                >
                Apply changes
                </Button>
            </DialogActions>
        </Box>
    )
}

export default DialogUpdate