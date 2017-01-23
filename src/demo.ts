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