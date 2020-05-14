import React from "react";
import {withRouter} from 'react-router';
import axios from 'axios';
import io from "socket.io-client";

class  Welcome extends React.Component {

  constructor(props){
    super(props);
    this.state=({
      username:this.props.location.state,
      first_name:null,
      notifications:[]
    })
  }

  componentDidMount(){
    let server="http://localhost:5000/forms/formList";
    this.socket= io(server);
    this.socket.on("notifications", messageFromBackEnd =>{
      console.log(messageFromBackEnd)
    })
  }

  getFirstName(){
    axios.get('http://localhost:5000/users/login/'+this.state.username)
      .then(res=> this.setState({first_name:res.data.user.first_name}))
  }
  // getNotifications(){
  //   this.socket.emit("login")
  // }


  render(){
    this.getFirstName();
   
  return (
      <div >
        <h2>Hi {this.state.first_name}!</h2>
        <p>{this.state.notifications}</p>
      </div>
    );
  }
}
export default withRouter(Welcome);
