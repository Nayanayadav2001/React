import React from "react";

const UserList = (props) => {
  let userHandler = (user) => {
        props.selectedUsers(user)
    }


    return <div>
        <h2>User List</h2>
        <pre>{JSON.stringify(props)}</pre>
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
                    props.users.map((user)=>{
                       return <tr key={user.id} onClick={userHandler}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                     </tr>  
                    })
                }
            </tbody>
        </table>
    </div>
}

export default UserList
