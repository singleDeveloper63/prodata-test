import React, { Component } from 'react';
import './sidenav.css';
import $ from 'jquery';

class Sidenav extends Component{

    constructor(props){
        super(props);
        let options = this.props.options;
        this.state = { header : options.header, items : options.items, isSmallScreen : window.innerWidth > 991 ? false : true };
        this.sidenavToggle = this.sidenavToggle.bind(this);
        this.toggle = this.toggle.bind(this);
        this.hide = this.hide.bind(this);
    }

    sidenavToggle = () => {
        document.getElementById('sidenav').classList.remove('hide');
        document.getElementById('sidenav').classList.add('visible');
    }

    hide(){
        document.getElementById('sidenav').classList.add('hide');
        setTimeout(() => {
            document.getElementById('sidenav').classList.remove('visible');
        }, 500);
    }
    toggle(element){
        let parent = $(element.target).parent();;
        let list = $(parent).siblings();
        let len = list.length;
        for(let i=1; i<len;i++){
            list[i].children[0].classList.remove('active');
        }
    }

    render(){
        return(
           <div>
               <div className={"sidenav nav-tabs "} id="sidenav">
                    <ul className="nav-pills" role="tablist">
                        <li className="sidenav-header" key={ this.state.header.first_name}>
                            <button type="button" id="sidenav-toggle" className="sidenav-toggle"
                                onClick={ this.hide }>
                                <i className="fa fa-fw fa-times"></i>
                            </button>
                            <div className="sidenav-user">
                                <img src={ this.state.header.avatar } alt="Prodata-user" /><br/>
                                <h3 className="sidenav-userName">
                                    { this.state.header.first_name+"  "+this.state.header.last_name }
                                </h3>
                                { this.state.header.role.map( role => <span className="sidenav-userRoles"> {role} </span>) }
                            </div>
                        </li>
                        { this.state.items.map( item => (
                                <li  key={ item.text }>
                                    <a data-toggle="pill" onClick={ (event) =>  this.toggle(event) } className={"nav-link "+item.class} href={ item.url }> <i className={ "fa fa-fw fa-"+item.icon }></i> { item.text }</a>
                                </li>
                        )) }
                    </ul>
                </div>
                <button type="button" id="sidenav-toggle" className="sidenav-toggle animated wobble infinite fast"
                    onClick={ (event) => this.sidenavToggle(event) }>
                    <i className="fa fa-fw fa-chevron-right"></i>
                </button>
           </div>
        )
    }
}

export default Sidenav;