import React, { Component } from 'react';

class User extends Component{

    componentDidMount(){
        console.log(this.props.match)
    }

    render() {
        return (
             <h1> { JSON.stringify(this.props.match.params) } </h1>
        );
    }
}

export default User;