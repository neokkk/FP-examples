import _reduce from './reduce';

export default function _pipe(...fns) {
    return arg => _reduce(fns, (a, fn) => fn(a), arg);
}