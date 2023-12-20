// sessionStorage.setItem('uuid', '123');
const uuid = sessionStorage.getItem('uuid');

if (!uuid) {
    window.location.href = "./login.html";
}

fetch('http://localhost:3000/verifyID', {
    method: "POST",
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify({ uuid: uuid })
}).then(response => response.json())
.then((result) => {
    if (!result.username) {
        window.location.href = "./login.html";
    }
    
    console.log('User is logged in!');
});