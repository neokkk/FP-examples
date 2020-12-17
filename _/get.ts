import _curryr from './curryr';

function _get(obj, key) {
    return (obj === null || obj === undefined) ? undefined : obj[key];
}

export default _curryr((obj, key) => _get(obj, key));