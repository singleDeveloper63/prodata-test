import React, { Component } from 'react';
import Navabar from '../../../Components/Navbar/navbar';
import Footer from '../../../Components/Footer/footer';
import '../css/homepage.css';
import 'animate.css';
import WOW from 'wowjs';
import Load from '../../../Components/Loader/loader';
import { getAccessFromGoogle, getAccessFromBackend  } from '../../../Services/authServices/googleAuthServices';
class Homepage extends Component {

    constructor(props){
        super(props);
        this.state = {
            isStandart : true
        }
        this.isStandart = this.isStandart.bind(this);
    }

    componentDidMount(){
        const wow = new WOW.WOW();
        wow.init();
        let query = this.props.location.search;
        getAccessFromGoogle(query)
            .then ( res => {
                getAccessFromBackend(res)
                    .then( token => {
                        localStorage.setItem('prodata_user',`Bearer ${token}`);
                    })
            })
            .catch( error => console.log(error));
    }

    isStandart(){
        return(
            <div className='pt-5'>
                <Navabar />
                <div className='d-flex flex-wrap justify-content-around landing py-5'>
                    <h1 className='pt-5 mt-5'>Assalomu aleykum ! Saytimizga xush kelibsiz !<br/> Siz , biz bilan birgalikda :</h1>
                    <ul>
                        <li className='wow fadeIn' data-wow-delay='0s'> Yuqori talabdagi dasturlash tillarini...</li> 
                        <li className='wow fadeIn' data-wow-delay='0.05s'> Real hayotda loyihalarda duch kelishingiz mumkin bo'lgan dasturlar algoritmlarini ko'rib chiqasiz...</li>
                        <li className='wow fadeIn' data-wow-delay='0.1s'> Masalalarni yakka tartibda yechish va individual yondashish ko'nikmalariga ega bo'lasiz </li>
                        <li className='wow fadeIn' data-wow-delay='0.15s'> Axborot texnologiyalari olamidagi e'ng so'nggi yangiliklar bilan tanishasiz</li>
                        <li className='wow fadeIn' data-wow-delay='0.2s'> Bundan tashqari ko'p boshqa foydali va qiziqarli ma'lumotlar va bilimlarga e'ga bo'lasiz.. </li>
                    </ul>
                </div>
                <div className='p-0'>
                    <div className='row px-md-5 px-sm-0'>
                        <div className='col-sm-12 col-md-12 col-lg-8 pb-5 px-xl-1 h-100   px-xl-1'>
                            <h1 className='header text-dark text-center mt-5'> Qaysi dasturlash tillari o'rgatiladi ?  </h1>
                            <div className='card mx-auto   d-block wow fadeIn mt-5 mx-xl-0'>
                                <div className='row no-gutters'>
                                    <div className='col-sm-12 col-md-12 col-lg-4'>
                                        <img src={require('../../../Assets/sources/htmlcss.jpg')} className='card-img' style={{height : '100%'}}/>
                                    </div>
                                    <div className='col-sm-12 col-md-12 col-lg-8'>
                                        <div className='card-body'>
                                            <h1 className='card-title info-header'>
                                                HTML va CSS asoslari
                                            </h1>
                                            <p className='info-text'>
                                                Barcha veb saytlarning asosiy "G'ishti va Bo'yoqlari" hisoblanuvchi HTML va CSS nima o'zi ? Bular orqali qanday narsalar
                                                yaratish mumkun ? Shunchaki HTML va CSS ni bilgan holda ishga joylashish mumkinmi? HTML va CSS ni qanday o'rganish kerak ?
                                                Shular haqida bilishni istasangiz bizning "HTML va CSS asoslari" kursimizga yoziling .
                                            </p>
                                            <button className='btn btn-success float-right mb-4 mr-4'>Bepul yozilish <i className="fa fa-check"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card mx-auto d-block wow fadeIn mt-5   mx-xl-0'>
                                <div className='row no-gutters'>
                                    <div className='col-sm-12 col-md-12 col-lg-4'>
                                        <img src={require('../../../Assets/sources/pbasic.webp')} className='card-img' style={{height : '100%'}}/>
                                    </div>
                                    <div className='col-sm-12 col-md-12 col-lg-8'>
                                        <div className='card-body'>
                                            <h1 className='card-title info-header'>
                                            Python asoslari
                                            </h1>
                                            <p className='info-text'>
                                                Python dasturlash tili hozirda TOP5 da birinchilikni qo'ldan bermay kelmoqda. Python asosan sun'iy ong tili sifatida qaralgani
                                                bilan undan barcha joyda foydalanilmoqda. Shu jumladan veb dasturalshda ham. Python dasturlash tilini o'rganishni xohlasangiz
                                                bizning "Python asoslari" kursimizga yoziling.
                                            </p>
                                            <button className='btn btn-success float-right mb-4 mr-4'>Bepul yozilish <i className="fa fa-check"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card mx-auto d-block wow fadeIn mt-5   mx-xl-0'>
                                <div className='row no-gutters'>
                                    <div className='col-sm-12 col-md-12 col-lg-4'>
                                        <img src={require('../../../Assets/sources/python.jpg')} className='card-img' style={{height : '100%'}}/>
                                    </div>
                                    <div className='col-sm-12 col-md-12 col-lg-8'>
                                        <div className='card-body'>
                                            <h1 className='card-title info-header'>
                                                Python dasturlash tilida veb dasturlar backendini yozish .
                                            </h1>
                                            <p className='info-text'>
                                                Python dasturlash tili veb dasturlashda eng optimal variantlardan biri hisoblanadi.
                                                Django va flask ramkalari (framework) orqali veb saytlarning backend qismini oson
                                                va xavfsiz tarzda qurish mumkin. Va RESTful API lar uchun mo'ljallangan
                                                Django REST Framework orqali mijoz - server orasidagi muloqotning asosi bo'lmish
                                                API lar yozish amalga oshiriladi. ProData jamoasining Python kurslari orqali veb dasturlashning backend qismini
                                                o'rganing.
                                            </p>
                                            <button className='btn btn-success float-right mb-4 mr-4'>Bepul yozilish <i className="fa fa-check"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card mx-auto d-block wow fadeIn mt-5   mx-xl-0'>
                                <div className='row no-gutters'>
                                    <div className='col-sm-12 col-md-12 col-lg-4'>
                                        <img src={require('../../../Assets/sources/js.jpg')} className='card-img' style={{height : '100%'}}/>
                                    </div>
                                    <div className='col-sm-12 col-md-12 col-lg-8'>
                                        <div className='card-body'>
                                            <h1 className='card-title info-header'>
                                                JavaScript dasturlash tili asoslari
                                            </h1>
                                            <p className='info-text'>
                                                JavaScript dasturlash tili asosan front-end dasturlash tili deb e'tirof etilsa ham , aslida undan umumiy maqsaqlarda
                                                ishlatiladiga dasturlash tillari safida ham foydalanilsa bo'ladi. Sababi NodeJS muhiti orqali javascriptda
                                                qurilma operatsion tizimiga kirish imkonoyati poaydo bo'ldi. Shuningdek JavaScript orqali android, desktop va hatto arduino
                                                uchun ham kodlar yozilmoqda. Qiziqish paydo bo'ldimi ? Unda bizning "JavaScript asoslari" kursimiz aynan siz uchun !
                                            </p>
                                            <button className='btn btn-success float-right mb-4 mr-4'>Bepul yozilish <i className="fa fa-check"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card mx-auto d-block wow fadeIn mt-5   mx-xl-0'>
                                <div className='row no-gutters'>
                                    <div className='col-sm-12 col-md-12 col-lg-4'>
                                        <img src={require('../../../Assets/sources/mern.png')} className='card-img' style={{height : '100%'}}/>
                                    </div>
                                    <div className='col-sm-12 col-md-12 col-lg-8'>
                                        <div className='card-body'>
                                            <h1 className='card-title info-header'>
                                                MERN stek dasturlash
                                            </h1>
                                            <p className='info-text'>
                                                MERN stek bu - JavaScript dasturlash tili asosidagi full=stack dasturlash hisoblanib o'z ichiga
                                                malumotlar bazasi uchun MongoDB (M) , RESTful APIlar uchun ExpressJS ramkasi (E), foydalanuvchi interfeysi uchun
                                                ReactJS ramkasi (R), va asosiy muhit NodeJSni (N) oladi. MERN stek dasturlash yo'nalishi orqali siz full stek veb dasturlar yaratishingiz
                                                va Android dasturlar uchun ham servislar yaratish imkoniyatiga ega bo'lasiz. Demak kurslarimiz sizni kutmoqda.
                                            </p>
                                            <button className='btn btn-success float-right mb-4 mr-4'>Bepul yozilish <i className="fa fa-check"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-12 col-lg-4'>
                            <h2 className='text-center header mt-5 px-2'> Nima uchun dasturlashni o'rganish muhim ? </h2>
                            <div className='row'>
                                <div className='col-sm-12 col-md-4 col-lg-12 my-3'>
                                    <div className='card cardinf mt-2 shadow-lg m-sm-0 wow fadeIn h-100'>
                                        <img src={require('../../../Assets/sources/salary.png')} className='card-img-top'/>
                                        <h4 className='info-header card-title'> Yuqori maoshli kasb ! </h4>
                                        <div className='card-body'>
                                            <p className='info-text'>
                                                Dasturlash bugungi kunda va hatto kelajakda ham eng ko'p maosh to'lanadigan kasbdir . Sababi dasturchilarga talab
                                                axborot texnologiyalari tinimsiz rivojlanib va borgan sari hayotimizga kirib borayotgani uchun har doim ham yuqori bo'ladi.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-12 col-md-4 col-lg-12 my-3'>
                                    <div className='card cardinf mt-2 shadow-lg m-sm-0 wow fadeIn h-100'>
                                        <img src={require('../../../Assets/sources/logical.jpg')} className='card-img-top'/>
                                        <h4 className='info-header card-title'> Mantiqiy fikrlash qobiliyatini rivojlantirishi ! </h4>
                                        <div className='card-body'>
                                            <p className='info-text'>
                                                Dunyoga mashxur IT giganti Apple asoschilaridan biri Stiv Jobs aytganidek : " Dasturlashni hamma o'rganishi kerak .  Sababi u mantiqiy fikrlashni o'rgatadi . "
                                                Dasturlash jarayonida siz har xil muammolarga duch kelasiz va buni mustaqil yechish mobaynida sizning mantiqiy fikrlash 
                                                qobiliyatingiz borgan sari yuksalib boradi.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-sm-12 col-md-4 col-lg-12 my-3'>
                                    <div className='card cardinf mt-2 shadow-lg m-sm-0 wow fadeIn h-100'>
                                        <img src={require('../../../Assets/sources/proger.jpg')} className='card-img-top'/>
                                        <h4 className='info-header card-title'> Progressiv o'sish imkoniyatlari ! </h4>
                                        <div className='card-body'>
                                            <p className='info-text'>
                                                Dasturchilik kasbining eng yaxshi jihatlaridan biri bu ishda o'sish tez bo'lishidir. Ya'ni muntazam izlanishda bo'
                                                dasturchi albatta oldin junior keyin middle , senior va timlid darajalariga ko'tarila oladi.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='subscribe container-fluid mx-0 w-100 py-5 mt-4'>
                            <h1 className='header text-white text-center'> Yangiliklarimizga obuna bo'ling </h1>
                            <div className='container d-flex justify-content-center'>
                                    <input className='form-control form-control-lg rounded w-50 w-sm-75' type='email' placeholder='Elektron pochta...'/>
                                    <button className='btn btn-primary mx-2 btn-lg'>Yozilish</button>
                            </div>
                        </div>
                    <div className='py-3 advs'>
                        <h1 className='header text-center'> Bizning afzalliklarimiz </h1>
                        <div className='row px-5 adv pt-4 wow fadeIn d-flex justify-content-center'>
                            <div className='col-sm-6 col-lg-4 col-md-4 col-xl-4 my-2 p-3 wow fadeIn'>
                                <div className='card shadow-lg h-100 p-3'>
                                    <img src={require('../../../Assets/sources/free.png')} className='d-block mx-auto'/>
                                    <h2 className='info-header'> Mutlaqo bepul </h2>
                                    <p className='info-text'>
                                        Bizning barcha kurslarimiz mutlaqo bepuldir. Kurslarda qatnashish uchun sizdan faqatgina ro'yxatdan o'tish talab qilinadi.
                                    </p>
                                </div>
                            </div>
                            <div className='col-sm-6 col-lg-4 col-md-4 col-xl-4 my-2 p-3 wow fadeIn'>
                                <div className='card shadow-lg h-100 p-3'>
                                    <img src={require('../../../Assets/sources/inno.png')} className='d-block mx-auto'/>
                                    <h2 className='info-header'> Innovatsion yondashuv </h2>
                                    <p className='info-text'>
                                        Innovatsion yondashuv va innovatsion yechim ! Innovatsion fikr va innovatsion ta'lim !  Biz bilan kelajak kasbini e'gallang !
                                    </p>
                                </div>
                            </div>
                            <div className='col-sm-6 col-lg-4 col-md-4 col-xl-4 my-2 p-3 wow fadeIn'>
                                <div className='card shadow-lg h-100 p-3'>
                                    <img src={require('../../../Assets/sources/pro.png')} className='d-block mx-auto'/>
                                    <h3 className='info-header'>Premium akkaunt</h3>
                                    <p className='info-text'>
                                        Akkauntni premiumga o'tkazish talab qilinmaydi. Bizda har - bir foydalanuvchi premium akkauntga e'ga bo'ladi !
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
    render() {
        if(this.state.isStandart){
            return (
                <div>
                    { this.isStandart() }
                </div>
            )
        }else{
            return(
                <div>
                    <Load />
                </div>
            )
        }
    }
}

export default Homepage;