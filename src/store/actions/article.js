module.exports = {
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
    removeArticle(ctx, param) {
        ctx.dispatch('xhr', {
            url: `/article/${param.id}`,
            method: 'DELETE',
            onSuccess: body => {
                ctx.dispatch('showtoast', { text: '删除成功', type: 'success' });
                param.onsuccess ? param.onsuccess(body) : null
            }
        })
    },
    modifyArticle(ctx, param) {
        ctx.dispatch('xhr', {
            url: `/article/${param.id}`,
            method: 'PUT',
            body: {
                title: param.title,
                content: param.content
            },
            onSuccess: body => {
                ctx.dispatch('showtoast', { text: '修改成功', type: 'success' });
                param.onsuccess ? param.onsuccess(body) : null
            }
        })
    },
    getArticle(ctx, param) {
        ctx.dispatch('xhr', {
            url: `/article/${param.id}`,
            method: 'GET',
            onSuccess: body => {
                param.onsuccess ? param.onsuccess(body) : null
            }
        })
    },
    getArticleListByUserId(ctx, param) {
        ctx.dispatch('xhr', {
            url: `/${param.user_id}/article`,
            method: 'GET',
            headers: {
                'X-Current-Page': param.page || 1,
                'X-Page-Size': param.size || 10
            },
            params: {
                title: param.title || ''
            },
            onSuccess: (body, headers) => {
                param.onsuccess ? param.onsuccess(body, headers) : null
            }
        })
    },
    getArticleList(ctx, param) {
        ctx.dispatch('xhr', {
            url: '/article',
            method: 'GET',
            headers: {
                'X-Current-Page': param.page || 1,
                'X-Page-Size': param.size || 10
            },
            params: {
                title: param.title || ''
            },
            onSuccess: (body, headers) => {
                param.onsuccess ? param.onsuccess(body, headers) : null
            }
        })
    },
    getArticleListByTag(ctx, param) {
        ctx.dispatch('xhr', {
            url: '/article/search',
            method: 'POST',
            headers: {
                'X-Current-Page': param.page || 1,
                'X-Page-Size': param.size || 10
            },
            body: {
                tags: param.tags || []
            },
            onSuccess: (body, headers) => {
                param.onsuccess ? param.onsuccess(body, headers) : null
            }
        })
    }
}