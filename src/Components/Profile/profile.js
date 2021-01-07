import React, { Component } from 'react';
import './profile.css';

class Profile extends Component {

    constructor(props){
        super(props);
        let data = this.props.options.header;
        this.state = {
            first_name : data.first_name,
            last_name : data.last_name,
            avatar : data.avatar,
            permissions : data.role,
            email : data.email
        }

    }

    render() {
        return (
             <div className={'mt-5 tab-pane '+this.props.class} id={ this.props.id }>
                 <div className="profile mt-5 container shadow-md" >
                    <div className="user-info pb-5 ">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-sm-12">
                                <img className="d-xs-block d-lg-block d-md-block" src={ this.state.avatar } alt={ this.state.first_name } />
                            </div>
                            <div className="col-lg-9 col-md-12 col-sm-12 name">
                                <h3 align="left"> {this.state.first_name + " "+this.state.last_name } </h3>
                                <a className="nav-link" href="#"> { this.state.email } </a><hr/>
                                <div className="px-2 btns">
                                    <button type="button" className="btn-profile mx-md-auto"> <i className="fa fa-fw fa-pen"></i> O'zgartirish</button>
                                    <button type="button" className="btn-profile"> <i className="fa fa-fw fa-trash"></i> Akkauntni o'chirish</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        );
    }

}

export default Profile;