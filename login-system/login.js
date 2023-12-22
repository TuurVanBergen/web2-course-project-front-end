async function formSubmitted(event) {
    event.preventDefault();

    const loginData = {
        email: document.getElementById('exampleInputEmail1').value,
        password: document.getElementById('exampleInputPassword1').value
    }

    let result = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(loginData)
      });

    result = await result.json();

    sessionStorage.setItem('uuid', result.uuid);
    console.log(result);
}

document.getElementById('loginform').addEventListener('submit', formSubmitted);