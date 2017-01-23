Lets create a simple TypeScript class with a property name and a method `log`, which logs `this.name` to the console.

Now if we create an instance of this class, and call the log method on the class you can see it works fine.

```ts
class Foo {
  name = 'Hello world';
  log() {
    console.log(this.name);    
  }
}

const foo = new Foo();
foo.log();
```

Because `this` is determined by *how you call a function* class methods that use `this` work fine as long as they are called on an instance of the class. 

If we go ahead and call the log method on its own without accessing it off of the class instance you can see that `this` will no longer be valid in the function.

We can fix this easily by converting the class method into a class property that uses an arrow function using the property initilizer syntax. 

```ts
class Foo {
  name = 'Hello world';
  log = () => {
    console.log(this.name);    
  }
}

const foo = new Foo();
foo.log();

const { log } = foo;
log();
```

The reason why it works is because arrow functions capture `this` from the lexical scope which in the case of a class property is always the class instance.