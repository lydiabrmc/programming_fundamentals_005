function size(object) {
    let count = 0;
    for (let key in object) {
        count++;
    }
    return count;
}

function min(object) {
    return Math.min(...Object.values(object));
}

function max(object) {
    return Math.max(...Object.values(object));
}

function clone(object) {
    const newObject = Object.assign({}, object);
    return newObject;
}

function get(object, key) {
    for (let k in object) {
        let keyProp = k;
        let value = object[k];
        if (keyProp === key) {
            return value;
        }
    }
    return undefined;
}

function has(object, key) {
    for (let k in object) {
        let keyProp = k;
        if (keyProp === key) {
            return true;
        }
    }
    return false;
}


function sum(object) {
    let totalSum = 0;
    for (let key in object) {
        let value = object[key];
        if (Number.isInteger(value)) {
            totalSum += value;
        }
    }
    return totalSum;
}

function invert(object) {
    const ret = {};
    Object.keys(object).forEach(key => {
        ret[object[key]] = key;
    });
    return ret;
}

function addAll(arr) {
    const newObj = {};
    arr.forEach(function (obj) {
        for (let key in obj) {
            const value = obj[key];
            newObj[key] = value;
        }
    });
    return newObj;
}

function find(obj, matcherFunc) {
    let found = null;
    for (let key in obj) {
        let val = obj[key];
        if (matcherFunc(val) === true) {
            found = val;
        }
    }
    return found;
}

function every(obj, func) {
    let match = false;
    for (let key in obj) {
        let val = obj[key];
        if (func(val)) {
            match = true;
        } else {
            match = false;
            return match;
        }
    }
    return match;
}

function some(obj, func) {
    let match = false;
    for (let key in obj) {
        let val = obj[key];
        if (func(val)) {
            match = true;
            return match;
        }
    }
    return match;
}

function setUpGlobalObject() {
    Object.size = size;
    Object.min = min;
    Object.max = max;
    Object.clone = clone;
    Object.get = get;
    Object.has = has;
    Object.sum = sum;
    Object.invert = invert;
    Object.addAll = addAll;
    Object.find = find;
    Object.every = every;
    Object.some = some;
}

module.exports = setUpGlobalObject;