import Artwork from "./artwork.js";
let allArtworks = [];
 
//get the data from "http://localhost:3000/Artwork" and makes Artwork objects with it.
getData("http://localhost:3000/Artwork", "GET", ).then((data) => {
    for (let i = 0; i < data.length; i++) {
        let Artworks = new Artwork(data[i]._id, data[i].title, data[i].text, data[i].img1,data[i].img2, data[i].img3, data[i].img4, data[i].img5, data[i].img6, data[i].img7);
        allArtworks.push(Artworks);
    }

    //call the display function
    display();
});
 
    //displays al the data on the artwork webpage.
function display() {
     for (let i = 0; i < allArtworks.length; i++) {
        document.querySelector(".book-wrapper").insertAdjacentHTML("afterbegin", allArtworks[i].htmlString);
    }
}
 
async function getData(url, method, data) {
    let resp = await fetch(url, {
        //mode: "no-cors",
        method: method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return await resp.json();
}