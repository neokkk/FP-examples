import _each from './each';
import _rest from './rest';

export default function _reduce<T>(list: T[], func: (T, Q) => any, memo?: T) {
    if (arguments.length === 2) {
        memo = list[0];
        list = _rest(list, 1);
    }

    _each(list, item => (memo = func(memo, item)));

    return memo;
}

const sampleArr = [1, 2, 3, 4];

console.log(
    _reduce(sampleArr, (a, b) => a + b)
);