import React from "react";


class ContactList extends React.Component{

   showContact = (contact)=>{
        this.props.selectedContact(contact)
   }

    render(){
        return <div>
            <h2>ContactList</h2>
            <pre>{JSON.stringify(this.props)}</pre>
            <table className="table bg-dark text-white">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.contacts.map((contact,index)=>{
                            return <tr key={index} onClick={this.showContact.bind(this,contact)} >
                                <td>{contact.login.uuid.substr(32)}</td>
                                <td>{contact.name.first}</td>
                                <td>{contact.email}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    }
}

export default ContactList