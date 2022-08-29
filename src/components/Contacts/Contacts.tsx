import {Button, Container} from "@mui/material";
import './contacts.css'
import CardList from "./ContactCard/CardList";
import InterfaceStore from "../../store/InterfaceStore";
import ContactSearch from "./ContactSearch/ContactSearch";

// Component - bundle other components for decomposition purpose

const Contacts = () => {
    const handleClickOpen = () => {
        InterfaceStore.dialogTitle = 'Create new Contact';
        InterfaceStore.openDialog = true;
        InterfaceStore.dialogContent = 'create'
    };

    return (
        <Container sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '20px',
            maxHeight: '100vh',
            justifyContent: 'center',
            margin: '150px auto'
        }}>
            <ContactSearch/>
            <Button variant="outlined" onClick={handleClickOpen}>
                Create contact
            </Button>
            <CardList/>
        </Container>
    )
}

export default Contacts
