import Artist from "./artist.js";
let allArtists = [];
 
//get the data from "http://localhost:3000/artist" and makes Artist objects with it.
getData("https://brussel-in-beeld.onrender.com/artist", "GET", ).then((data) => {
    console.log(data.length)
    for (let i = 0; i < data.length; i++) {
        let Artists = new Artist(data[i]._id, data[i].name, data[i].img, data[i].about_text, data[i].introduction_text, data[i].article_text_1, data[i].article_text_2, data[i].article_text_3, data[i].article_text_4);
        allArtists.push(Artists);
    }
    //call the function display
    display();
});
 
function display() {
    //displays al the data on the artist webpage.
     for (let i = 0; i < allArtists.length; i++) {
            document.querySelector(".book-wrapper").insertAdjacentHTML("beforeend", allArtists[i].htmlString);
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
