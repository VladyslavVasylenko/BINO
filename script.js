"use strict";

//main slide
$(document).ready(function(){
  $('.main-slide').slick({
    dots: false,
    infinite: true,
    speed:1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true,
    prevArrow:`<svg class="slick-arrow slick-prev" fill: #303030; xmlns="http://www.w3.org/2000/svg" width: 12; height: 21; viewBox="0 0 11.688 20">
      <path id="fa-angle-left" d="M76.831,451.736a0.652,0.652,0,0,0-.2-0.462l-1-1a0.636,0.636,0,0,0-.922,0l-9.341,9.341a0.632,0.632,0,0,0,0,.923l9.341,9.339a0.629,0.629,0,0,0,.922,0l1-1a0.631,0.631,0,0,0,0-.922l-7.877-7.877,7.877-7.877A0.7,0.7,0,0,0,76.831,451.736Z" transform="translate(-65.156 -450.063)"/>
    </svg>`,
    nextArrow:`<svg class="slick-arrow slick-next" xmlns="http://www.w3.org/2000/svg" width: 12; height: 21; viewBox="0 0 11.68 20.032">
      <path id="fa-angle-left" d="M1843.17,467.259a0.656,0.656,0,0,0,.2.462l1,1a0.629,0.629,0,0,0,.92,0l9.34-9.341a0.631,0.631,0,0,0,0-.922l-9.34-9.34a0.627,0.627,0,0,0-.92,0l-1,1a0.689,0.689,0,0,0-.2.461,0.7,0.7,0,0,0,.2.462l7.88,7.875-7.88,7.879A0.689,0.689,0,0,0,1843.17,467.259Z" transform="translate(-1843.16 -448.906)"/>
    </svg>`,
  });
});

//scroll
const anchors = document.querySelectorAll('a.scroll-to');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href');
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
}

//active class
let ulContainer = document.getElementById("active");

let li = ulContainer.getElementsByClassName("header__item-link");

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

//burger menu
const burger = document.querySelector(".burger");
const headerList = document.querySelector(".header__list");
const links = document.querySelectorAll(".header__item-link");

burger.addEventListener("click", () => {
  headerList.classList.toggle("open");
  links.forEach(link => {
      link.classList.toggle("fade");
    });
  }
);