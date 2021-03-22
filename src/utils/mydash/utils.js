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

const getSum = (list) => {
  return list.reduce((acc, item) => item + acc);
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
