"use strict";
 
export default class Artist {
    constructor(id, title, date, page, category, opening_hours, price, location,accesability,facebook_link,instagram_link,website_link,text_1_title,text_1,text_2_title,text_2, Artist) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.page = page;
        this.category = category;
        this.opening_hours = opening_hours;
        this.price = price;
        this.location = location;
        this.accesability = accesability;
        this.facebook_link = facebook_link;
        this.instagram_link = instagram_link;
        this.instagram_link = instagram_link;
        this.website_link = website_link;
        this.text_1_title = text_1_title;
        this.text_1 = text_1;
        this.text_2_title = text_2_title;
        this.text_2 = text_2;
        this.Artist = Artist;
    }
    
    //This getter returns a string that shows the content of the gallery page
    get htmlString() {
        return `<div class="gallery-table">
        <h4 class="gallery-title">${this.title}</h4>
        <div class="gallery-tags">
            <p class="tag"style="color: #F7F5F1;">${this.category}</p>
        </div>
        <p class="gallery-date">${this.date}</p>
        <p class="gallery-page">${this.page}</p>
    </div>`;
    }

    //This getter returns a string that shows the content of every individual gallery page.
    get galleryString(){
        return ` <div class="page-left" style="background-color: #F7F5F1; border-right: 1px solid #E50F10;border-left: 1px solid #E50F10; ">
        <!--  <div class="test">
                   <p></p>
                   <p></p>
                   <p></p>
                   <p></p>
                   <p></p>
                   <p></p>
                   <p></p>
                   <p></p>
                   <p></p>
                   <p></p>                
                   <p></p>
                   <p></p>
               </div>--> 
               <div class="gallery-title-2">
                   <h2>${this.title}</h2>
                   <div class="gallery-tags">
                       <p class="tag-2">${this.category}</p>
                   </div>
               </div>
               <div class="gallery-info-wrapper">
                   <div class="gallery-info-section">
                       <p class="gallery-info-title">Kunstenaars:</p>
                       <p class="gallery-title-info">${this.Artist}</p>
                   </div>
                   <div class="gallery-info-section">
                       <p class="gallery-info-title">Openingstijden:</p>
                       <p class="gallery-title-info">${this.opening_hours}</p>
                   </div>
                   <div class="gallery-info-section">
                       <p class="gallery-info-title">Prijs:</p>
                       <p class="gallery-title-info">${this.price}
                           </p>
                   </div>
                   <div class="gallery-info-section">
                       <p class="gallery-info-title">Locatie:</p>
                       <p class="gallery-title-info">${this.location}</p>
                   </div>
                   <div class="gallery-info-section">
                       <p class="gallery-info-title">Toegankelijkheid</p>
                       <p class="gallery-title-info">${this.accesability}</p>
                   </div>
                   <div class="gallery-info-section last-line">
                       <p class="gallery-info-title">Meer informatie:</p>
                       <div class="icons">
                           <img src="./images/Icon awesome-instagram.svg" alt="">
                           <img src="./images/Icon awesome-facebook-f.svg" alt="">
                           <img src="./images/Icon awesome-link.svg" alt="">
                       </div>
                   </div>
               </div>
           </div>
   
           <div class="page-right" style="border-left: 1px solid #E50F10;">
           <!--  <div class="test">
                   <p></p>
                   <p></p>
                   <p></p>
                   <p></p>
                   <p></p>
                   <p></p>
                   <p></p>
                   <p></p>
                   <p></p>
                   <p></p>                
                   <p></p>
                   <p></p>
               </div>-->
               <div class="Gallerijen2-text-1">
                   <h3>${this.text_1_title}</h3>
                   <p>${this.text_1}</p>
               </div>
               <div class="Gallerijen2-text-2">
                   <h3>${this.text_2_title}</h3>
                   <p>${this.text_2}</p>
               </div>
   
           </div>`
    }
}