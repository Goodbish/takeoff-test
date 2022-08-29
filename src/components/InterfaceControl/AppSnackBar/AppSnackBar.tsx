import { Snackbar } from '@mui/material';
import { observer } from 'mobx-react';
import InterfaceStore from '../../../store/InterfaceStore';

const AppSnackBar = observer(() => {
    return (
        <Snackbar
            open={InterfaceStore.openSnack}
            autoHideDuration={3000}
            onClose={InterfaceStore.closeSnack}
            message={InterfaceStore.snackMessage}
        />
    )
})

export default AppSnackBar