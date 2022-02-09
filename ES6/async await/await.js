async function async1() {
    console.log('async1 start')
    await async2()
    console.log('async1 end')
   }
   async function async2() {
       console.log('async2 start');
       setTimeout(() => {         
           console.log('async2')
       },0);
   }
   async1()
   console.log('script start')