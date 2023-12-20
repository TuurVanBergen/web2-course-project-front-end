"use strict";
 
export default class Artist {
    constructor(id, title, text, img1, img2, img3, img4, img5,img6, img7) {
        this.id = id;
        this.title = title;
        this.text = text;
        this.img1 = img1;
        this.img2 = img2;
        this.img3 = img3;
        this.img4 = img4;
        this.img5 = img5;
        this.img6 = img6;
        this.img7 = img7;
    }
 
    get htmlString() {
        return ` <div class="page-left">
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
    <div class="Masterwork-title">
        <h2>${this.title}</h2>
    </div>
     <div class="Masterwork-text">
        <p>${this.text}</p> 
    </div>
</div>

<div class="page-right">
   <!--<div class="test">
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
    <div class="Masterwork-img">
        <img src="${this.img1}" alt="">
    </div>`;
    }
    get Masterwork2HtmlString() {
        return `<div class="page-left">
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
   <div class="Masterwork-works-1">
       <img src="${this.img2}" alt="">
   </div>
   <div class="Masterwork-works-2">
       <img src="${this.img3}" alt="">
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
   <div class="Masterwork-works-3">
       <img src="./images/pexels-scott-webb-1544945.png" alt="">
   </div>
</div>`;
    }
    get Masterwork3HtmlString() {
        return ` <div class="page-left">
        <!--    <div class="test">
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
      <div class="Masterwork-works-4">
          <img src="${this.img4}" alt="">
      </div>
      <div class="Masterwork-works-5">
          <img src="${this.img5}" alt="">
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
      <div class="Masterwork-works-6">
          <img src="${this.img6}" alt="">
      </div>

  </div>`;
    }
}