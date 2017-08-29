
const state = {
    user: {
        id: 666
    }
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