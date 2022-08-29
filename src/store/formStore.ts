import { makeAutoObservable } from "mobx"
import contactsStore from "./contactsStore"
import InterfaceStore from "./InterfaceStore"

interface User {
    id: number, 
    name: string, 
    username: string, 
    password: string
}

class formStore {
    error: boolean = false
    isLogged: boolean = false
    users: User[] = []
    currentUser!: User
    currentUserId!: number

    constructor() {
        makeAutoObservable(this);
    }

    logOut() {
        this.isLogged = false;
        InterfaceStore.openSnack = true;
        InterfaceStore.snackMessage = 'Logged out';
    }

    loginEvent = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        fetch(`http://localhost:3003/users?username=${data.get('username')}&password=${data.get('password')}`)
        .then(res => res.json())
        .then(
            (result) => {
                if (result.length !== 0) {
                    this.error = false;
                    this.isLogged = true;
                    this.currentUser = result[0];
                    // get contacts in mobx state
                    contactsStore.currentUserId = result[0].id;
                    contactsStore.getContactsArray();
                    InterfaceStore.openSnack = true;
                    InterfaceStore.snackMessage = 'Successfully logged';
                } else {
                    this.error = true;
                }
            },
            (error) => {
              console.log('Some error happened', error);
            }
        )
    }

    RegisterEvent = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        const data = {
            name: form.get('name'),
            username: form.get('username'),
            password: form.get('password'),
            role: 'user'
        }
        fetch(`http://localhost:3003/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(
            (result) => {
                if (result.length !== 0) {
                    this.error = false;
                    InterfaceStore.openSnack = true;
                    InterfaceStore.snackMessage = 'Successfully registred';
                } else {
                    console.log('error');
                }
            },
            (error) => {
              console.log(error);
            }
        )
    }
}

export default new formStore()