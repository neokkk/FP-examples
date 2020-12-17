export default function _each(list, func) {
    for (let i = 0; i < list.length; i++) {
        func(list[i]);
    }

    return list;
}