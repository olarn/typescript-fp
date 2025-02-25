export class Queue<T> {
  private elements: T[] = [];

  add(element: T) {
    this.elements.push(element);
  }

  remove(): T {
    const element = this.elements[0];
    this.elements = [...this.elements.slice(1)];
    return element;
  }

  allElements(): T[] {
    return this.elements;
  }
}
