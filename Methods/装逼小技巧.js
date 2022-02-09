// 打分技巧
var rate = 2
console.log("★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate));



// 快速知道所有元素
[].forEach.call($$("*"),function(a){
    a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)
})


// 清除缓存
{/* <a href="javascript:alert( 清除成功 );">清除缓存</a> */}


// 对象排序
var arr = [
    {name:'syy',age:0},
    {name:'wxy',age:18},
    {name:'slj',age:8},
    {name:'wj',age:20}
];
 
function compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;//升序,降序为value2 - value1
    }
}
var sort = arr.sort(compare('age'))
console.log(sort);