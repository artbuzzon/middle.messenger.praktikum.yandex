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

const REQUEST_TIME_LIMIT = 200;
const REQUEST_START_TIME = 0;
const BASE_URL = 'https://ya-praktikum.tech/api/v2';

function queryStringify(data: urlOptions = {}) {
    let str = '?';
    for (const key in data) {
        // eslint-disable-next-line no-prototype-builtins
        if (data.hasOwnProperty(key))
            str += `${key}=${data[key]}&`;
    }
    return str.slice(0, str.length - 1);
}

export class HTTP {
    slug: string;
    baseUrl: string;
    lastRequestCall: number;


    constructor(slug: string, baseUrl: string = BASE_URL) {
        this.slug = slug;
        this.baseUrl = baseUrl;
        this.lastRequestCall = REQUEST_START_TIME;
    }

    get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
        if (options.data) {
            url += queryStringify(options.data);
        }

        return this.request(url, {...options, method: METHODS.GET});
    }

    post = (url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> => {
        return this.request(url, {...options, method: METHODS.POST}, options.timeout);
    };

    put = (url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> => {
        return this.request(url, {...options, method: METHODS.PUT}, options.timeout);
    };

    delete = (url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> => {
        return this.request(url, {...options, method: METHODS.DELETE}, options.timeout);
    };

    request(url: string, options: ApiOptions = {method: METHODS.GET}, timeout = 1500): Promise<XMLHttpRequest> {
        const {method, data} = options;
        return new Promise((resolve, reject) => {

            //DOS prevention
            const now = Date.now();
            if (now - this.lastRequestCall < REQUEST_TIME_LIMIT) {
                reject('Too many requests');
            }
            this.lastRequestCall = now;

            const xhr = new XMLHttpRequest();
            xhr.open(method, this.baseUrl + this.slug + url);

            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.withCredentials = true;

            xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            xhr.timeout = timeout;

            xhr.onabort = reject;
            xhr.onerror = reject;
            xhr.ontimeout = reject;
            if (method === METHODS.GET || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    }
}
