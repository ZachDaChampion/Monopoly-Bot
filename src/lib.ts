export class CardStack<T> {
  constructor(private stack: Array<T> = []) {}
  get topCard(): T {
    return this.stack[0];
  }
  moveToBottom(): CardStack<T> {
    return new CardStack([...this.stack.slice(1), this.topCard]);
  }
}

export function isString(s): s is string {
  return typeof s === "string";
}
