queueMicrotask(() => {
    console.log("microtask queueMicrotask");
});

setTimeout(() => {
    console.log("macrotask setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("microtask promise");
})