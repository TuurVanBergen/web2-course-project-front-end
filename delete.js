async function deleteGallery(event) {
    event.preventDefault();
    const deleteGallery = {
        title: document.getElementById('deleteGallery').value,
    }

    let result = await fetch("http://localhost:3000/deleteGallery", {
        method: "DELETE",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(deleteGallery)
      });

    result = await result.json();
    document.getElementById('deleteResult').innerHTML = result.error ?? result.message;
}

document.getElementById('submitDelete').addEventListener('click', deleteGallery);


async function updateGallery(event) {
    event.preventDefault();
    const updateGallery = {
        title: document.getElementById('updateGallery').value,
        price:document.getElementById('price').value,
        artist:document.getElementById('artist').value,
        adres:document.getElementById('adres').value,
        url:document.getElementById('url').value,
        Iurl:document.getElementById('Iurl').value,
        Furl:document.getElementById('Furl').value
    }
console.log(updateGallery)
    let result = await fetch("http://localhost:3000/updateGallery", {
        method: "PUT",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(updateGallery)

      });

    result = await result.json();
    document.getElementById('resultUpdate').innerHTML = result.error ?? result.message;
}

document.getElementById('SubmitUpdateGallery').addEventListener('click', updateGallery);