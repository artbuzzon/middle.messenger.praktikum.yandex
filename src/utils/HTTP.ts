
interface urlOptions {
    [key: string]: any
}

type OptionsWithoutMethod = Omit<ApiOptions, 'method'>;

interface ApiOptions {
    method: string;
    data?: any;
    timeout?: number;
}

enum METHODS {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

const BASE_URL = 'https://ya-praktikum.tech/api/v2'

function queryStringify(data: urlOptions = {}) {
    let str = '?';
    for (let key in data) {
        if (data.hasOwnProperty(key))
            str += `${key}=${data[key]}&`;
    }
    return str.slice(0, str.length - 1);
}

export class HTTP {
    slug: string;


    constructor(slug: string) {
        this.slug = slug
    }

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
            xhr.open(method, BASE_URL+ this.slug + url);

            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.withCredentials = true;

            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
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
