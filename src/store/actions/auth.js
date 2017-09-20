module.exports = {
  regist(ctx, param){
    ctx.dispatch('xhr', {
      url: '/user',
      method:'POST',
      body: {
        user_name: param.user_name,
        password: param.password,
        nick_name: param.nick_name,
        email: param.email,
        mobile: param.mobile,
        avatar: param.avatar || ''
      },
      onSuccess: body => {
        param.onsuccess ? param.onsuccess(body) : null
      }
    })
  },
  login(ctx, param){
    ctx.dispatch('xhr', {
      url: '/login',
      method:'POST',
      body: {
        user_name: param.user_name,
        password: param.password
      },
      onSuccess: body => {
        ctx.dispatch('showtoast', {text: '登陆成功', type: 'success'});
        sessionStorage.setItem('jwt', body.data.Authorization)
        param.onsuccess ? param.onsuccess(body) : null
      }
    })
  }
}
