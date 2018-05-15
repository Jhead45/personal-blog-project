import * as baseService from './base';

let loggedIn = false;

// function isLoggedIn() {
//     console.log(loggedIn);
//     return loggedIn;
// }

function isLoggedIn() {
    if (localStorage.getItem('authtoken')) {
        baseService.populateAuthToken();
        loggedIn = true;
    }
    return loggedIn;
}

function checkLogin() {
    if (loggedIn) {
        return Promise.resolve(true);
    } else {
        baseService.populateAuthToken();
        return me()
        .then((user) => {
            loggedIn = true;
            return Promise.resolve(true);
        }).catch(() => {
            return Promise.resolve(false);
        });
    }
}

function checkUser() {
    return me()
    .then((author) => {
        return author.id;
    }).catch((err) => {
        console.log(err);
    });
}

function checkName() {
    return me()
    .then((author) => {
        return author.name;
    }).catch((err) => {
        console.log(err);
    });
}


function getAuthor(id) {
    console.log(id);
    return baseService.get(`/api/auth/${id}`);
}

function login(email, password) {
    return baseService.makeFetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then((response) => {
        if (response.ok) {
            return response.json()
            .then((jsonResponse) => {
                baseService.setAuthToken(jsonResponse.token);
                loggedIn = true;
            });
        } else if (response.status === 401) {
            return response.json()
            .then((jsonResponse) => {
                throw jsonResponse;
            });
        }
    });
}

function logout() {
    baseService.clearAuthToken();
    loggedIn = false;
}

function me() {
    return baseService.get('/api/users/me');
}

function signup(name, email, password) {
    return baseService.makeFetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then((result) => {
        console.log(result);
    }).catch((err) => {
        console.log(err);
    })
}

export { isLoggedIn, checkLogin, checkUser, login, logout, signup, getAuthor, checkName };
