class URLWorker {
    constructor() {
        this.url = new URL(window.location)
    }

    getParams() {
        const url = new URL(window.location)
        const paramsString = url.search
        const paramsObject = {}

        if (paramsString === '') return {}

        paramsString.replace('?', '').split('&').forEach(param => {
            const [ key, value ] = param.split('=')
            paramsObject[key] = value
        })

        return paramsObject
    }

    setParams(params) {
        const paramsString = '?' + Object.entries(params).map(([key, value]) => `${key}=${value}`).join('&')

        history.pushState(null, null, this.url.origin + this.url.pathname + paramsString + this.url.hash)
    }

    clearParams() {
        history.pushState({}, '', this.url.origin + this.url.pathname + this.url.hash)
    }
}

export default new URLWorker()