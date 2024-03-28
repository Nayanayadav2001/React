import React from "react";

const UserDetails = (props) => {

    return <div className="container">
        <h2>User Details</h2>
        <pre>{JSON.stringify(props)}</pre>
        <div className="card">
            <div className="card-header">  
            <h2>User Id:{props.selusers.id}</h2>
            </div>
            <div className="card-body"></div>
        </div>

    </div>
}

export default UserDetails