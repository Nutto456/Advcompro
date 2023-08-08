function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    })
}

async function run() {
    //Logic
    console.log("Start!!");
    // try take of await and compare
    await promiseTimeout(5000);
    console.log("Stop!!");
}

run();