function getlastDay() {
    // 获取当前日期 字符串  格式：'2021-01-09'
    let date = new Date()
    let year = date.getFullYear()
    let month = parseInt(date.getMonth() + 1)
    let day = date.getDate()
    if (month < 10) month = '0' + month
    if (day < 10) day = '0' + day
    // 获取当前时间
    let nowTime = year + '-' + month + '-' + day
    // 获取日期最后一天
    let getDay = new Date(year, month, 0)

    return `${year}-${month}-${getDay.getDate()}`
}


// 数据差异管理
let a1 = new Set([1, 3, 5, 7, 9])
let a2 = new Set([1, 2, 3, 4, 5])

let bj = new Set([...a1, ...a2])
// 
console.log('并集', bj)

let jj = new Set([...a1].filter(function (value) {
    // console.log(a2.has(value))
    return a2.has(value)
}))
// 交集
console.log('交集', jj)


let cj1 = new Set([...a1].filter(function (value) {
    return !a2.has(value)
}))
let cj2 = new Set([...a2].filter(function (value) {
    return !a1.has(value)
}))
console.log('差集', [...cj1, ...cj2])