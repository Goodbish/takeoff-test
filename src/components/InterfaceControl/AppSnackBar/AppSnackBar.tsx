import { Snackbar } from '@mui/material';
import { observer } from 'mobx-react';
import InterfaceStore from '../../../store/InterfaceStore';

const AppSnackBar = observer(() => {
    const handleSnackClose = () => {
        InterfaceStore.openSnack = false;
        InterfaceStore.snackMessage = '';
    }

    return (
        <Snackbar
            open={InterfaceStore.openSnack}
            autoHideDuration={3000}
            onClose={handleSnackClose}
            message={InterfaceStore.snackMessage}
        />
    )
})

export default AppSnackBar