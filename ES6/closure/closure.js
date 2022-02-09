
var scope = "global scope";
function checkscope(){
    let scope = "local scope";
    function f(){
        console.log(scope) ;
    }
    return f;
}

var foo = checkscope();
foo()
