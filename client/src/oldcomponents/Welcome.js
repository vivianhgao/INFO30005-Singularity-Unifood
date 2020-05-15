import React, {useEffect, useState} from "react";
import {withRouter} from 'react-router';
import socketIOClient from "socket.io-client";

var socket;
class  Welcome extends React.Component {

    constructor(props){
        super(props);

        this.state=({
            username:this.props.location.state,
            latitude: null,
            longitude: null,
            lati2: -37.8253,
            long2: 144.91018,
            distance: null,
            endpoint: "http://localhost:5000",
            formList: []
        });

        this.getLocation = this.getLocation.bind(this);
        this.onChangelati2 = this.onChangelati2.bind(this);
        this.onChangelong2 = this.onChangelong2.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        this.distance = this.distance.bind(this);
        // this.getCoordiantes = this.getCoordiantes.bind(this);

        socket = socketIOClient(this.state.endpoint);

    }

    // getData = forms => {
    //     console.log("food Items: "+forms);
    //     forms = forms.map(form => {
    //         return form;
    //     });
    //     this.setState({ formList: forms });
    // };
    // componentDidMount() {
    //     socket.emit("initial_data");
    //     var state_current = this;
    //     socket.on("get_data", state_current.getData);
    // }
    // componentWillUnmount() {
    //     socket.off("get_data", this.getData);
    // }

    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            });
        } else {
            alert("Geolocation is not supported in this browser");
        }
    }

    distance() {
        if ((this.state.latitude == this.state.lati2) && (this.state.longitude == this.state.long2)) {
            return 0;
        } else {
            var radlat1 = Math.PI * this.state.latitude / 180;
            var radlat2 = Math.PI * this.state.lati2 / 180;
            var theta = this.state.longitude - this.state.long2;
            var radtheta = Math.PI * theta / 180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            dist = dist * 1.609344;

            this.setState({distance: dist});
            return dist;
        }
    }

    onChangelati2(e) {
        this.setState({
            lati2: e.target.value
        });
    }

    onChangelong2(e) {
        this.setState({
            long2: e.target.value
        });
    }

    render() {
        return (
            <div >
                <h2>Welcome {this.state.username}!</h2>
                <button onClick={this.getLocation}>
                    Share my location!
                </button>
                <p> Latitude: {this.state.latitude}</p>
                <p> Lonigtude: {this.state.longitude}</p>

                <button onClick={this.distance}> Check Distance</button>
                <p>Result: {this.state.distance}</p>
                {/*<p> Forms: {this.state.formList}</p>*/}
            </div>
        );
    }

}
export default withRouter(Welcome);