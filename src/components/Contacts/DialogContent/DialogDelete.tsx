import { Box, DialogActions, Button } from "@mui/material";
import contactsStore from "../../../store/contactsStore";
import InterfaceStore from "../../../store/InterfaceStore";

const DialogDelete = () => {
    return (
        <Box component="form" sx={{ mt: 1, padding: '0 24px' }} onSubmit={contactsStore.deleteContact}>
            <input type="text" hidden id="id" name="id" value={contactsStore.currentCardProps.id} readOnly/>
            <DialogActions>
                <Button onClick={InterfaceStore.closeDialog}>Close</Button>
                <Button type="submit">Delete</Button>
            </DialogActions>
        </Box>
    )
}

export default DialogDelete