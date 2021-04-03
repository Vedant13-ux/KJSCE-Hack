import React from "react";
import socketClient from "socket.io-client";
const SERVER = "http://localhost:3001";

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: [],
      socket: null,
      conversation: null,
    };
    this.configureSocket = async () => {
      var socket = socketClient(SERVER,{transport:['websocket']});
      console.log("started socket");
     socket.on("yo", () => {
        console.log("connected to server");
      });
      this.setState({socket})
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
  async componentDidMount() {
    console.log('Hello World');
    await this.loadConversations();
    await this.configureSocket();
  }


  render() {
    return (
      <div>

      </div>
    );
  }
}
