async function formSubmitted(event) {
    event.preventDefault();

    const loginData = {
        username: document.getElementById('inputUsername').value,
        email: document.getElementById('exampleInputEmail1').value,
        password: document.getElementById('InputPassword').value
    }

    let result = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(loginData)
      });

    result = await result.json();

    document.getElementById('result').innerHTML = result.error ?? result.message;
}

document.getElementById('registerform').addEventListener('submit', formSubmitted);