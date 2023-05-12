let a={
    fname:"Arka",
    lname:"Mondal",
    age:23,
    hobby:["Bridge","Football"],
    salary:function(){
        return 25000
    },
    living:{
        country:"India",
        state:"West Bengal"
    },
    fullname:function(){
        return this.fname+" "+this.lname
    }
}

for(let x in a)
console.log(a[x]);

console.log(a.living.country);
console.log(a.hobby[1]);
console.log(a.salary());
console.log(a.fullname());

let v="Student";

let obj={
    "type":v,
    course:"btech",
    [v+"Name"]:v,
    details(){
        return `${this.StudentName} Arka Mondal is a student of ${this.course}`
    }
}

console.log(obj);

// document.getElementById("demo1").innerHTML=obj.details();

