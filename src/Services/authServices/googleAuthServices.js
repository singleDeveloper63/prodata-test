import qs from 'query-string';
import axios from 'axios';
const URLS = {
    google : 'https://oauth2.googleapis.com/token?',
    backend : 'http://blog-tutorial-7657.herokuapp.com/auth/convert-token/'
}
export function getAccessFromGoogle(queryString){
    return new Promise( (resolve, reject) => {
        let query = qs.parse(queryString);
        if(query.code){
            let body = {
                'code' : query.code,
                'client_id' : '143442059824-8s6j34ir9l2u1arq963n8vi7uqdgcnvd.apps.googleusercontent.com',
                'client_secret' : 'EQ5A0cXAjWxsheD3KV0WEKK3',
                'redirect_uri' : 'https://prodata-test.herokuapp.com',
                'grant_type' : 'authorization_code'
            }

            axios.post(URLS.google, body)
                .then( (res) => resolve(res.data))
                .catch( (error) => reject(error));
        }else{
            reject('Standart homepage');
        }
    });
}


export function getAccessFromBackend (token){
    return new Promise( (resolve, reject ) => {
        let body = {
            'grant_type' : 'convert_token',
            'client_id' : 'Z4vYmTyOD6fhVSfHOkuKWl5Oo5Oz7iR6yXMWcV8b',
            'backend' : 'google-oauth2',
            'token' : token
        }
        axios.post(URLS.backend, body)
            .then( res => resolve(res.access_token))
            .catch( err => reject(err));
    });
}

