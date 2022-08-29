import { makeAutoObservable } from "mobx"

interface Contact {
    id: number, 
    name: string, 
    phone: string, 
    email: string
}

class ContactStore {
    contacts: Contact[] = []
    currentUserId!: number
    openDialog: boolean = false
    dialogTitle: string = ''
    openSnack: boolean = false
    snackMessage: string = ''
    dialogContent: string = ''
    currentCardProps: Contact = {
        id: 0,
        name: '',
        phone: '',
        email: ''
    }

    constructor() {
        makeAutoObservable(this)
    }

    getContactsArray() {
        fetch(`http://localhost:3003/contacts?userId=${this.currentUserId}`)
        .then(res => res.json())
        .then(
            (result) => {
                this.contacts = result
                return result
            },
            (error) => {
              console.log(error);
            }
        )
    }
}


export default new ContactStore()