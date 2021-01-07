import React, { Component } from 'react';
import axios from 'axios';
class  Logout extends Component{

    constructor(props){
        super(props);
        this.state = {
            logoutLoader : 'check-circle'
        }
        this.logout = this.logout.bind(this);
    }
    
    logout(){
        let token = localStorage.getItem('prodata-user');
        let userToken = {
            'Authorization' : 'token '+token
        }
        this.setState({ logoutLoader : 'spinner fa-pulse' });
        axios.post('https://blog-tutorial-7657.herokuapp.com/auth/token/logout/',{}, {
            'headers' : userToken
        })
        .then( () => {
                this.setState({ logoutLoader : 'check-circle' });
                localStorage.removeItem('prodata-user');
                window.location.replace('/');
        })
        .catch( () => {
            this.setState({ logoutLoader : 'check-circle' });
        })
    }


    render() {
        return (
              <div className="modal fade" id="modalLogout" role='dialog' aria-labelledby='logoutModalBody' aria-hidden='true'> 
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-danger text-white">
                            <h4 className="modal-title"> Chiqish </h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div className="modal-body">
                            <h5 className='text-danger'><i className="fa fa-fw fa-exclamation-triangle"></i>  Siz rostdan ham saytdan chiqishni xohlaysizmi ?</h5>
                        </div>
                        <div className='modal-footer'>
                            <button className='btn btn-sm btn-outline-danger' onClick={ this.logout }> Xa <i className={'fa fa-fw fa-'+this.state.logoutLoader}></i></button>
                            <button className='btn btn-sm btn-danger' data-dismiss='modal'> Yo'q <i className='fa fa-fw fa-times-circle'></i></button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Logout;