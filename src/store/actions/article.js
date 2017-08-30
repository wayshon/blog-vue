module.exports = {
    articleList(ctx, param) {
        ctx.dispatch('xhr', {
            url: '/article',
            method: 'GET',
            onSuccess: body => {
                param.onsuccess ? param.onsuccess(body) : null
            }
        })
    },
    addArticle(ctx, param) {
        ctx.dispatch('xhr', {
            url: '/article',
            method: 'POST',
            body: {
                title: param.title,
                content: param.content,
                tags: param.tags || []
            },
            onSuccess: body => {
                param.onsuccess ? param.onsuccess(body) : null
            }
        })
    },
    articleDetail(ctx, param) {
        ctx.dispatch('xhr', {
          url: `/article/${param.id}`,
          method:'GET',
          onSuccess: body => {
            param.onsuccess ? param.onsuccess(body) : null
          }
        })
      },
}