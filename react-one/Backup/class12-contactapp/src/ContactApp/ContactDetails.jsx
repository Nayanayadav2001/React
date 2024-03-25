import React from "react";

const ContactDetails = (props) =>{

    return <div className="container">
        <h2>Contact Details</h2>
        <pre>{JSON.stringify(props)}</pre>
        <div className="row">
            <div className="col">
            <div className="card">
            <div className="card-header">
                <img src={props.selcontact.picture.medium} alt="" />
            </div>
            <div className="card-body">
                 <h3>Name:{props.selcontact.name.last}</h3>
                 <h3>Gender:{props.selcontact.gender}</h3>
                 <h3>City:{props.selcontact.city}</h3>
            </div>
            </div>
            </div>
        </div>   
    </div>
}

export default ContactDetails