import React, { Component } from 'react';
import Sidenav from '../../Components/SideNav/sidenav';
import Footer from '../../Components/Footer/footer';
import Navbar from '../../Components/Navbar/navbar';
import './adminPanel.css';
import Profile from '../../Components/Profile/profile';
import axios from 'axios';
import Load from '../../Components/Loader/loader';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import {plugins} from 'suneditor-react';
import parse from 'html-react-parser';
class AdminPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            postVal : '',
            code : '',
            value : '',
            load : false,
            isAdmin : true,
            isUnathorized : false,
            userOptions : {
                header : {
                    first_name : "",
                    last_name : "",
                    avatar : require('../../Assets/Icons/user.png'),
                    email : "",
                    role : []
                },
                items : [
                    { url : '#profile', text : 'Profil', class : 'active', icon : 'user-circle' },
                    { url: '#editor', text: 'Post yaratish', icon : 'newspaper'}
                ]
            }
        }
        this.loadData = this.loadData.bind(this);
    }

    
    loadData = () => {
        if(this.state.load){
            return (
            <div>
                <Load />
            </div>
            )
            
        }
        else if(this.state.isAdmin){
            return(
                <div>
                 <Navbar class="responsive-nav" custom="responsive-collapse"/>
                 <Sidenav options={ this.state.userOptions }/>
                 <main className="responsive">
                    <div className="tab-content">
                        <Profile class="active" id="profile" options={ this.state.userOptions }/>
                        <div className="tab-pane mt-5 pt-5" id="editor">
                            <div className="container">
                                <h3 align="center" className="text-dark text-bold d-block">Post yaratish</h3><hr/>
                                <SunEditor  setOptions={{
                                    plugins: plugins,
                                    buttonList: [
                                        ['undo', 'redo'],
                                        ['font', 'fontSize', 'formatBlock'],
                                        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                                        ['removeFormat'],
                                        '/',
                                        ['fontColor', 'hiliteColor'],
                                        ['indent', 'outdent'],
                                        ['align', 'horizontalRule', 'list', 'table'],
                                        ['link', 'image', 'video'],
                                        ['fullScreen', 'showBlocks', 'codeView'],
                                        ['preview', 'print'],
                                        ['save']
                                    ]
                                    }}
                                    onChange={ content => this.setState({ postVal : content }) }
                                    />
                                <div id="preview"> { parse(this.state.postVal) }  </div>
                                <p>
                                    { this.state.value }
                                </p>

                            </div>
                        </div>
                    </div>
                    <Footer />
                 </main>
            </div>
            )
        }else if(this.state.isUnathorized || !this.state.isAdmin){
            return (
                <div className="bg-danger container-fluid loader">
                    <div className="container justify-content-center d-flex">
                        <i className="fa fa-fw fa-exclamation-triangle fa-6x text-white"/>
                    </div>
                    <div className="container justify-content-center d-flex">
                        <h4 align="center" className="text-white custom mt-5">
                            Sizning bu sahifaga kirishga huquqingiz yo'q !
                        </h4>
                    </div>
                </div>

            )
        }
    }

    render() {
        return (
             <div>
                 { this.loadData() }
             </div>
        );
    }
}

export default AdminPage;