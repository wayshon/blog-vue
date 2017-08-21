class Tool {
    //不为空
    isNotBlank(val) {
        if (typeof(val) == "undefined" || val == null || val == "") {
            return false;
        }
        return true;
    }
    //为空
    isBlank(val) {
        if (typeof(val) == "undefined" || val == null || val == "")
            return true;
        return false;
    }
    //是空对象
    isEmptyObject(obj) {
        for (let key in obj) {
            return false
        };
        return true
    }
}

export default new Tool()