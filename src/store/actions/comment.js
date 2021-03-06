module.exports = {
    addComment(ctx, param) {
        ctx.dispatch('xhr', {
            url: `/${param.article_id}/comment`,
            method: 'POST',
            body: {
                content: param.content
            },
            onSuccess: body => {
                param.onsuccess ? param.onsuccess(body) : null
            }
        })
    },
    removeComment(ctx, param) {
        ctx.dispatch('xhr', {
            url: `/${param.article_id}/comment/${id}`,
            method: 'DELETE',
            onSuccess: body => {
                ctx.dispatch('showtoast', { text: '删除成功', type: 'success' });
                param.onsuccess ? param.onsuccess(body) : null
            }
        })
    },
    getCommentList(ctx, param) {
        ctx.dispatch('xhr', {
            url: `/${param.article_id}/comment`,
            method: 'GET',
            headers: {
                'X-Current-Page': param.page || 1,
                'X-Page-Size': param.size || 10
            },
            onSuccess: (body, headers) => {
                param.onsuccess ? param.onsuccess(body, headers) : null
            }
        })
    }
}