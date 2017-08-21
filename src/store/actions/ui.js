module.exports = {
  showtoast(ctx, param){
    param = param ? param : {}
    ctx.commit('TOAST',
      {
        show: true,
        text: param.text || '操作成功',
        type: param.type || 'info'
      }
    )
  },
  showalert(ctx, param){
    ctx.commit('ALERT',
      {
        show: true,
        code: param.code || 0,
        title: param.title || '提示',
        content: param.content || ''
      }
    )
  }
}