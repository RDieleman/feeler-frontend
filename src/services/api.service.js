import {BackendAPI} from "../http-common";

const get = (endpoint) => {
    return BackendAPI.get(`${endpoint}`, {
        method: "GET",
        mode: 'cors',
        headers: {
            'Content-type': 'application/json',
        },
    }).then((response) => {
        return response;
    }).catch(e =>{
        console.log(e);
    });
};

export const getAvailableMoods = () =>{
    return get('moods')
}


