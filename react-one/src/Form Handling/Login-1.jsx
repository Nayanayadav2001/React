import React, {Component} from "react";

class Login extends Component{
    state = {
        email:"",
        password:"",
        mobile:""
      }


    updateHandler = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }


    submitHandler = (event) => {
        event.preventDefault()
             console.log(this.state)
    }
    render(){
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
            <label>Email:</label>
            <input name="email" type="text" onChange={this.updateHandler}/>
            <br />
            <label>Password:</label>
            <input name="password" type="text" onChange={this.updateHandler}/>
            <br />
            <label>Mobile:</label>
            <input name="mobile" type="number" onChange={this.updateHandler}/>
            <br />
            <input type="submit" value="Login" />
        </form>
        </div>
    }
}
export default Login