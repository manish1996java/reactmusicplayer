import React from 'react';
import './Home.css';
class Home extends React.Component{
    state = {
        time: 0,
        lat: null,
        log: null
    };


    timer = () =>{
        console.log('didUpdate')
        setInterval(() => {
            let time = new Date().toLocaleTimeString();
            this.setState({time:time});
        }, 1000);
    }
    currentLocation = () =>{
        window.navigator.geolocation.getCurrentPosition((position,error)=>{
            this.setState({lat:position.coords.latitude,log:position.coords.longitude});
            console.log(this.state.lat);
        })
    }
    

    componentDidMount = () =>{
        this.timer();
        this.currentLocation();
    }
 
    render(){
        return(
            <div>
                <h3>{this.state.time}</h3>
                <h2>latitude: {this.state.lat}   longitude: {this.state.log}</h2>
                <div id="map">

                </div>
            </div>
        )
    }
}

export default Home;