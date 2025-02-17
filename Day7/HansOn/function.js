const fun=()=>{
    console.log("arrow function");
    let a=50;
    a=40;
    console.log(a)
}

//scopping

let a=10;
fun();
console.log(a);

//spread
a1=[1,2,3]
b1=[4,5,6]
console.log(a1);
console.log([a1,b1]);
console.log([...a1,b1]);
console.log([a1,...b1]);
console.log([...a1,...b1]);

//rest

c1=[...a1,...b1]
function rest(...c1)
{
    console.log(c1);
}

rest(c1);

//destructuring
let [c,d]=c1.splice(2,1);
console.log(d);

//call back
function fn(callback)
{
    console.log('Normal function');
    callback();
}

function callbackfn()
{
    console.log("callback function")
}
fn(callbackfn)