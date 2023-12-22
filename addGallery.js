async function formSubmitted(event) {
    event.preventDefault();

    //Read the data from the input fields, and put it in an object.
    const AddGalleryData = {
        title: document.getElementById('galleryName').value,
        artist: document.getElementById('artist').value,
        opening_hours: document.getElementById('openingHours').value,
        price: document.getElementById('price').value,
        location: document.getElementById('adres').value,
        accesability: document.getElementById('accessability').value,
        facebook_link: document.getElementById('Furl').value,
        instagram_link: document.getElementById('Iurl').value,
        website_link: document.getElementById('url').value,
        text_1_title: document.getElementById('description1-title').value,
        text_1: document.getElementById('description1').value,
        text_2_title: document.getElementById('description2-title').value,
        text_2: document.getElementById('description2').value,
        category: document.getElementById('typeGallery').value
    }
 
    //Sending a post request to "http://localhost:3000/addGallery"
    let result = await fetch("http://localhost:3000/addGallery", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(AddGalleryData)
      });

    result = await result.json();

    //use result.error, or user result.message
    document.getElementById('result').innerHTML = result.error ?? result.message;
}

//if the button with id "submitGallery" is clicked, then the function formSubmitted is called
document.getElementById('submitGallery').addEventListener('click', formSubmitted);