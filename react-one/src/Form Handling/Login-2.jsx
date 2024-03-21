import React from "react";

class Login extends React.Component{
    state = {
        email:"",
        password:""
    }

    updateHandler = (event) => {
      this.setState({[event.target.name]:event.target.value})
    }

    submitHandler = (event) => {
        event.preventDefault()
        alert(JSON.stringify(this.state))
    }
    render () {
        return (
        <div className="container mt-5">
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">
                <div className="col-md-5">
                    <div className="card">
                        <div className="card-header">
                            <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <input name="email" type="text" className="form-control" placeholder="Email Id" onChange={this.updateHandler} /> 
                             </div> 
                             <div className="form-group">
                                <input name="password" type="text" className="form-control" placeholder="Password" onChange={this.updateHandler}/> 
                             </div> 
                             <div className="form-group">
                                <input type="submit" className="btn btn-success" onChange={this.submitHandler}/> 
                             </div> 
                            </form>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Login