import { Dialog, DialogTitle, List } from "@mui/material";
import { observer } from "mobx-react";
import InterfaceStore from "../../../store/InterfaceStore";
import DialogCreate from "../../Contacts/DialogContent/DialogCreate";
import DialogDelete from "../../Contacts/DialogContent/DialogDelete";
import DialogUpdate from "../../Contacts/DialogContent/DialogUpdate";

const AppDialog = observer(() => {
    const handleClose = () => {
        InterfaceStore.openDialog = false;
    };

    const dialogContentSwitch = () => {
        switch(InterfaceStore.dialogContent) {
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
      <Dialog onClose={handleClose} open={InterfaceStore.openDialog}>
        <DialogTitle>{InterfaceStore.dialogTitle}</DialogTitle>
        <List sx={{ pt: 0 }}>
            {dialogContentSwitch()}
        </List>
      </Dialog>
    );
})

export default AppDialog