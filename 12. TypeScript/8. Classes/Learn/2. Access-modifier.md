# Access Modifiers

In TypeScript, you can use access modifiers to control the visibility of class members (properties and methods). Access modifiers determine the ways in which class members can be accessed from within and outside the class.

There are three types of access modifiers in TypeScript:

public: Members marked as public can be accessed from anywhere, both inside and outside the class.

private: Members marked as private can only be accessed from within the class they are defined in.

protected: Members marked as protected can be accessed from within the class they are defined in, as well as any subclasses that extend the class.

Here's an example:

```ts
class Animal {
  public name: string;
  private age: number;
  protected species: string;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }

  public getName(): string {
    return this.name;
  }

  private getAge(): number {
    return this.age;
  }

  protected getSpecies(): string {
    return this.species;
  }
}

class Dog extends Animal {
  constructor(name: string, age: number) {
    super(name, age, "Canine");
  }

  public getInfo(): string {
    return `${this.getName()} is a ${this.getSpecies()} and is ${
      this.age
    } years old.`;
  }
}
```

In this example, we define an Animal class with three properties: name, age, and species. We annotate these properties with different access modifiers (public, private, and protected) to control their visibility.

We also define three methods (getName, getAge, and getSpecies) that correspond to the three properties. Again, we annotate these methods with different access modifiers to control their visibility.

We then define a Dog class that extends the Animal class. Since species is marked as protected, it can be accessed from within the Dog class. We define a method (getInfo) that uses the getName and getSpecies methods to return a string with information about the dog.

Note that when you create an instance of the Dog class, you need to provide values for the name and age properties defined in the Animal class, but not for the species property since it's already defined in the Dog class constructor. Also note that the getAge method is marked as private, so it can only be called from within the Animal class and cannot be accessed from outside the class or its subclasses.
