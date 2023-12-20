import Artist from "./artist.js";
let allArtists = [];
 
getData("http://localhost:3000/artist", "GET", ).then((data) => {
    console.log(data.length)
    for (let i = 0; i < data.length; i++) {
        let Artists = new Artist(data[i]._id, data[i].name, data[i].img, data[i].about_text, data[i].introduction_text, data[i].article_text_1, data[i].article_text_2, data[i].article_text_3, data[i].article_text_4);
        allArtists.push(Artists);
       // console.log(allArtists)
    }
    display();
});
 
function display() {
     for (let i = 0; i < allArtists.length; i++) {
       //console.log(allArtists[i].name);
        //console.log(allArtists[i].htmlString)
            document.querySelector(".book-wrapper").insertAdjacentHTML("beforeend", allArtists[i].htmlString);
    }
}
 
async function getData(url, method, data) {
    console.log(url);
    console.log(method);
    console.log(data);
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