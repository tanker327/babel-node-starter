
class User {
   showName(){
      return "Eric";
  }
}

let user  = new User ;

console.log(user.showName());


function *gen(){
  yield 1;
  yield 2;
  yield 3;
  yield 4; 

}

let obj = {
  [Symbol.iterator] (){
    return gen();
  }
}

for( let v of obj)
  console.log(v);

const GET_NAME = Symbol();

class Person{
    [GET_NAME](){
        return  "you make it! cool";
    }
}
let p = new Person();
console.log(p[GET_NAME]());
