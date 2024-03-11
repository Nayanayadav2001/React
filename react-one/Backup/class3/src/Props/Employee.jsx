import React,{Component, Fragment} from "react";

class Employee extends Component{

    render(){
        let {user, loc} = this.props
        let {uid ,uname} = user
        
        return <Fragment>
            <pre>{JSON.stringify(this.props)}</pre>
            <h3>Employee Id:{this.props.user.uid}</h3>
            <h3>Employee Id:{user.uid}</h3>
            <h3>Employee Id:{uid}</h3>
            <h3>Employee Name:{this.props.user.uname}</h3>
            <h3>Employee Email:{this.props.user.uemail}</h3>
            <h4>Employee Loc:{this.props.loc}</h4>

            <hr/>
            <h3>Dummy Name:{uname}</h3>
            </Fragment>
    }
}

export default Employee