import React from 'react'
import Navbar from '../global/Nav'
import {apiCall} from '../../services/api'

export default class ChatApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments:[]
        };
    }
    componentDidMount(){
        apiCall('get','/appointment/getall/'+this.props.uid).then(v=>{
            console.log(v)
            this.setState({appointments:v})
        })
    }
    render() {
        return (
            <div id="chat">
                <Navbar></Navbar>
                <div className="app">
                    
                </div>
            </div>
        );
    }
}