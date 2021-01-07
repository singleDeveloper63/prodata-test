import React, { Component } from 'react';
import axios  from 'axios';
import { Link } from 'react-router-dom';
import '../css/login.css';
import Navbar from '../../../Components/Navbar/navbar';
import Footer from '../../../Components/Footer/footer';

class Login extends Component{

    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : "",
            loader : {
                text : "Kirish",
                icon : "sign-in-alt"
            },
            hasError : false,
            hasSuccess : false
        }

        this.login = this.login.bind(this);
    }

    login(e){
        e.preventDefault();
        
        let loginData = new FormData();

        this.setState({ loader : { text : "Kuting", icon : "spinner fa-pulse" } });

        loginData.append("email", this.state.email);
        loginData.append("password", this.state.password);

        document.forms[1].reset();
        this.setState({ email : "", password : "" });

        axios.post('https://blog-tutorial-7657.herokuapp.com/auth/token/login/', loginData)
        .then( res => {
            localStorage.setItem('prodata-user', res.data.auth_token);
            this.setState({ loader : { text : "Kirish", icon : "sign-in-alt" }, hasSuccess : true , hasError : false });
            this.props.history.push('/');
        })
        .catch( () => {
            this.setState({ loader : { text : "Kirish", icon : "sign-in-alt" }, hasError : true, hasSuccess : false })
        })

    }

    strength = () => {
        let uCase = this.state.password.match(/[A-Z]/g);
        let lCase = this.state.password.match(/[a-z]/g);
        let nums = this.state.password.match(/[0-9]/g);
        let sChar = this.state.password.match(/[!@#$%^&*()]/g);
        let len = this.state.password.length > 7;

        return {
            uCase : uCase,
            lCase : lCase,
            nums : nums,
            sChar : sChar,
            len : len,
            ok : Boolean(uCase) && Boolean(lCase) && Boolean(nums) && Boolean(sChar) && len
        }
    }

    togglePassword(id1,id2){
        let passwordArea = document.getElementById(id1);
        let icon = document.getElementById(id2);
        var isVisible = passwordArea.getAttribute('type');
        
        if(isVisible === "password"){
            passwordArea.setAttribute("type", "text");
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye");
        }else{
            passwordArea.setAttribute("type", "password");
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        }

    }

    passwordCheck = () => {
        if(this.state.password !== ""){
            var pass = this.strength();
            return(
                <ul className={ pass.ok ? "d-none" : "list-unstyled mb-5 p-0 mx-0 d-block" }>
                    <li className={ pass.nums ? "text-success" : "text-danger" }><i className={ pass.nums ? "fa fa-fw fa-check-circle" : "fa fa-fw fa-times-circle" }></i>  Parolda raqam qatnashgan bo'lishi kerak </li>
                    <li className={ pass.uCase ? "text-success" : "text-danger" }><i className={ pass.uCase ? "fa fa-fw fa-check-circle" : "fa fa-fw fa-times-circle" }></i>  Parolda katta harf qatnashgan bo'lishi kerak </li>
                    <li className={ pass.lCase ? "text-success" : "text-danger" }><i className={ pass.lCase ? "fa fa-fw fa-check-circle" : "fa fa-fw fa-times-circle" }></i>  Parolda kichik harf qatnashgan bo'lishi kerak </li>
                    <li className={ pass.sChar ? "text-success" : "text-danger" }><i className={ pass.sChar ? "fa fa-fw fa-check-circle" : "fa fa-fw fa-times-circle" }></i>  Parolda bu !@#$%^&*() belgilardan biri qatnashgan bo'lishi kerak </li>
                    <li className={ pass.len ? "text-success" : "text-danger" }><i className={ pass.len ? "fa fa-fw fa-check-circle" : "fa fa-fw fa-times-circle" }></i>  Parolda kamida 8 ta belgi qatnashgan bo'lishi kerak </li>
                </ul>
            )
        }
    }

    loginSuccess(){
        return(
            <div className="alert alert-success p-3">
                <b> <i className="fa fa-fw fa-check-circle"></i> Raxmat ! </b>&nbsp;&nbsp; Iltimos kutib turing  ...
            </div>
        )
    }

    loginError(){
        return(
            <div className="aler alert-danger p-3">
                <b> <i className="fa fa-fw fa-exclamation-circle"></i> Xatolik !</b>&nbsp;&nbsp;
                Email yoki parol noto'g'ri kiritildi. Iltimos tekshirib qaytadan kiriting .
            </div>
        )
    }

    render() {
        return (
             <div className="mx-auto login">
                 <Navbar />
                 <div className="my-5 pt-5 mx-3">
                    <div className="card mx-auto px-xl-5 px-lg-5 px-md-2 px-sm-1 px-xs-1 mt-4 shadow-lg">
                        <h3 className="mt-4 m-0 justify-content-center p-3"> Kirish </h3>
                        <div className="card-body">
                            <form onSubmit={ this.login }>
                                <div className="form-group">
                                    <label htmlFor="email"><i className="fa fa-envelope"></i>&nbsp;&nbsp;Elektron pochta</label>
                                    <input type="email"   className="form-control" id="email" placeholder="salimov@misollar.com"
                                    autoComplete="off"
                                    onChange={ e => {this.setState({email : e.target.value})}} />
                                </div><br/>
                                { this.state.email !=="" && !this.state.email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/) ? 
                                <div className="alert alert-danger">
                                    <b> <i className="fa fa-fw fa-exclamation-triangle"></i> Xatolik : </b> Email noto'g'ri kiritildi !
                                </div> : null }

                                <div className="form-group">
                                    <label htmlFor="password"><i className="fa fa-key"></i>&nbsp;&nbsp;Parolni kiriting</label>
                                        <div className="input-group">
                                            <br/>
                                            <input type="password" className="form-control" placeholder="Parol kiriting"
                                                onInvalid={ e=> e.target.setCustomValidity("Iltimos bu maydonni to'g'ri to'ldiring !")} id="password" 
                                                autoComplete="off"
                                                onChange={ e => this.setState({password : e.target.value })}/>
                                        <div className="input-group-append" onClick={() => this.togglePassword("password","pTo") }>
                                            <i className="fa fa-fw fa-eye-slash" id="pTo"></i>
                                        </div>
                                    </div>
                                </div><br/>
                                { this.passwordCheck() }
                                <Link className="btn-link text-primary" to="/additionals/resetPassword"> Parolni unutdingizmi ?  </Link><br/>
                                { this.state.hasError && this.loginError() }
                                { this.state.hasSuccess && this.loginSuccess() }
                                <div className="text-center mt-1">
                                <button type="submit" className="btn btn-primary"
                                    disabled = { 
                                        this.state.email === "" || this.state.password === "" ? true : false
                                    }> { this.state.loader.text } <i className={"fa fa-fw fa-"+ this.state.loader.icon}></i> </button>
                                <button type="reset" className="btn btn-outline-primary  ml-2" onClick= { () =>
                                    this.setState({ email : "", password : "" })
                                }> Tozalash <i className="fa fa-fw fa-times"></i> </button>
                                </div>
                                <Link className="btn-link text-primary" to="/auth/register"> Hali ro'yxatdan o'tmadingizmi ? </Link>
                            </form>
                        </div>
                    </div>
                 </div>
                 <Footer />
             </div>

        );
    }
}

export default Login;