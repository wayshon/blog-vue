module.exports = {
    setUser(ctx, param){
      ctx.commit('setUser', {...param})
    }
  }