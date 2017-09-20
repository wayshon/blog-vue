module.exports = {
    getTagList(ctx, param) {
        ctx.dispatch('resource', {
            url: `/${param.article_id}/comment`,
            method: 'GET',
            headers: {
                'X-Current-Page': param.page || 1,
                'X-Page-Size': param.size || 0
            },
            onSuccess: (body, headers) => {
                param.onsuccess ? param.onsuccess(body, headers) : null
            }
        })
    }
}