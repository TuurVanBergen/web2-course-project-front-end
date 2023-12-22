import Gallery from "./gallery.js";

let allGalleries = [];
let currentIndex = 0;

document.querySelector("#next").addEventListener("click", function(){
    if (currentIndex == allGalleries.length - 1) {
        // Redirect to a new HTML page when all galleries are shown
        window.location.href = "GallerijToevoegen.html";
        return;
    }
    currentIndex = currentIndex + 1;
    display(currentIndex);
});

document.querySelector("#back").addEventListener("click", function(){
    if (currentIndex == 0) {
        window.location.href = "Gallerijen.html";
        return;
    }
    currentIndex = currentIndex - 1;
    display(currentIndex);
});

getData("http://localhost:3000/Table-of-Contents", "GET").then((data) => {
    for (let i = 0; i < data.length; i++) {
        let Galleries = new Gallery(data[i]._id, data[i].title, data[i].date, data[i].page, data[i].category, data[i].opening_hours, data[i].price, data[i].location, data[i].accesability, data[i].facebook_link, data[i].instagram_link, data[i].website_link, data[i].text_1_title, data[i].text_1, data[i].text_2_title, data[i].text_2, data[i].artist);
        allGalleries.push(Galleries);
    }
    console.log(allGalleries);
    display(currentIndex);
});

function display(index) {
    console.log(index);
    const bookWrapper = document.querySelector(".book-wrapper");

    // Clear existing content inside .book-wrapper
    bookWrapper.innerHTML = "";

    // Insert new content (arrows + gallery) inside .book-wrapper
    const galleryString = allGalleries[index].galleryString;
    bookWrapper.insertAdjacentHTML("afterbegin", galleryString);
    checkFordelete(allGalleries[index].id)
}
function checkFordelete(id){

    document.querySelector("#cok").addEventListener("click", async function () {
        console.log(id)
        try {
            const galleryIdToDelete = is; // Replace with the actual gallery ID you want to delete
            const response = await fetch(`/deleteGallery`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id: galleryIdToDelete }),
            });
    
            if (response.ok) {
                const result = await response.json();
                console.log(result.message);
                // Optionally, you can redirect or perform other actions after successful deletion
            } else {
                const error = await response.json();
                console.error(error.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    });
}

async function getData(url, method, data) {
    console.log(url);
    console.log(method);
    console.log(data);
    let resp = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await resp.json();
}

//window.location.href = "delete.html";

