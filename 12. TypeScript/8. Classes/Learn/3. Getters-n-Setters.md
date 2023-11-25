# Getters & Setters

In TypeScript, getters and setters are used to access and modify class properties. Getters and setters allow you to define a property in a class that looks like a simple variable from the outside but internally has additional logic for getting and setting the value.

Here's an example of how to define a getter and setter in TypeScript:

```ts
class MyClass {
  private _myProperty: number = 0;

  get myProperty(): number {
    return this._myProperty;
  }

  set myProperty(value: number) {
    if (value < 0) {
      throw new Error("Value cannot be negative");
    }
    this._myProperty = value;
  }
}
```

In this example, myProperty is defined as a private property with an initial value of 0. The get and set keywords are used to define the getter and setter methods respectively.

The get method is responsible for returning the value of \_myProperty, while the set method is responsible for validating the input value and setting the value of \_myProperty. In this case, we are checking to see if the input value is negative and throwing an error if it is.

To access the myProperty property from outside the class, you can simply use instance.myProperty, where instance is an instance of the MyClass class. When you access myProperty, the get method is called and returns the current value of \_myProperty. To set the value of myProperty, you can use instance.myProperty = newValue, where newValue is the new value you want to assign to the property. When you assign a value to myProperty, the set method is called with the new value as its input.
