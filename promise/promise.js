
// let x=false;
// let prom = new Promise(function(resolve,reject){
// if(x)
// resolve("Successfull");
// else
// reject("Rejected");
// }
// );

// let fulfill=(a)=>{
//     document.getElementById("demo").innerHTML=a;
//     console.log(a);
// }
// let onreject=(b)=>{
//     document.getElementById("demo").innerHTML=b;
//     console.log(b);
// }

// prom.then(fulfill);
// prom.catch(onreject);


let prom1=(c,d)=>{
    var x=c/d;
    return new Promise(function(resolve,reject){
        document.getElementById("demo2").innerHTML="Fetching the data";
        setTimeout(function(){
            if(d!=0)
            resolve(`The answer is ${x}`)
          
            else
            reject("Failed to calculate")
        },3000)
       
    }
    )
}

let fulfillment=(result)=>{
    document.getElementById("demo1").innerHTML=result;
    console.log(result);
}

let rejected=(error)=>{
    document.getElementById("demo1").innerHTML=error;
    console.log(error);
}


prom1(4,7).then(fulfillment).catch(rejected);