import React from "react";

const UserDetails = (props) => {

    return <div>
        <h2>User Details</h2>
        <pre>{JSON.stringify(props)}</pre>
    </div>
}

export default UserDetails