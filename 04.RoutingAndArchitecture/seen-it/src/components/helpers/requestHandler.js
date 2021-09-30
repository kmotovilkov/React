const appId = '';
const appSecret = '';
const hostUrl = '';


let requestHandler = {
    login: (payload) => {
        return fetch(`${hostUrl}/user/${appId}/login`, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(`${appId}:${appSecret}`),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res => {
            return res.json()
        });
    },
    register: (payload) => {
        return fetch(`https://baas.kinvey.com/user/${appId}`, {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa(`${appId}:${appSecret}`),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res => {
            return res.json()
        });
    },
    pushPosts: () => {
        return fetch(`${hostUrl}/appdata/${appId}/posts?query={}&sort={"_kmd.ect": -1}`, {
            method: 'GET',
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('token')
            }
        }).then(res => {
            return res.json()
        });
    },
    createPost: (payload) => {
        return fetch(`${hostUrl}/appdata/${appId}/posts`, {
            method: 'POST',
            headers: {
                'Authorization': 'Kinvey ' + localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(res => {
            return res.json()
        });
    }
}

export default requestHandler;