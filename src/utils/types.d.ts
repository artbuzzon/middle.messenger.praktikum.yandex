interface Options {
    [key: string]: any, //refactor
}

interface MetaData {
    tagName: string,
    props: Options
}

interface Listener {
    [key: string]: Function[]
}


