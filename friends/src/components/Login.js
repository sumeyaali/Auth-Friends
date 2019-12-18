import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
    state = {
        username: '',
        password:'',
       
    };
    

handleChanges = e => {
    e.preventDefault();
    this.setState({...this.state,[e.target.name]: e.target.value })
}

 login = e => {
    e.preventDefault();
    // this.setState({
    //     isLoading: true
    // })
    axiosWithAuth()
    .post("/login", this.state)
    .then(res => {
        localStorage.setItem("token", res.data.payload)
        this.props.history.push("/friends")
    })
    .catch(err => console.log(err))

}


render() {
    return (
        <div>
            <form onSubmit={this.login}>
                <input
                type="text"
                placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.handleChanges}
                />
                <input
                type="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChanges}
                />
                </form>
                <button onClick={this.login}>Log In</button> 
                {/* {this.state.isLoading && "logging in"} */}
        </div>
    )



}













}

export default Login; 