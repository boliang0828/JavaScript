var a = 10
function foo(){
    console.log(a)
}
function sum() {
    var a = 20
    foo()
}
sum()  // 10

var n = 10
function fn(){
    var n =20
    function f() {
       n++;
       console.log(n)
     }
    f()
    return f
}

var x = fn()
x()
x()


function act(){
    let res = 1;
    function bct(){
       return res
    }
    return bct
}
let val = act()
console.log(val());