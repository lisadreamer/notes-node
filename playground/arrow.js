var square = (x) => x*x
console.log(square(9));

var user = {
  name: 'lisa',
  sayHi() {
    console.log(arguments);
    console.log(`Hi. i'm ${this.name}`);
  }
}

user.sayHi(1,2,3);
