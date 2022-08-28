import { makeAutoObservable } from "mobx"

interface Contact {
    id: number, 
    name: string, 
    phone: string, 
    email: string
}

class ContactStore {
    people: Contact[] = []
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

    getUsersArray() {
        fetch(`http://localhost:3003/people`)
        .then(res => res.json())
        .then(
            (result) => {
                this.people = result
                return result
            },
            (error) => {
              console.log(error);
            }
        )
    }
}


export default new ContactStore()