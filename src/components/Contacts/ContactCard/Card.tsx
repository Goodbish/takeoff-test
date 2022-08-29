import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { observer } from "mobx-react";
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import contactsStore from "../../../store/contactsStore"
import InterfaceStore from "../../../store/InterfaceStore";

interface PeopleObject {
    cardProps: { id: number, name: string, phone: string, email: string }
}

const ContactCard = observer(({cardProps}: PeopleObject) => {
    const editClick = () => {
        InterfaceStore.dialogContent = 'update';
        InterfaceStore.openDialog = true;
        InterfaceStore.dialogTitle = `Edit ${cardProps.name} card`;
        contactsStore.currentCardProps = cardProps;
    }

    const deleteClick = () => {
        InterfaceStore.dialogContent = 'delete';
        InterfaceStore.openDialog = true;
        InterfaceStore.dialogTitle = `Delete ${cardProps.name} card?`;
        contactsStore.currentCardProps = cardProps;
    }

    return (
        <Card key={cardProps.id} sx={{flexShrink: '0'}}>
            <CardContent>
                <Typography className="card card__title" gutterBottom variant="h5" component="div">
                    <PersonIcon/>
                    {cardProps.name}
                </Typography>
                <Typography className="card" gutterBottom component="div">
                    <PhoneIcon/>
                    {cardProps.phone}
                </Typography>
                <Typography className="card" gutterBottom component="div">
                    <EmailIcon/>
                    {cardProps.email}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" aria-label="delete" onClick={deleteClick}>
                    <DeleteIcon /> 
                    Delete
                </Button>
                <Button size="small" aria-label="edit" onClick={editClick}>
                    <ModeEditIcon/>
                    Edit
                </Button>
            </CardActions>
        </Card>
    )
})

export default ContactCard