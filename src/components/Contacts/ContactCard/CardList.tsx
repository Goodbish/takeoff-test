import { observer } from "mobx-react"
import contactsStore from "../../../store/contactsStore"
import ContactCard from "./Card"

const CardList = observer(() => {
    return (
        <div className="card__list">
            {contactsStore.contacts.map(elem => (
                <ContactCard key={elem.id} cardProps={elem}/>
            ))}
        </div>
    )
})

export default CardList