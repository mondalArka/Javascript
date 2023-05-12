let m=90 ;
var grade;
switch(true){
    case m>=35 && m<=50: 
    grade="C";
    console.log(grade);
    break;

    case m>=51 && m<=70: 
    grade="B";
    console.log(grade);
    break;

    case m>=71 && m<=90: 
    grade="A";
    console.log(grade);
    break;

    case m>=91 && m<=100: 
    grade="A+";
    console.log(grade);
    break;

    default :
        grade="F";
        console.log(grade);
      
}

       // document.getElementById("demo4").innerHTML=grade;

