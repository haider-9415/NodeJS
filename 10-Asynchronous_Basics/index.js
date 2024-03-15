// console.log('start execution');
// setTimeout(() => {
//     console.log('logic execution');
// }, 2000)
// console.log('complete execution');


/* drawback */
a = 10
b = 20

let waitingData = new Promise((resolve, reject) => {
    setTimeout(() => {
        b = 100
        resolve(b)
    }, 2000);
})
waitingData.then((b) => {
    console.log("a + b = ",a+b);
})

