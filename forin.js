let arr={
    School:"G.D.Birla",
    Roll: 14,
    Name: "Arka",
    Marks: 65,
    salary: function(){
        return 25000;
    }
}
document.getElementById("demo7").innerHTML=arr.salary();

let txt="";
for(let x in arr){
    txt+=arr[x]+" ";
}
//document.getElementById("demo7").innerHTML=txt;

let s="My name is Arka";

for(let char in s){
    console.log(s[char]);
}