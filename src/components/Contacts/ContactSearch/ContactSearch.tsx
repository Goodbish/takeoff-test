import { InputBase } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search'
import './contactSearch.css'
import contactsStore from "../../../store/contactsStore";

const ContactSearch = () => {
    let filterTimeout: string | number | NodeJS.Timeout;

    const debounceSearch = (value: string) => {
        clearTimeout(filterTimeout)
        if (!value) {
            contactsStore.getContactsArray();
            return
        }

        filterTimeout = setTimeout(() => {
            applySearch(value)
        }, 700)
    }

    const applySearch = (value: string) => {
        fetch(`http://localhost:3003/contacts?userId=${contactsStore.currentUserId}&q=${value}`)
        .then(res => res.json())
        .then(
            (result) => {
                contactsStore.contacts = result
                return result
            },
            (error) => {
              console.log(error);
            }
        )
    }

    return (
        <div className="search__container">
            <div className="search__icon-wrapper">
                <SearchIcon />
            </div>
            <InputBase 
                sx={{padding: '8px 8px 8px calc(1em + 32px)', width: '100%'}} 
                onChange={event => (debounceSearch(event.target.value))}
            />
        </div>
    )
}

export default ContactSearch