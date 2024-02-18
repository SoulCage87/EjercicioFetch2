fetch("https://api.escuelajs.co/api/v1/categories")
.then(response => response.json())
.then(data => {
let thead =  '<tr><th scope="col">Name</th><th scope="col">Image</th></tr>'
for(let usuario of data){
thead += `<tr><td>${usuario.name}</td>
<td><img src="${usuario.image}" alt="data"></td></tr>`
console.log(usuario.image)
}

document.getElementById("tabla").innerHTML = thead
});