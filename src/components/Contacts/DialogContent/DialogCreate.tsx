import { Box, TextField, Button, DialogActions } from "@mui/material"
import contactsStore from "../../../store/contactsStore"

const DialogCreate = () => {
    const handleClose = () => {
        contactsStore.openDialog = false;
    };

    const createContact = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const data = {
            name: form.get('name'),
            phone: form.get('phone'),
            email: form.get('email'),
        }
        fetch(`http://localhost:3003/people`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(
            (result) => {
                contactsStore.openSnack = true;
                contactsStore.snackMessage = 'Contact added';
                contactsStore.getUsersArray();
                contactsStore.openDialog = false;
            },
            (error) => {
                contactsStore.openSnack = true;
                contactsStore.snackMessage = 'Something went wrong'
                console.log(error);
                contactsStore.openDialog = false;
            }
        )
    }

    return (
        <Box component="form" sx={{ mt: 1, padding: '0 24px' }} onSubmit={createContact}>
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
                <Button onClick={handleClose}>Close</Button>
                <Button type="submit" variant="contained">Add new contact</Button>
            </DialogActions>
        </Box>
    )
}

export default DialogCreate