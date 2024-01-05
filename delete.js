async function deleteGallery(event) {
    event.preventDefault();
    //I used this documentation to make the delete route
    //https://www.geeksforgeeks.org/express-js-app-delete-function/
    //Read the data from the input fields, and put it in an object.
    const deleteGallery = {
        title: document.getElementById('deleteGallery').value,
    }

    //Sending a DELETE request to "http://localhost:3000/deleteGallery"
    let result = await fetch("https://brussel-in-beeld.onrender.com/deleteGallery", {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(deleteGallery)
      });

    result = await result.json();
     //use result.error, or user result.message
    document.getElementById('deleteResult').innerHTML = result.error ?? result.message;
}

//if the button with id "submitDelete" is clicked, then the function deleteGallery is called
document.getElementById('submitDelete').addEventListener('click', deleteGallery);

//de put route (update) documentatie
//https://expressjs.com/en/guide/routing.html
//https://stackoverflow.com/questions/33295856/how-to-do-update-operation-in-express-js
async function updateGallery(event) {
    event.preventDefault();

    //Read the data from the input fields, and put it in an object.
    const updateGallery = {
        title: document.getElementById('updateGallery').value,
        price:document.getElementById('price').value,
        artist:document.getElementById('artist').value,
        adres:document.getElementById('adres').value,
        url:document.getElementById('url').value,
        Iurl:document.getElementById('Iurl').value,
        Furl:document.getElementById('Furl').value
    }

    //Sending a put request to "http://localhost:3000/updateGallery"
    let result = await fetch("https://brussel-in-beeld.onrender.com/updateGallery", {
        method: "PUT",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(updateGallery)

      });

    result = await result.json();
     //use result.error, or user result.message
    document.getElementById('resultUpdate').innerHTML = result.error ?? result.message;
}
//if the button with id "SubmitUpdateGallery" is clicked, then the function updateGallery is called
document.getElementById('SubmitUpdateGallery').addEventListener('click', updateGallery);
