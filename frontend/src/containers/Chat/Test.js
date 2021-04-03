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
            contacts: [{ text: 'John Smith' }, { text: 'Molly Watt' }, { text: 'Ivan Mackay' }],
            messages: [{ id: '1', text: 'Hi Molly!', me: true }, { id: '2', text: 'Hey, how are you doing?', me: false }, { id: '3', text: 'It\'s been a while', me: false }, { id: '4', text: 'Yes it is!', me: true }, { id: '5', text: 'Have you ever heard of lorem ipsum?', me: true }, { id: '6', text: 'No, what is it?', me: false }, { id: '7', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', me: true }],
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
            socket.on('get-rmess',m=>{
                this.setState({messages:m})
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
                            <MessagesHistory items={this.state.messages} />
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
            id: Date.now(),
            me: true
        };
        this.setState(state => ({
            messages: state.messages.concat(newItem),
            message: ''
        }));
    }
}

class MessagesHistory extends React.Component {
    render() {
        return [].concat(this.props.items).reverse().map(item => (
            <div className={"message " + (item.me ? "me" : "")} key={item.id}>
                <div className="message-body">
                    {item.text}
                </div>
            </div>
        ));
    }
}

class ContactList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li>
                        {item.text}
                    </li>
                ))}
            </ul>
        )
    }
}
export default ChatApp;

