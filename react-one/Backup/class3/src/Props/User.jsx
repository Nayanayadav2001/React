import React,{Component} from "react";
import Employee from "./Employee";
class User extends Component{
    user={
        uid:101,
        uname:'siri',
        uemail:'siri@gmail.com'
    }
    pLoc=['Bangalore','Wayanad','Ooty']

    render(){


        return <div>
            <h2>User Component</h2>
            <hr/>
            <Employee user={this.user} loc={this.pLoc}/>
        </div>
    }
}

export default User