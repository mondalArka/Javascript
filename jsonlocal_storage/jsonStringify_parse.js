let x={name:"Arka",age:31,car:"Buggati"};
let y=JSON.stringify(x);
console.log(y);
localStorage.setItem("testJson",y);

let txt=localStorage.getItem("testJson");
let obj=JSON.parse(txt);
document.getElementById("demo").innerHTML=obj.name+" "+obj.age+" "+obj.car
