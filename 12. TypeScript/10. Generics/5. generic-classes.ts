// Generic class
class Box<T> {
  private content: T;

  constructor(initialContent: T) {
    this.content = initialContent;
  }

  getContent(): T {
    return this.content;
  }

  setContent(newContent: T): void {
    this.content = newContent;
  }
}

// Example usage
const stringBox = new Box<string>("Hello, TypeScript!");
console.log(stringBox.getContent()); // Outputs: Hello, TypeScript!
stringBox.setContent("New content");
console.log(stringBox.getContent()); // Outputs: New content

const numberBox = new Box<number>(42);
console.log(numberBox.getContent()); // Outputs: 42
numberBox.setContent(99);
console.log(numberBox.getContent()); // Outputs: 99
