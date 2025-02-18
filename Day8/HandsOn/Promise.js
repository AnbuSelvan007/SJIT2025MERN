/*
function promiseeg(val)
{
    return new Promise((resolve,reject)=>{
        if(val)
        resolve(" the promise is resolved")
        else    
       reject("the promise is rejected");
    });
}

promiseeg().then((res)=>console.log(res)).catch((err)=>console.log(err));


//location finder

function locationfinder(location,time){

    var Location=new Promise((locfound,locnotfound)=>{
       
        setTimeout(() => {  
            
        if(islocfound(location,time))
            locfound("location found")
        else
            locnotfound("location not found");

        }, time);
    })
    Location.then((res)=>console.log(res)).catch((err)=>console.log(err))
   
}

const islocfound=(loc,time)=>{
    var location="chennai";
    let t=1000;

    if( loc==location && t<=time )
        return true;
    return false;
}

locationfinder("chennai",1000)
*/

//Instagram(post,share,like,comment)

async function postfun(){
    var post =new Promise((postdone,postfail) => {
        setTimeout(() => {
            postdone("posted successfully")
        },2000);
    })

    //important line below 
    // console.log(await post) 
    // console.log(await likefun())
    // console.log(await sharefun())
    // console.log(await commentfun())

    const[post1,like,share,comment]=await Promise.all([post,likefun(),sharefun(),commentfun()]);
 
    console.log(post1)
    console.log(like)
    console.log(share)
    console.log(comment)
    
 
   
}
async function likefun(){
    var like =new Promise((likedone,likefail) => {
        setTimeout(() => {
            likedone("liked successfully")
        },2000);
    })
    return like;
   
}
async function commentfun(){
    var comment =new Promise((commentdone,commentfail) => {
        setTimeout(() => {
            commentdone("commentted successfully")
        },2000);
    })
   return comment;
}
async function sharefun(){
    var share =new Promise((sharedone,sharefail) => {
        setTimeout(() => {
            sharedone("shared successfully")
        },2000);
    })
    return share;
   
}


postfun()