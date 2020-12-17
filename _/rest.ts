export default function _rest<T>(list: T[], num: number=1): T[] {
    return Array.prototype.slice.call(list, num);
}