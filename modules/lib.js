let myfunction= (...a)=>{
    let sum =0;
for(let x of a)
sum=sum+x;
return sum;
}
let a=99;

export{myfunction,a};

let func2=()=>{
    return "Welcome to Webskitters";
}
export default func2;
