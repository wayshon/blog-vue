
const state = {
    user: {}
}

// mutations
const mutations = {
    setUser(state, payload) {
        state.user = {...payload}
    }
}

module.exports = {
    state,
    mutations
}