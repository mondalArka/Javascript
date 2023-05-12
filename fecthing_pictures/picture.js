let x="https://jsonplaceholder.typicode.com/photos"

async function fetch_post(url){
var response= await fetch(url);
var datas= await response.json();

console.log(datas);

if(response){
holder_replace();
}
post_show(datas);

}

fetch_post(x);

function holder_replace(){
    document.getElementById("demo1").style.display="none";
}

function post_show(datas){
        document.getElementById("demo2").innerHTML="All Photo details"

            let tab=`<tr>
            <th>Id</th><th>Title</th><th>Url</th><th>Picture</th><th>Thumbnail url</th>
            </tr>`

            for(let a of datas){
            
                tab+=`<tr><td>${a.id}</td>
                <td>${a.title}</td>
                <td>${a.url}</td>
                <td><img src="${a.url}" height="60" width="90" ></td>
                <td><img src="${a.thumbnailUrl}" height="60" width="90"></td>
                </tr>`
            }
            document.getElementById("demo3").innerHTML=tab;

 }
