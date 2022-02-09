// function timeoutPromise(message, interval) {
//     return new Promise((resolve, reject) => {
//         if (message === '' || typeof message !== 'string') {
//             reject('Message is empty or not a string');
//         } else if (interval < 0 || typeof interval !== 'number') {
//             reject('Interval is negative or not a number');
//         } else {
//             setTimeout(function () {
//                 resolve(message);
//             }, interval);
//         }
//     });
// };

// timeoutPromise('Hello there!', 1000)
//     .then(message => {
//         console.log(message);
//     })
//     .catch(e => {
//         console.log('Error: ' + e);
//     });


// --------------------------------------------------------------------------------------------------
const first = () => (new Promise((resolve, reject) => {
    console.log(3);
    let p = new Promise((resolve, reject) => {
        console.log(7);
        setTimeout(() => {
            console.log(5);
            resolve(6);
        }, 0)
        resolve(1);
    });
    resolve(2);
    p.then((arg) => {
        console.log(arg);
    });

}));

first().then((arg) => {
    console.log(arg);
});
console.log(4);
// 3,7,4,1,2,5

// --------------------------------------------------------------------------------------------------------红绿灯循环输出
function red() {
    console.log('red');
}

function green() {
    console.log('green');
}

function yellow() {
    console.log('yellow');
}


let myLight = (timer, cb) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            cb();
            resolve();
        }, timer);
    });
};

let myStep = () => {
    Promise.resolve().then(() => {
        return myLight(3000, red);
    }).then(() => {
        return myLight(2000, green);
    }).then(() => {
        return myLight(1000, yellow);
    }).then(() => {
        myStep();
    })
};
myStep();
// 最终实现 每三秒输出红绿黄
