const getUuid = (): string => {
    return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

const isEqual = (lhs: string, rhs: string): boolean => {
    return lhs === rhs;
};

interface TagsToReplace {
    [name: string] : string
}

const sanitizeHTML = (str: string): string => {
    const tagsToReplace: TagsToReplace = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;'
    };
    return str.replace(/[&<>]/g, function(tag: string) {
        return tagsToReplace[tag] || tag;
    });
};

export {
    sanitizeHTML,
    getUuid,
    isEqual
};
