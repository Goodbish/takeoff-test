import {Container} from "@mui/material";
import React from "react";
import './contacts.css'
import ContactControl from "./ContactsControl";
import CardList from "./ContactCard/CardList";

// Component - bundle other components for decomposition purpose

export default class Contacts extends React.Component {
    render() {
        return (
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                rowGap: '20px',
                maxHeight: '100vh',
                justifyContent: 'center',
                margin: '150px auto'
            }}>
                <ContactControl/>
                <CardList/>
            </Container>
        )
    }
}