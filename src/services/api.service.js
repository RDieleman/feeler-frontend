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

export const getUser = (id) =>{
    return get('user/'+id)
}

export const getRecommendations = (mood, userId) => {
    return get('recommendation/' + mood + '/' + userId)
}


