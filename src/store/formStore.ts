import { makeAutoObservable } from "mobx"

interface User {
    id: number, 
    name: string, 
    username: string, 
    password: string
}

class FormStore {
    error: boolean = false
    isLogged: boolean = false
    users: User[] = []
    currentUser!: User

    constructor() {
        makeAutoObservable(this)
    }

    showError() {
        this.error = true;
    }

    hideError() {
        this.error = false;
    }

    loggingEvent() {
        this.isLogged = true;
    }

    logOut() {
        this.isLogged = false;
    }
}

export default new FormStore()