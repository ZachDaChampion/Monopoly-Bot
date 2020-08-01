function moveToEnd<T>(arr: Array<T>): Array<T> {
  return [...arr.slice(1), arr[0]];
}

export { moveToEnd };
