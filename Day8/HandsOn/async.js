async function asAw(){
    let a=10;
    await setTimeout(() => {
        console.log("hello")
    }, 2000);
    console.log( a);
}

console.log(asAw().then());