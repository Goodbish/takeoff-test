import { observer } from "mobx-react-lite";
import LoginControl from "./Form/LoginControl";
import formStore from "../store/formStore";
import Contacts from "./Contacts/Contacts";
import React from "react";
import Header from "./Header/Header";
import InterfaceControl from "./InterfaceControl/InterfaceControl";

const LoggedComponents = () => {
    return (
        <>
            <Header/>
            <Contacts/>
        </>
    )
}

const RenderApp = observer(() => {
    const logged = formStore.isLogged;
    return logged ? <LoggedComponents/> : <LoginControl/>;
})

class App extends React.Component {
    render() {
        return(
            <>
            <RenderApp/>
            <InterfaceControl/>
            </>
            
        )
    }
}

export default App;