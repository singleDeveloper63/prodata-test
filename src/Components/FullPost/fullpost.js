import React, { Component } from 'react';


class PostPage extends Component{

    constructor(props){
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
    }

    ws = new WebSocket(`ws://localhost:3000/posts/${this.props.postID}`);
    
    sendMessage(msg){
        this.ws.send(`Received : ${msg}`);
    }

    componentDidMount(){
        this.ws.onopen = () => {
            console.log('Connected !');
        }

        this.ws.onmessage = (event) => {
            console.log(`Sended : ${event.data}`);
            this.sendMessage(event.data);
        }

        this.ws.onclose = () => {
            console.log('Disconnected !');
        }

        this.ws.onerror = (event) => {
            console.log(event);
        }

        console.log(this.ws.readyState)
    }

    render() {
        return (
             <h1>
                 { this.props.data }
             </h1>

        );
    }

}

export default PostPage;