import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

    render() {
        return (
             <div className={"container-fluid p-0 "+this.props.class}>
                 <div className="footer-content px-3 pt-5">
                     <div className="row p-0">
                        <div className='col-sm-12 col-md-12 col-lg-6'>
                            <div className='row'>
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <h2>Backend dasturchi :</h2><hr/>
                                    <img className="rounded-circle float-right avatar" src={require('../../Assets/Authors/johndoe.jpg')} alt="Azamat Jumabaev" width="100px" height="100px"/>
                                    <h4 className="author">Jamshid Yerzakov</h4>
                                    <p className="text-left">
                                        2001 - yil. Toshkent shahri. Ma'lumoti yuqori.
                                        Ushbu veb saytning back - end qismi yaratuvchisi. Veb sayt dasturchining birinchi haqiqiy loyihasidan hisoblanadi.
                                        <br/>
                                        Aloqa : <i className="fa fa-fw fa-envelope"></i> jamshidyerzakov@gmail.com
                                    </p>
                                </div>
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <h2> Front-end dasturchi : </h2><hr/>
                                    <img className="rounded-circle float-right avatar" src={require('../../Assets/Authors/Azamat.jpg')} alt="Azamat Jumabaev" width="100px" height="100px"/>
                                    <h4 className="author">Azamat Jumabaev</h4>
                                    <p className="text-left">
                                        2001 - yil. Qoraqalpog'iston Respublikasi. Ma'lumoti o'rta.
                                        Ushbu veb saytning front - end qismi yaratuvchisi. Veb sayt dasturchining birinchi haqiqiy loyihasidan hisoblanadi.
                                        <br/>
                                        Aloqa : <i className="fa fa-fw fa-envelope"></i> singledeveloper63@gmail.com
                                    </p>
                                </div>
                            </div>
                        </div>
                         <div className="col-sm-12 col-md-12 col-lg-6 py-0 px-2">
                             <h2 className='my-0 py-0'>Bizga yozing !</h2><hr/>
                            <form className='contact-form py-0 px-5'>
                                <input placeholder='Ism sharifingiz...' type='text' id='first_name' className='form-control  my-2'/>
                                <input placeholder='Elektron pochta ...' type='text' id='last_name' className='form-control my-2'/>
                                <textarea placeholder='Xabar matnini shu yerga yozing...' className='form-control' rows='5'></textarea><br/>
                                <button type='submit' className='btn btn-primary btn-block'> <i className='fa fa-paper-plane'></i> Yuborish</button>
                             </form>
                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-12 mt-5'>
                            <div className='socials d-flex justify-content-end'>
                                <a className='btn-social'><i className='fab fa-facebook-f'></i></a>
                                <a className='btn-social'><i className='fab fa-telegram-plane'></i></a>
                                <a className='btn-social' href='#'><i className='fab fa-instagram'></i></a>
                                <a className='btn-social' href='#'><i className='fab fa-github'></i></a>
                                <a className='btn-social' href='#'><i className='fab fa-twitter'></i></a>
                            </div>
                        </div>
                     </div>
                 </div>
                 <div className="footer-copyright mb-0 py-1">
                     <p className="text-center"> &copy; 2020 ProData team </p>
                 </div>
             </div>
        );
    }
}

export default Footer;