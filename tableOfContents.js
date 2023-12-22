import Gallery from "./gallery.js";
let allGalleries = [];

//get the data from "http://localhost:3000/Table-of-Contents" and makes Gallery objects with it.
getData("http://localhost:3000/Table-of-Contents", "GET", ).then((data) => {
    for (let i = 0; i < data.length; i++) {
        let Galleries = new Gallery(data[i]._id, data[i].title, data[i].date, data[i].page,data[i].category, data[i].opening_hours, data[i].price, data[i].location, data[i].accesability, data[i].facebook_link,data[i].instagram_link,data[i].website_link,data[i].text_1_title,data[i].text_1,data[i].text_2_title,data[i].text_2);
        allGalleries.push(Galleries);
    }

    //call the function display
    display();
});
 

function display() {
    //displays al the data on the gallery webpage.
     for (let i = 0; i < allGalleries.length; i++) {
        document.querySelector(".galleries-table").insertAdjacentHTML("beforeend", allGalleries[i].htmlString);
    }
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