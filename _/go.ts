import _pipe from './pipe';

export default function _go(item, ...fns) {
    return _pipe.apply(null, fns)(item);
}