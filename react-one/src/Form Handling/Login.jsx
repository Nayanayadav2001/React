import React, {Component} from "react";

class Login extends Component{
    state = {
        email:"",
        password:""
    }
    emailHandler = (event) => {
        this.setState({email: event.target.value})
    }
    passwordHandler = (event) => {
        this.setState({password: event.target.value})
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
            <input type="email" onChange={this.emailHandler}/>
            <br />
            <label>Password:</label>
            <input type="password" onChange={this.passwordHandler}/>
            <br />
            <input type="submit" value="Login" />
        </form>
        </div>
    }
}
export default Login