
async function retrieve(){
    let a= await fetch("https://jsonplaceholder.typicode.com/users")

return await a.json()
}

let x=retrieve();
x.then(()=>{console.log("data fecthed")}).catch(()=>console.log("error"));
console.log("fectching");
