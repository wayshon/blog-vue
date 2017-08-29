
const state = {
  AppParams: {
    session: ''
  },
  Interface: {
    toast: {
      show: false,
      text: '操作成功',
      type: 'info'
    },
    loading: {
      show: false
    },
    alert: {
      show: false,
      code: 0,
      title: '提示',
      content: ''
    }
  }
}

// mutations
const mutations = {
  TOAST(state, payload){
    state.Interface.toast = {...state.Interface.toast, ...payload}
  },
  LOADING(state, payload){
    state.Interface.loading.show = !!payload
  },
  ALERT(state, payload){
    state.Interface.alert = {...state.Interface.alert, ...payload}
  }
}

module.exports = {
  state,
  mutations
}