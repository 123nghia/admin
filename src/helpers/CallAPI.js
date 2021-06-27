import axios from 'axios'

export default async (BaseURL, URL, Method, Body) => {
    if(Body != null || Body != undefined){
        var res = await axios({
            baseURL: BaseURL,
            url: URL,
            method: Method,
            data: Body
        });    
    } else {
        var res = await axios({
            baseURL: BaseURL,
            url: URL,
            method: Method,
        });
    
    }
    
    return res;
}