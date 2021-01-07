import React,{ Component } from 'react';
import  'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

class Load extends Component {
    render() {
        return (
            <div className="bg-info container-fluid loader">
                <div className="container justify-content-center d-flex">
                    <Loader type="Watch" color="white" height="100" width="100"/>
                </div>
                <div className="container justify-content-center d-flex">
                    <h4 align="center" className="text-white custom mt-5">
                        Iltimos kutib turing...
                    </h4>
                </div>
            </div>
        );
    }
}
export default Load;