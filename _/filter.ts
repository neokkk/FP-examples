import _each from './each';

export default function _filter<T>(list: T[], func: (T) => boolean): T[] {
    const newList = [];

    _each(list, item => func(item) && newList.push(item));

    return newList;
}