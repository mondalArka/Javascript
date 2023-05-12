let students =[
    {Name:"Arka",salary:5000},
    {Name:"Rohan",salary:7000}
]
document.getElementById("demo1").innerHTML="Students List";

function getStudent(){
    setTimeout(function(){
        let str="";
        students.forEach(function(student) {
            str+=`<li>${student.Name}</li>`
        });
        document.getElementById("demo2").innerHTML=str;
        console.log("Students are fetched");
        console.log(students);
    },1000);
}



let newStudent={Name:"Debjit",Salary:2000}

function enroll(newStudent,callback){
    setTimeout(function() {
        students.push(newStudent);
        callback();
    }, 3000);
    
    
}
enroll(newStudent,getStudent);