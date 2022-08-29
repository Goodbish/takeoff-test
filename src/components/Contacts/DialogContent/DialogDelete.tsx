import { Box, Typography, DialogActions, Button } from "@mui/material";
import contactsStore from "../../../store/contactsStore";

const DialogDelete = () => {
    const handleClose = () => {
        contactsStore.openDialog = false;
    };

    const deleteContact = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        fetch(`http://localhost:3003/contacts/${form.get('id')}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(
            (result) => {
                contactsStore.openSnack = true;
                contactsStore.snackMessage = 'Contact deleted';
                contactsStore.getContactsArray();
                contactsStore.openDialog = false;
                console.log(result);
            },
            (error) => {
                contactsStore.openSnack = true;
                contactsStore.snackMessage = 'Something went wrong';
                console.log(error);
                contactsStore.openDialog = false;
            }
        )
    }

    return (
        <Box component="form" sx={{ mt: 1, padding: '0 24px' }} onSubmit={deleteContact}>
            <input type="text" hidden id="id" name="id" value={contactsStore.currentCardProps.id} readOnly/>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
                <Button type="submit">Delete</Button>
            </DialogActions>
        </Box>
    )
}

export default DialogDelete