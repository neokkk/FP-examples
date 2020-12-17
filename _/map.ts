import _each from './each';

export default function _map<T>(list: T[], func: (T) => void): T[] {
    const newList = [];

    _each(list, item => newList.push(func(item)));

    return newList;
}