import react from 'react'

function ContactCard(props) {
    console.log(props)
    return (
        <div style={contact_card}>
            <img style={contact_card_img} src={props.contact.imgUrl}></img>
            <div style={contact_card_info}>
                <h3 style={contact_card_name}>{props.contact.name}</h3>
                <p>Phone: {props.contact.phone}</p>
                <p>Email: {props.contact.email}</p>
            </div>
        </div>
    )
}

const contact_card = {
    height: "380px",
    width: "18%",
    margin: "auto",
    backgroundColor: "#d9d9d9",
    marginBottom: "7px"
}

const contact_card_img = {
    paddingLeft: "13px",
    paddingTop: "13px"
}

const contact_card_info = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: "25px"
}

const contact_card_name = {
    color: "#4d4d4d"
}
export default ContactCard