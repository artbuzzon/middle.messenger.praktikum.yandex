//TODO fix this file

enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

function queryStringify(data: urlOptions = {}) {
    let str = '?';
    for (let key in data) {
        if (data.hasOwnProperty(key))
            str += `${key}=${data[key]}&`;
    }
    return str.slice(0, str.length - 1);
}

class HTTPTransport {
    get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        if (options.data) {
            url += queryStringify(options.data)
        }

        return this.request(url, {...options, method: METHODS.GET});
    };

    post = (url: string, options: OptionsWithoutMethod = {}) => {
        return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };

    put = (url: string, options: OptionsWithoutMethod = {}) => {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    delete = (url: string, options: OptionsWithoutMethod = {}) => {
        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    request(url: string, options: ApiOptions = {method: METHODS.GET}, timeout = 1500): Promise<XMLHttpRequest> {
        const {method, data} = options;

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(method, url);

            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.timeout = timeout;

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;

            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(data);
            }
        });
    };
}
