console.log("hi");


let p={
    Name:"Arka",
    Surname:"Mondal",
    Roll:14
  }

  let {Name,Surname,Roll}=p;
  let x=`${Name} ${Surname} ${Roll}`;
  //console.log(x);
  document.getElementById("demo2").innerHTML=x;