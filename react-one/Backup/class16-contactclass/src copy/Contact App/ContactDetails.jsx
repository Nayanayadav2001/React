import React from 'react'


class ContactDetails extends React.Component{


    render(){
        return <div>
            <h2>Contact Details</h2>
            <pre>{JSON.stringify(this.props)}</pre>
            <div className="card">
                <div className="card-head">
                   <img src={this.props.selcontact.picture.large} alt=''/>
                </div>
                <div className="card-body">
                   <h2>{this.props.selcontact.name.first}</h2>
                </div>
            </div>
        </div>
    }
}
export default ContactDetails