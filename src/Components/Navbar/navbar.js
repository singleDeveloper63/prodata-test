import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import 'react-animated-css';
import 'animate.css';
import { Animated } from 'react-animated-css';
import Logout from '../../Services/authServices/logout';
class Navbar extends Component{

    constructor(props){
        super(props);
        this.state = {
            loggedIn : false,
            scrollPos : window.pageYOffset
        }
        this.toTop = this.toTop.bind(this);
    }

    toTop(){
        var currentPos = window.pageYOffset;
        if(currentPos>this.state.scrollPos){
          document.getElementById('scrollTop').style.bottom = '-100px';
          document.getElementById('scrollTop').style.opacity = '0';
          document.getElementById("navbar").style.top = "-125px";
        }else{
          document.getElementById('scrollTop').style.bottom = '50px';
          document.getElementById('scrollTop').style.opacity = '1';
          document.getElementById("navbar").style.top = "0";
        }
        if(currentPos < 50){
          document.getElementById('scrollTop').style.opacity = '0';
        }else{
          document.getElementById('scrollTop').style.opacity= '1';
        }
    
        this.setState({ scrollPos : currentPos });
      }

    componentDidMount(){
        let isLoggedIn = Boolean(localStorage.getItem('prodata-user'));
        isLoggedIn ? this.setState({ loggedIn : true }) : this.setState({ loggedIn : false });
        if(window.pageYOffset < 50){
            document.getElementById('scrollTop').style.bottom = '-100px';
            document.getElementById('scrollTop').style.opacity='0';
        }
        window.onscroll = this.toTop;
    }

    authComponents(){
        return(
            <>
                <Link style={{ color : 'white', textDecoration : 'none'}} className="ml-auto btn btn-auth"  to="/auth/register" data-toggle="tooltip" data-placement="bottom" title="Ro'yxatdan o'tish">
                    <i className="fa fa-fw fa-user-plus"></i> <span>  Qo'shilish </span>
                </Link>
                <Link style={{ color : 'white', textDecoration : 'none'}} className="ml-3 btn btn-auth"  to="/auth/login" data-toggle="tooltip" data-placement="bottom" title="Kirish">
                    <i className="fa fa-fw fa-sign-in-alt"></i> <span>Kirish</span>
                </Link>
            </>
        )
    }
    userComponent(){
        return(
            <>
                <li className="dropdown list-unstyled ml-auto ml-0 mr-3 user-menu">
                    <button className="dropdown-toggle" data-toggle="dropdown"> <i className="fa fa-fw fa-user-circle" data-hover="dropdown"></i>Sozlamalar</button>
                        <div className="dropdown-menu dropdown-menu-right">
                            <Animated animationIn='bounceInRight'>
                                <button className="dropdown-item p" data-toggle="modal"  data-target="#modalLogout"> <i className="fa fa-fw fa-sign-out-alt"></i> Chiqish</button>
                                <Link className="dropdown-item" to='/profile'> <i className="fa fa-fw fa-user-circle"></i>  Profil</Link>
                            </Animated>
                        </div>
                </li>
            </>
        )
    }
   render() {
       return (
           <div> 
            <nav style={ this.props.style } id='navbar' className={"navbar navbar-dark fixed-top navbar-expand-lg px-2 py-md-2 py-sm-2 py-xl-0 py-lg-0 py-xs-2 "+this.props.class} >
                    <div className="container-fluid p-0">
                    <Link className="navbar-brand align-bottom p-0" to="/">
                        <img src={require('../../Assets/Logos/logo.png')}  className="bg-light rounded-circle p-0" style={{ height: "45px" }} alt="Logo"/>
                        <span className="text-white">Pro<span style={{ color : 'orange' }}>Data</span></span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu" 
                        aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="text-white navbar-toggler-icon"></i>
                    </button>
                        <div className={"collapse navbar-collapse "+this.props.custom} id="mainMenu">
                            <ul className="navbar-nav p-3">
                                <li className="nav-item ">
                                    <Link to="/itnews" className="nav-link active">
                                        <i className="fa fa-fw fa-newspaper"></i> IT Yangiliklari
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/prolangs" className="nav-link">
                                        <i className="fa fa-fw fa-code"  ></i>    Dasturlash tillari
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/itnews" className="nav-link">
                                        <i className="fa fa-fw fa-list"></i>    Algoritmlar
                                    </Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to="/itnews" className="nav-link">
                                        <i className="fa fa-fw fa-database"></i>    Resurslar
                                    </Link>
                                </li>
                                <li className='nav-item dropdown p-0' >
                                    <span className='dropdown-toggle nav-link' data-toggle='dropdown'>
                                        <i className='fa fa-fw fa-search'></i> Izlash
                                    </span>
                                    <div className='dropdown-menu searchBar'>
                                        <Animated animationIn='slideInDown' animationOut='slideOut' isVisible={true}>
                                            <form className='p-2'>
                                                <div className='input-group'>
                                                    <input type='search' placeholder='Saytdan izlash' className='form-control'/>
                                                    <span className='input-group-btn'>
                                                        <button className='btn btn-dark text-white'> <i className='fa fa-search'></i> </button>
                                                    </span>
                                                </div>
                                            </form>
                                        </Animated>
                                    </div>
                                </li>
                            </ul>
                            { this.state.loggedIn ? this.userComponent() : this.authComponents() }
                        </div>
                    </div>
                    <a id="scrollTop" href="#top" class="backToTop"><i class="fa fa-arrow-up"></i></a>
            </nav>
            <Logout />
        </div>
       
       );
   }

}

export default Navbar;