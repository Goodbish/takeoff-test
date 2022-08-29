import { makeAutoObservable } from "mobx"

class InterfaceStore {
    openDialog: boolean = false
    dialogTitle: string = ''
    openSnack: boolean = false
    snackMessage: string = ''
    dialogContent: string = ''

    constructor() {
        makeAutoObservable(this)
    }

    closeDialog = () => {
        this.openDialog = false;
        this.dialogTitle = '';
        this.dialogContent = '';
    }

    closeSnack = ()  => {
        this.openSnack = false;
        this.snackMessage = '';
    }
}

export default new InterfaceStore()