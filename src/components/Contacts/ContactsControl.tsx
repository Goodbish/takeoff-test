import { Dialog, DialogTitle, List, Button, Snackbar } from "@mui/material";
import { observer } from "mobx-react";
import contactsStore from "../../store/contactsStore";
import ContactSearch from "./ContactSearch/ContactSearch";
import DialogCreate from "./DialogContent/DialogCreate";
import DialogDelete from "./DialogContent/DialogDelete";
import DialogUpdate from "./DialogContent/DialogUpdate";

// Here we create snack component and dialog component
// for ruther usage
// Also here is where we call search component

const ContactDialog = observer(() => {
    const handleClose = () => {
        contactsStore.openDialog = false;
    };

    const dialogContentSwitch = () => {
        switch(contactsStore.dialogContent) {
            case 'create': 
                return <DialogCreate/>
            case 'delete':
                return <DialogDelete/>
            case 'update':
                return <DialogUpdate/>
            default:
                return <span>Type not specified</span>
        }
    }
  
    return (
      <Dialog onClose={handleClose} open={contactsStore.openDialog}>
        <DialogTitle>{contactsStore.dialogTitle}</DialogTitle>
        <List sx={{ pt: 0 }}>
            {dialogContentSwitch()}
        </List>
      </Dialog>
    );
})

const ContactsSnack = observer(() => {
    const handleSnackClose = () => {
        contactsStore.openSnack = false;
        contactsStore.snackMessage = '';
    }

    return (
        <Snackbar
            open={contactsStore.openSnack}
            autoHideDuration={3000}
            onClose={handleSnackClose}
            message={contactsStore.snackMessage}
        />
    )
})

const ContactControl = () => {
    const handleClickOpen = () => {
        contactsStore.dialogTitle = 'Create new Contact';
        contactsStore.openDialog = true;
        contactsStore.dialogContent = 'create'
    };

    return (
        <>
            <ContactSearch/>
            <Button variant="outlined" onClick={handleClickOpen}>
                Create contact
            </Button>
            <ContactDialog/>
            <ContactsSnack/>
        </>
    )
}

export default ContactControl