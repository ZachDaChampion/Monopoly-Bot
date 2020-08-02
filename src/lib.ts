export class RecyclingQueue<T> {
  private arr: Array<T>;

  constructor(arr: Array<T> = []) {
    this.arr = arr;
  }

  get top(): T {
    return this.arr[0];
  }

  get size(): number {
    return this.arr.length;
  }

  cycle(): T {
    const result = this.top;
    this.arr = [...this.arr.slice(1), this.top];
    return result;
  }

  remove(): T {
    const result = this.top;
    this.arr = this.arr.slice(1);
    return result;
  }

  add(el: T) {
    this.arr.push(el);
  }

  // fisher-yates shuffle | https://en.wikipedia.org/wiki/Fisher-Yates_shuffle
  shuffle() {
    for (let i = this.arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.arr[i], this.arr[j]] = [this.arr[j], this.arr[i]];
    }
  }
}

export class Stack<T> {
  private arr: Array<T>;

  constructor(arr: Array<T> = []) {
    this.arr = arr;
  }

  get top(): T {
    return this.arr[this.arr.length - 1];
  }

  get size(): number {
    return this.arr.length;
  }

  push(el: T) {
    this.arr.push(el);
  }

  pop(): T {
    return this.arr.pop();
  }
}
