module.exports = {
    addPraise(ctx, param) {
        ctx.dispatch('xhr', {
            url: `/${param.article_id}/praise`,
            method: 'POST',
            onSuccess: body => {
                param.onsuccess ? param.onsuccess(body) : null
            }
        })
    },
    removePraise(ctx, param) {
        ctx.dispatch('xhr', {
            url: `/${param.article_id}/praise`,
            method: 'DELETE',
            onSuccess: body => {
                param.onsuccess ? param.onsuccess(body) : null
            }
        })
    },
    getPraiseList(ctx, param) {
        ctx.dispatch('xhr', {
            url: `/${param.article_id}/praise`,
            method: 'GET',
            headers: {
                'X-Current-Page': param.page || 1,
                'X-Page-Size': param.size || 10
            },
            onSuccess: (body, headers) => {
                param.onsuccess ? param.onsuccess(body, headers) : null
            }
        })
    },
    getPraise(ctx, param) {
        ctx.dispatch('xhr', {
            url: `/${param.article_id}/praise`,
            method: 'GET',
            onSuccess: body => {
                param.onsuccess ? param.onsuccess(body) : null
            }
        })
    }
}