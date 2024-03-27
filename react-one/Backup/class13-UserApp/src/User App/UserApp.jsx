import React, {useEffect , useState } from "react";
import Axios from 'axios';
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const UserApp = () => {
    let [users,setUsers] = useState([])
    let [selusers,setSelUsers] = useState({})


    useEffect (() => {
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            setUsers(resp.data)
        })
       .catch(()=>{ })
    },[])


    let selectedUsers = (users) => {
        setSelUsers(users)
    }


    return <div className="container">
        <h2>User App</h2>
        <pre>{JSON.stringify(users)}</pre>
        <div className="row">
            <div className="col-md-8">

                {
                    users.length>0 ? <>
                    <UserList users={users} selectedUsers={selectedUsers}/>
                    </>: null
                }
            </div>
            <div className="col-md-4">
                {
                    Object.keys(selusers).length>0 ? <>
                    <UserDetails selusers={selusers}/>
                    </>: null
                }
                <UserDetails/>
            </div>
        </div>

    </div>
}

export default UserApp