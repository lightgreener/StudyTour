// setTimeout expects a callback -- it does not use Promises
// task: wrap setTimeout in a Promise -- call it holdUp

const holdUp = (number) =>{
    return new Promise((resolve,reject) => {


        // setTimeout(()=>{
        //     // if (err) {
        //     //     return reject (err);
        //     // }
        //     // resolve("waiting for ");
        // }, number)
        // if (err) {
        //     return reject (err);
        // }
        // resolve("waiting for ");

        setTimeout(resolve,number;)

    })
}






// Make this code work:
holdUp(3000).then(() => {
  console.log('3 seconds has elapsed');
}).then(() => {
  console.log('Have a nice day');
});
