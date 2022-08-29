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
            maxHeight: 'calc(100vh - 224px)',
            justifyContent: 'center',
            margin: '150px auto 0'
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
