import React, { Component } from 'react';
import  'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import axios from 'axios';
class Authentication extends Component {

    constructor(props){
        super(props);
        this.state = {
            activationError : false
        }
        this.requestState = this.requestState.bind(this);
    }
    componentDidMount(){

        let activationData = {
            uid : this.props.match.params.uid,
            token : this.props.match.params.token
        }

        axios.post('https://blog-tutorial-7657.herokuapp.com/auth/users/activation/', activationData)
        .then( () => {
            this.props.history.push('/auth/login')
        })
        .catch( () => {
            this.setState({ activationError : true})
        })
    }

    requestState = () => {
        if(this.state.activationError){
            return(
                <div className="bg-danger container-fluid loader">
                    <div className="container justify-content-center d-flex">
                        <i className="fa fa-fw fa-exclamation-triangle fa-6x text-white"></i>
                    </div>
                    <div className="container justify-content-center d-flex">
                        <h5 align="center" className="text-white custom mt-5">
                            So'rovni amalga oshirishda xatolik. Aktivatsiya tokeni amal qilish muddati tugagan yoki internet bilan bog'liq muammo sodir bo'ldi !
                        </h5>
                    </div>
                </div>
            );
        }else{
            return(
                <div className="bg-info container-fluid loader">
                    <div className="container justify-content-center d-flex">
                        <Loader type="Watch" color="white" height="100" width="100"/>
                    </div>
                    <div className="container justify-content-center d-flex">
                        <h4 align="center" className="text-white custom mt-5">
                            Ro'yxatdan o'tish amalga oshirilmoqda . Iltimos kutib turing...
                        </h4>
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
           <div>
               { this.requestState() }
           </div>
        );
    }
}

export default Authentication;