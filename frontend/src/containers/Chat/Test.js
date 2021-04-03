import React from 'react'
import '../../chat.css'
import Navbar from '../global/Nav'
import socketClient from "socket.io-client";
import Nav from '../global/Nav';
const SERVER = "http://localhost:3001";

class ChatApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [{ text: 'John Smith', active: false }, { text: 'Molly Watt', active: true }, { text: 'Ivan Mackay', active: false }],
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
            this.setState({ socket })
            //socket.close()
        };

        this.loadConversations = async () => {
            //   apiCall("put", "/getConversations/", {
            //     list: this.props.currentUser.user.conversations,
            //   })
            //     .then((data) => {
            //       this.setState({ conversations: data.list });
            //     })
            //     .catch((err) => console.log(err));
        };
    }
    // async componentDidMount() {
    //     console.log('Hello World');
    //     await this.loadConversations();
    //     await this.configureSocket();
    // }
    render() {
        return (
            <div id="chat">
                <Navbar></Navbar>                <div class="app">
                    <div class="contact-list">
                        <h1 class="title">My messages</h1>
                        <ContactList items={this.state.contacts} />
                    </div>
                    <div class="messages">
                        <div class="messages-history">
                            <MessagesHistory items={this.state.messages} />
                        </div>
                        <form class="messages-inputs" onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Send a message" onChange={this.handleChange} value={this.state.message} />
                            <button><i class="material-icons">send</i></button>
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
                <div class="message-body">
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
                    <li className={item.active ? "active" : ""}>
                        {item.text}
                    </li>
                ))}
            </ul>
        )
    }
}
export default ChatApp;

