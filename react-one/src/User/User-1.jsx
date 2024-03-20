import React from "react";
import Axios from "axios";
class User extends React.Component{
    state = {
        users:[]
    }
    getUserdata=()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
         .then((resp)=>{
            console.log(resp.data)
            this.setState({user:resp.data})
         })
         .catch((err)=>{
            console.log(err)
         })
     } 
         render(){
             return ( 
            <div>
                <h2>User Component</h2>
                <pre>{JSON.stringify(this.state.user)}</pre>
                <button onClick = {this.getUserdata}>Click!</button>
            </div>
             )
         }
    }

export default User