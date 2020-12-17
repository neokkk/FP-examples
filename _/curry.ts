export default function _curry(fn) {
    return (a, b) => arguments.length === 2 ? fn(a, b) : b => fn(a, b);
}