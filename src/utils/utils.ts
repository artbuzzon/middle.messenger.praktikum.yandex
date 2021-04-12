/*
* Some random stuff picked up during the course. Not used anywhere in the project right now.
* You may not want to review it.
* */

export function getUuid() {
    return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export function sum(...args) {
    if (args.length === 0) {
        throw Error('sum required at least 1 argument')
    }

    return args.reduce((result, current) => result + current, 0);
}

export const identity = (v) => {
    return v;
};

export const getLastInArray = (list) => {
    if (Array.isArray(list)) {
        const last = list[list.length - 1];
        if (last) {
            return last;
        } else {
            return;
        }
    } else {
        return;
    }
};

export const getFirstInArray = (list) => {
    if (Array.isArray(list)) {
        const last = list[0];
        if (last) {
            return last;
        } else {
            return;
        }
    } else {
        return;
    }
};

const range = (...args) => {

    let start = 0;
    let end = 0;
    let step = 1;
    let isRight = false;
    const list = [];
    if (typeof args[args.length - 1] === 'boolean') {
        isRight = args[args.length - 1];
    }
    if (args.length === (isRight ? 2 : 1)) {
        end = args[0];
        if (end === 0) {
            return list;
        }
    } else if (args.length === (isRight ? 3 : 2)) {
        start = args[0];
        end = args[1];
    } else if (args.length === (isRight ? 4 : 3)) {
        start = args[0];
        end = args[1];
        step = args[2] > 0 ? args[2] : args[2] * -1;
    }

    list[0] = start;

    const limit = end > 0 ? end - step : end + step;

    if (step === 0) {
        while (getSum(list) < limit - start) {
            list.push(start);
        }
        return list;
    }

    if (end > 0) {
        while (getLastInArray(list) < limit) {
            list.push(getLastInArray(list) + step);
        }
    } else {
        while (getLastInArray(list) > limit) {
            list.push(getLastInArray(list) - step);
        }
    }
    return isRight ? list.reverse() : list;
};


function rangeRight(...args) {
    return range(...args, true);
}
