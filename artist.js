"use strict";
 
export default class Artist {
    constructor(id, name, img, about_text, introduction_text, article_text_1, article_text_2, article_text_3,article_text_4) {
        this.id = id;
        this.name = name;
        this.about_text = about_text;
        this.introduction_text = introduction_text;
        this.article_text_1 = article_text_1;
        this.article_text_2 = article_text_2;
        this.article_text_3 = article_text_3;
        this.article_text_4 = article_text_4;
        this.img = img;
    }
 
    //This getter returns a string that shows the content of the Artist page
    get htmlString() {
        return `
        <div class="page-left">
        <!--     <div class="test">
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
     <div class="Artist-title">
          <h2>KUNSTENAAR IN DE KIJKER</h2>
          <h3>${this.name}</h3>
      </div>
      <div class="Artist-img">
          <img src="${this.img}" alt="Artist Picture">
      </div>
     <div class="Artist-intro">
          <p>${this.about_text}</p>
      </div>
  </div>

  <div class="page-right">
     <!-- <div class="test">
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
      <div class="Artist-talk-intro">
          <h3>${this.introduction_text}</h3>
      </div>
      <div class="Artist-talk-left">
          <p>${this.article_text_1}</p>
          <p>${this.article_text_2}</p>
      </div>
      <div class="Artist-talk-right">
      <p>${this.article_text_3}</p>
      <p>${this.article_text_4}</p>
  </div>`;
    }
}