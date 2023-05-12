let x="https://jsonplaceholder.typicode.com/posts";

async function get_post(url){
    const response=await fetch(url);
    const datas=await response.json();

    console.log(datas);

    if(response)
    hideholder();

    show_post(datas)
}
get_post(x);

let hideholder=()=>{
    document.getElementById("loading").style.display="none";
}

let show_post=(datas)=>{
    document.getElementById("demo1").innerHTML="All User Posts"

    let tab=`<tr>
    <th>Id</th><th>Title</th><th>Body</th>
    </tr>`

    for(let a of datas){
        tab+=`<tr>
        <td>${a.id}</td>
        <td>${a.title}</td>
        <td>${a.body}</td> 
        </tr>`
    }

    document.getElementById("demo2").innerHTML=tab;
}

