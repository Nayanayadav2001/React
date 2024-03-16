import React from "react";
import Axios  from "axios";

class User extends React.Component {
          state={
            user : []
        }


        componentDidMount(){
            Axios.get('https://jsonplaceholder.typicode.com/users')
            .then((resp)=>{
                console.log(resp.data)
                this.setState({user:resp.data })
            })
            .catch((err)=>{
                console.log(err)
            })
    }

    render(){


        return (
                <div>
                    <pre>{JSON.stringify(this.state.user)}</pre>
                </div>
        )
    }
}


export default User