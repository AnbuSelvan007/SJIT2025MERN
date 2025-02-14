const obj={
    name:'Anbu',
    age:19,
    dept:"CSE",
    batch:2022
}
for(let[val] of Object.entries(obj))
{
    console.log(obj[val]);
}