module.exports = {
    getTagList(ctx, param) {
        ctx.dispatch('xhr', {
            url: '/tag',
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