let api_url="https://jsonplaceholder.typicode.com/users";

async  function getdata(url){
    const x= await fetch(url);
    const y= await x.json();

    console.log(y);

    if(x){
    hideholder();
    }

    show(y);
    
}

getdata(api_url);


function hideholder(){
    document.getElementById('Loading').style.display='none'
}

function show(y){
    
        let tab=`<tr>
        <th>Name</th><th>User</th><th>Email</th><th>Street</th><th>Suite</th><th>City</th><th>Company Name</th>
        <th>CatchPhrase</th>
        </tr> `;

        for(let a of y){
        tab+=`<tr>
        <td>${a.name}</td>
        <td>${a.username}</td>
        <td>${a.email}</td>
        <td>${a.address.street}</td>
        <td>${a.address.suite}</td>
        <td>${a.address.city}</td>
        <td>${a.company.name}</td>
        <td>${a.company.catchPhrase}</td>
        </tr> `;
        }
        document.getElementById("employees").innerHTML=tab;
    
}