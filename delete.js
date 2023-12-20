import Gallery from "./gallery.js";
let allGalleries = []
console.log(Gallery)

getData("http://localhost:3000/Table-of-Contents", "GET").then((data) => {
    for (let i = 0; i < data.length; i++) {
        let Galleries = new Gallery(data[i]._id, data[i].title, data[i].date, data[i].page, data[i].category, data[i].opening_hours, data[i].price, data[i].location, data[i].accesability, data[i].facebook_link, data[i].instagram_link, data[i].website_link, data[i].text_1_title, data[i].text_1, data[i].text_2_title, data[i].text_2);
        allGalleries.push(Galleries);
    }
    console.log(allGalleries);
    display(currentIndex);
});
console.log(allGalleries);
display(currentIndex);