import React from "react";

const ContactList = (props) => {
   let showContactHandler = (contact) => {
         props.selectedContact(contact)
   }

    return <div>
        <h2>ContactList</h2>
        <pre>{JSON.stringify(props.contacts)}</pre>
        <div className="row">
            <div className="col">
                <table className="table">
                    <thead className="bg-dark text-white">
                        <tr>
                         <th>Id</th>
                         <th>Name</th>
                         <th>Email</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                          props.contacts.map((contact)=>{
                            return  <tr key={contact.email} onClick={showContactHandler.bind(this,contact)}>
                                         <td>{contact.login.uuid.substr(32)}</td>
                                         <td>{contact.name.first}</td>
                                         <td>{contact.email}</td>
                                    </tr>
                             })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

export default ContactList
