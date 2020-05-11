import React, {Component} from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import axios from 'axios';



export default class Login extends Component {
    constructor(props){
        super(props);
        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state={
            username: '',
            password: '',
            success:null,
            users:[]
        }
    }
    // componentDidMount() {
    //     axios.get('http://localhost:5000/users/')
    //       .then(response => {
    //         if (response.data.length > 0) {
    //           this.setState({
    //             users: response.data.map(user => user.username),
    //             username: response.data[0].username
    //           })
    //         }
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       })
    //   }
    onChangeUsername(e) {
        this.setState({
          username: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
          password: e.target.value
        })
    }

 
    onSubmit(e){
        e.preventDefault();
        const data= {
            username: this.state.username,
            password: this.state.password
        }
        console.log(data);
        axios.post('http://localhost:5000/users/login',data)
            .then(res=> console.log(res.user))
            // .then(res =>this.setState({success: res.data.success}
            // .then(console.log(this.state.success))
    }    
    
    render(){
        return (
            <div>
                <h1>Log in</h1> 
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                    <label>Username:</label>
                    <input type="text" 
                        required 
                        className="form-control"

                        value={this.state.username}
                        
                        onChange={this.onChangeUsername}
                        />
                    </div>
                    
                    <br></br>
                    <div className="form-group"> 
                    <label>Password:</label>
                    <input type="password" 
                        required 
                        className="form-control"

                        value={this.state.password}
                        
                        onChange={this.onChangePassword}
                        />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Sign in" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
  }