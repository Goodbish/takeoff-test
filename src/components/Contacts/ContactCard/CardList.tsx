import { observer } from "mobx-react"
import contactsStore from "../../../store/contactsStore"
import ContactCard from "./Card"

const CardList = observer(() => {
    return (
        <>
            {contactsStore.people.map(elem => (
                <ContactCard key={elem.id} cardProps={elem}/>
            ))}
        </>
    )
})

export default CardList