interface Options {
    [key: string]: any,
}

interface ApiOptions {
    method: string;
    data?: any;
    timeout?: number;
}

interface urlOptions {
    [key: string]: any
}

type OptionsWithoutMethod = Omit<ApiOptions, 'method'>;

interface ValidInputValues {
    [key: string]: RegExp,
}

interface RegistryEntry {
    [key: string]: any,
}

interface MetaData {
    tagName: string,
    props: Options
}

interface Listener {
    [key: string]: Function[]
}
