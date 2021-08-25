export function Reduce(array, reducer, initialValue) {
  // TODO: write your code here

  //takes the initial value, then adds the array to it, one item at a time.
  //can take in strings or numbers, depending on the context of the reducer variable.
  initialValue += array.reduce(reducer)

  return initialValue;
}
