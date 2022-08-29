import { makeAutoObservable } from "mobx"
import InterfaceStore from "./InterfaceStore"

interface Contact {
    id: number, 
    name: string, 
    phone: string, 
    email: string
}

class ContactStore {
    contacts: Contact[] = []
    currentUserId!: number
    currentCardProps: Contact = {
        id: 0,
        name: '',
        phone: '',
        email: ''
    }

    constructor() {
        makeAutoObservable(this)
    }

    getContactsArray = () => {
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

    updateContact = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const data = {
            name: form.get('name'),
            phone: form.get('phone'),
            email: form.get('email'),
            userId: this.currentUserId
        }
        if (data.name === this.currentCardProps.name &&
            data.email === this.currentCardProps.email &&
            data.phone === this.currentCardProps.phone) {
                InterfaceStore.openSnack = true;
                InterfaceStore.snackMessage = 'Nothing to edit';
                InterfaceStore.openDialog = false;
                return
        }

        fetch(`http://localhost:3003/contacts/${form.get('id')}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(
            (result) => {
                InterfaceStore.openSnack = true;
                InterfaceStore.snackMessage = 'Contact edited';
                this.getContactsArray();
                InterfaceStore.openDialog = false;
                console.log(result);
            },
            (error) => {
                InterfaceStore.openSnack = true;
                InterfaceStore.snackMessage = 'Something went wrong';
                console.log(error);
                InterfaceStore.openDialog = false;
            }
        )
    }

    deleteContact = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        fetch(`http://localhost:3003/contacts/${form.get('id')}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(
            (result) => {
                InterfaceStore.openSnack = true;
                InterfaceStore.snackMessage = 'Contact deleted';
                this.getContactsArray();
                InterfaceStore.openDialog = false;
            },
            (error) => {
                InterfaceStore.openSnack = true;
                InterfaceStore.snackMessage = 'Something went wrong';
                console.log(error);
                InterfaceStore.openDialog = false;
            }
        )
    }

    createContact = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const data = {
            name: form.get('name'),
            phone: form.get('phone'),
            email: form.get('email'),
            userId: this.currentUserId
        }
        fetch(`http://localhost:3003/contacts?userId=${this.currentUserId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(
            (result) => {
                InterfaceStore.openSnack = true;
                InterfaceStore.snackMessage = 'Contact added';
                this.getContactsArray();
                InterfaceStore.openDialog = false;
            },
            (error) => {
                InterfaceStore.openSnack = true;
                InterfaceStore.snackMessage = 'Something went wrong'
                console.log(error);
                InterfaceStore.openDialog = false;
            }
        )
    }
}


export default new ContactStore()