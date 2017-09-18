let base = require('x-base64');

// let Authorization = localStorage.getItem('Authorization');

// let jwt = Authorization.split('.')[1];
// let decode = base.decode(jwt);
// let userId = JSON.parse(decode).user;

const state = {
    // user: {
    //     id: userId
    // }
}

// mutations
const mutations = {
    setUser(state, payload) {
        state.user = { ...payload }
    }
}

module.exports = {
    state,
    mutations
}