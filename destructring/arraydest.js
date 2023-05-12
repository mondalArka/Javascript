// let arr=["Arka" ,2,"Webskitters"];

// let [Name ,id,company]=arr;

// let txt=`My name is ${Name}, my id is ${id} and my company is ${company}`;

// console.log(txt);

//document.getElementById("demo").innerHTML=txt;

// function user(Search,no,Company){
//     console.log(Search);
//     console.log(no);
//     console.log(Company);
// }
// user("Yahoo",4,"Webskitters")

let x=["Arka",23,"Kolkata",["Football","Bridge"]];

let[Name,age,city,[hobby1,hobby2]]=x;
let [Name1,age1,...args]=x;

// console.log(Name);
// console.log(age=35);
console.log(hobby2);
console.log(args);
// console.log(inside);

// function user([Name,age,city,[outside,inside]]){
//     console.log(Name);
// console.log(age=34);
// console.log(outside);
// console.log(inside);
// }

// user(["Arka",23,"Kolkata",["Football","Bridge"]]);

// function user1(){
//     return ["Arka",23,"Kolkata",["Football","Bridge"]]
// }

// let s=user1();
// console.log(s);
