import { Box, TextField, Button, DialogActions } from "@mui/material"
import contactsStore from "../../../store/contactsStore"

const DialogUpdate = () => {
    const handleClose = () => {
        contactsStore.openDialog = false;
    };

    const updateContact = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const data = {
            name: form.get('name'),
            phone: form.get('phone'),
            email: form.get('email'),
            userId: contactsStore.currentUserId
        }
        if (data.name === contactsStore.currentCardProps.name &&
            data.email === contactsStore.currentCardProps.email &&
            data.phone === contactsStore.currentCardProps.phone) {
                contactsStore.openSnack = true;
                contactsStore.snackMessage = 'Nothing to edit';
                contactsStore.openDialog = false;
                return
        }

        fetch(`http://localhost:3003/contacts/${form.get('id')}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(
            (result) => {
                contactsStore.openSnack = true;
                contactsStore.snackMessage = 'Contact edited';
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
        <Box component="form" sx={{ mt: 1, padding: '0 24px' }} onSubmit={updateContact}>
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
                <Button onClick={handleClose}>Close</Button>
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