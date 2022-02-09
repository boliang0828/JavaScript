// var person = {
//     friends: ["a", "b", "c", "d"]
//   }

//   var body = Object.create(person)

  
//   new Promise((resolve,reject)=>{
//       body.friends.push("aaa")
//       resolve()
//   }).then(()=>{
//     console.log(body);
//     console.log(person);
//   })
function Father(name) {
    this.name = name
    this.hobby = ["篮球", "足球", "乒乓球"]
  }

  Father.prototype.getName = function () {
    console.log(this.name);
  }

  function Son(name, age) {
    Father.call(this, name)
    this.age = age
  }

  Son.prototype = new Father()
  Son.prototype.constructor = Son


  var s = new Son("ming", 20)

  console.log(s);
