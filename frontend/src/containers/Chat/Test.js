import React from 'react'
import '../../chat.css'
import Navbar from '../global/Nav'
import socketClient from "socket.io-client";
import Nav from '../global/Nav';
const SERVER = "http://localhost:3001";
var socketstore=null;

class ChatApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            messages: [], 
            message: '',
            conversations: [],
            socket: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.configureSocket = async () => {
            var socket = socketClient(SERVER, { transport: ['websocket'] });
            console.log("started socket");
            socket.on("yo", () => {
                console.log("connected to server");
            });
            socket.on('new-messr',m=>{
                console.log(m)
                let tilln=this.state.messages
                tilln.push(m)
                this.setState({messages:tilln})
            })
            socket.on('get-rmess',m=>{
                this.setState({messages:m.messages,contacts:m.counsellor})
                console.log(m)
            })
            socket.emit("join-room",this.props.match.params.id)
            socketstore=socket
            //this.setState({ socket })
            //socket.close()
        };
    }
    async componentDidMount() {
        console.log('Hello World');

        await this.configureSocket();
    }
    render() {
        return (
            <div id="chat">
                <Navbar></Navbar>
                <div className="app">
                    <div className="contact-list">
                        <h1 className="title">Participant</h1>
                        <ContactList items={this.state.contacts} />
                    </div>
                    <div className="messages">
                        <div className="messages-history">
                            <MessagesHistory uid={this.props.uid} items={this.state.messages} />
                        </div>
                        <form className="messages-inputs" onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Send a message" onChange={this.handleChange} value={this.state.message} />
                            <button><i className="material-icons">send</i></button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ message: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.message.length) {
            return;
        }
        const newItem = {
            text: this.state.message,
            author:this.props.uid
        };
        socketstore.emit('room-message',{message:newItem,rid:this.props.match.params.id})
        // this.setState(state => ({
        //     messages: state.messages.concat(newItem),
        //     message: ''
        // }));
    }
}

class MessagesHistory extends React.Component {
    
    render() {
        return [].concat(this.props.items).reverse().map(item =>{
            return (
            <div className={"message " + (item.author._id==this.props.uid ? "me" : "")} key={item.id}>
                
                <div className="message-body">
                <h5 style={{margin:"0px"}}>{item.author.name}</h5>
                    {item.text}
                </div>
            </div>
        )});
    }
}

class ContactList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li>
                        {item.name}
                    </li>
                ))}
            </ul>
        )
    }
}
export default ChatApp;

