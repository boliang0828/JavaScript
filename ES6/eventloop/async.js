// --------------------------------------------------------------------------------------------------
// async function async1() {
//   console.log('async1 start')
//   await async2()
//   console.log('async1 end')
//  }
//  async function async2() {
//   console.log('async2')
//  }
//  async1()
//  console.log('script start')

// 结果：
/* 
 async1 start
async2
script start
async1 end
 */
 
// --------------------------------------------------------------------------------------------------
async function timeout(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}

asyncPrint('hello world', 3000);