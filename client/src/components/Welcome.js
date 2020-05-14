import React from "react";
import {withRouter} from 'react-router';
import io from "socket.io-client"

class  Welcome extends React.Component {

  constructor(props){
    super(props);
    this.state=({
      username:this.props.location.state,
      notifications:[]
    })
  }


  render(){
   
  return (
      <div >
        <h2>Welcome {this.state.username}!</h2>
      </div>
    );
  }
}
export default withRouter(Welcome);
