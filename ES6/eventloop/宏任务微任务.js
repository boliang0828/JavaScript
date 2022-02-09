setTimeout(function(){
    console.log('1')
});
new Promise(function(resolve){
    console.log('2');
    resolve();
}).then(function(){
    console.log('3')
});
console.log('4');
new Promise(function(resolve){
    console.log('5');
    resolve();
}).then(function(){
    console.log('6')
});
setTimeout(function(){
    console.log('7')
});
function bar(){
    console.log('8')
    foo()
}
function foo(){
    console.log('9')
}
console.log('10')
bar()