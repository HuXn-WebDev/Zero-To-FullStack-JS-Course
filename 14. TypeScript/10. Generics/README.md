# Generics

In TypeScript, generics allow you to create reusable components that can work with a variety of types. Generics make it possible for you to define functions, classes, and interfaces that can work with different data types without having to duplicate code.

Here's an example of how to define a generic function in TypeScript:

```ts
function reverse<T>(items: T[]): T[] {
  const reversed = [];
  for (let i = items.length - 1; i >= 0; i--) {
    reversed.push(items[i]);
  }
  return reversed;
}
```

In this example, reverse is a generic function that takes an array of type T and returns a new array of the same type T. The <T> syntax in the definition of reverse indicates that T is a generic type parameter. When you call the reverse function, you specify the actual type that T should represent.

For example, if you wanted to reverse an array of strings, you would call reverse like this:

```ts
const names = ["Alice", "Bob", "Charlie"];
const reversedNames = reverse<string>(names);
```

In this case, string is the actual type that T represents, so the reverse function returns an array of strings.

Generics can also be used with classes and interfaces in TypeScript. For example, here's how you could define a generic interface for a key-value store:

```ts
interface KeyValueStore<K, V> {
  get(key: K): V | undefined;
  set(key: K, value: V): void;
}
```

In this example, KeyValueStore is a generic interface that has two type parameters K and V. These type parameters are used to define the types of the keys and values in the key-value store. The methods get and set are defined to get and set values in the store.

Generics make it possible for you to write code that is more flexible and reusable, since it can work with a wide variety of data types.
