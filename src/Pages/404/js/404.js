import React, { Component } from 'react';
import '../css/404.css';
class NotFound extends Component {

    constructor(props){
        super(props);
        this.state = {
            message: 'Sahifa topilmadi'
        }
    }

    render() {
        return (
            <div className="bg-danger container-fluid loader">
                <div className="container justify-content-center d-flex h-25">
                    <img src={require('../../../Assets/sources/404.gif')} className='h-100'/>
                </div>
                <div className="container justify-content-center p-0 d-flex">
                    <h1 className='Error'>404</h1>
                </div>
                <div className="container justify-content-center d-flex">
                    <h4 align="center" className="not-found text-warning">
                        Sahifa topilmadi
                    </h4>
                </div>
            </div>
        );
    }
}

export default NotFound;