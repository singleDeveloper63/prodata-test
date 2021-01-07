import React, { Component } from 'react';
import Navbar from '../../../Components/Navbar/navbar';
import '../css/register.css';
import Footer from '../../../Components/Footer/footer';
import axios from 'axios';

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : "",
            confirmPassword : "",
            isFilled : false,
            regText : "Ro'yxatdan o'tish",
            reqSend : true,
            requestError : false,
            requestCompleted : false,
            loadIcon : "fa-plus",
            allIsFilled : false,
            googleURL : 'https://accounts.google.com/signin/oauth/identifier?response_type=code&client_id=143442059824-8s6j34ir9l2u1arq963n8vi7uqdgcnvd.apps.googleusercontent.com&scope=openid%20email%20profile&redirect_uri=https%3A%2F%2Fprodata-test.herokuapp.com&login_hint=jsmith%40example.com%20&nonce=0394852-3190485-2490358&hd=prodata-test.herokuapp.com&o2v=2&as=pEQqry0gK1yCqCSZd3s9ZA&flowName=GeneralOAuthFlow',
        }

        this.sendDatas = this.sendDatas.bind(this);
    }

    allIsFilled(){
        if( this.state.email !== "" && this.state.password !== "" && this.state.confirmPassword !== "" ) {
            return true;
        }

        return false;
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

    sendDatas(e){
        e.preventDefault();
        
        let userData = new FormData();
        
        this.setState({ regText : "Iltimos kuting...",reqSend : false , loadIcon: "fa-spinner fa-pulse", email : "", password : "", confirmPassword : "" });
        document.forms[0].reset();
        userData.append('email', this.state.email);
        userData.append('password', this.state.password);
        axios.post('https://blog-tutorial-7657.herokuapp.com/auth/users/', userData)
        .then( (res) => {
            localStorage.setItem('email',JSON.stringify(res.data.email));
            this.setState({ regText : "Ro'yxatdan o'tish", reqSend : true , requestError : false, requestCompleted : true, loadIcon : "fa-plus"});
        }).catch( (error ) => {
            this.setState({ regText : "Ro'yxatdan o'tish", reqSend : true , requestCompleted : false, requestError : true, loadIcon : "fa-plus"});
            console.log(error.code);
        })
    }

    requestError(){
            return <div className="alert alert-danger alert-dismissible fade show">
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                 <b> <i className="fa fa-fw fa-exclamation-triangle"> </i>  Xatolik : </b>&nbsp; Bu elektron pochtadan foydalanuvchi ro'yxatdan o'tgan . Iltimos boshqa elektron pochta kiriting
            </div>
    }

    requestSuccess(){
        let email = JSON.parse(localStorage.getItem('email'));
        return <div className="alert alert-success">
            <b> <i className="fa fa-fw fa-check-circle"></i> Raxmat </b> { email } elektron pochtasiga ro'yxatdan o'tishni akvlashtirish havoalsi jo'natildi. Iltimos elektron pochtangizni tekshiring .
        </div>
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



    render() {
        return ( 
            <div>
                <Navbar />
                <div className="mx-auto registerPage py-5 mt-5">
                    <div className="container py-5 mx-auto mb-4 ">
                        <div className="card mx-auto registerCard shadow-lg mt-0 ">
                            <div className="card-body">
                                <h3 className="text-center text-secondary my-4 pb-5" style={{ fontFamily : 'Brand' }}>Ro'yxatdan o'tish</h3>
                                <form  onSubmit={ this.sendDatas }>
                                    <div className="px-xl-5 px-lg-5 px-md-2 px-sm-1 px-xs-1">
                                        <div className="form-group">
                                            <label htmlFor="email"><i className="fa fa-envelope"></i>&nbsp;&nbsp;Elektron pochta</label>
                                            <input type="email"   className="form-control" id="email" placeholder="salimov@misollar.com"
                                            autoComplete="off"
                                            onInvalid={ e => e.target.setCustomValidity("Iltimos bu maydonni to'g'ri to'ldiring !")}
                                            onChange={ e => {this.setState({email : e.target.value})}} />
                                        </div><br/>
                                            { this.state.email !=="" && !this.state.email.match(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/) ? 
                                            <div className="alert alert-danger">
                                                <b> <i className="fa fa-fw fa-exclamation-triangle"></i> Xatolik : </b> Email noto'g'ri kiritildi !
                                            </div> : null }
                                        <div className="form-group">
                                            <label htmlFor="password"><i className="fa fa-key"></i>&nbsp;&nbsp;Maqbul parol tanlang</label>
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
                                        <div className="form-group">
                                            <label htmlFor="password2"><i className="fa fa-key"></i>&nbsp;&nbsp;Parolni qayta kiriting</label>
                                                <div className="input-group">
                                                    <br/>
                                                    <input type="password"  className="form-control" placeholder="Parol qayta kiriting"
                                                    onInvalid={ e=> e.target.setCustomValidity("Iltimos bu maydonni to'g'ri to'ldiring !")} id="password2" 
                                                    autoComplete="off"
                                                    onChange={ e => this.setState({confirmPassword : e.target.value, isFilled : true })} />
                                                    <div className="input-group-append" onClick={() => this.togglePassword("password2","pTo2") }>
                                                        <i className="fa fa-fw fa-eye-slash" id="pTo2"></i>
                                                    </div>
                                                </div>
                                        </div><br/>
                                        { this.state.isFilled && this.state.password !== this.state.confirmPassword && this.state.confirmPassword !== "" ? <div className="alert alert-danger">
                                            <b> <i className="fa fa-fw fa-exclamation-triangle"></i> Xatolik : </b>&nbsp;
                                            Parollar bir biriga mos kelmadi.
                                        </div> : null }
                                    </div>
                                    <div className="px-lg-5">
                                        { this.state.requestError ? this.requestError() : this.state.requestCompleted ? this.requestSuccess() : undefined  }
                                    </div>
                                    <div className="d-flex justify-content-between px-lg-5 align-self-baseline flex-wrap mt-2">
                                        <button className="btn btn-outline-primary mx-0 m-0 flex-fill" type="submit" disabled={ 
                                            this.state.email !== "" && this.state.confirmPassword !== "" && this.strength().ok && this.state.reqSend ? false : true }>{ this.state.regText } <i className={"fa fa-fw " + this.state.loadIcon} id="regLoader"></i></button>
                                        <button className="btn btn-outline-dark  mx-1 flex-fill " type="reset" onClick={() => this.setState({ email : "", password: "", confirmPassword: ""})}>Tozalash <i className="fa fa-fw fa-times"></i></button>
                                    </div>
                                </form>
                                    <h5 className='text-center text-secondary mt-3' style={{fontFamily : 'Brand'}}> -Yoki-</h5>
                                    <a className='btn-grouptext-white mx-lg-5 d-flex justify-content-center p-0' href={this.state.googleURL}
                                        style={{textDecoration : 'none'}}>
                                        <button className='btn btn-outline-danger' style={{ borderRadius : '0px'}}> <i className='fab fa-google'></i> </button>
                                        <button className='btn btn-danger flex-fill' style={{ borderRadius : '0px'}}> Google orqali ro'yxatdan o'ting </button>
                                    </a>
                            </div>
                        </div>
                    </div>
             </div>
             <Footer/>
        </div>
        );
    }
} 


export default Register;