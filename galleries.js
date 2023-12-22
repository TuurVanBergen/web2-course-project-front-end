import Gallery from "./gallery.js";

let allGalleries = [];
let currentIndex = 0;

//if the button with id "next" is clicked, then the function is called
document.querySelector("#next").addEventListener("click", function(){
    if (currentIndex == allGalleries.length - 1) {

        // Redirect to a new HTML page when all galleries are shown
        window.location.href = "GallerijToevoegen.html";
        return;
    }
    currentIndex = currentIndex + 1;

    //call display with parameter currentIndex
    display(currentIndex);
});

//if the button with id "back" is clicked, then the function is called
document.querySelector("#back").addEventListener("click", function(){
    if (currentIndex == 0) {

        // Redirect to a new HTML page when all galleries are shown
        window.location.href = "Gallerijen.html";
        return;
    }
    currentIndex = currentIndex - 1;
    //call display with parameter currentIndex
    display(currentIndex);
});

//get the data from "http://localhost:3000/Table-of-Contents" and makes Gallery objects with it.
getData("http://localhost:3000/Table-of-Contents", "GET").then((data) => {
    for (let i = 0; i < data.length; i++) {
        let Galleries = new Gallery(data[i]._id, data[i].title, data[i].date, data[i].page, data[i].category, data[i].opening_hours, data[i].price, data[i].location, data[i].accesability, data[i].facebook_link, data[i].instagram_link, data[i].website_link, data[i].text_1_title, data[i].text_1, data[i].text_2_title, data[i].text_2, data[i].artist);
        allGalleries.push(Galleries);
    }
    console.log(allGalleries);

    //call the function display with parameter currentIndex
    display(currentIndex);
});


function display(index) {
    console.log(index);
    const bookWrapper = document.querySelector(".book-wrapper");

    //clear existing content inside .book-wrapper
    bookWrapper.innerHTML = "";

    // Insert new content inside .book-wrapper
    const galleryString = allGalleries[index].galleryString;
    bookWrapper.insertAdjacentHTML("afterbegin", galleryString);
}

async function getData(url, method, data) {
    let resp = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await resp.json();
}


