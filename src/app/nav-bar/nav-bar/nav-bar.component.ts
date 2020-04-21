import { Component, OnInit } from "@angular/core";

import { TranslateService } from "@ngx-translate/core";

var style = document.createElement("style");
style.innerHTML = `
@import url('https://fonts.googleapis.com/css2?family=Markazi+Text:wght@400;500;600;700&display=swap');


@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700;900&display=swap');

body, .btn-one , .btn-two , .sec-title .bottom-text , .main-menu .navigation > li > a , .main-menu .navigation > li > ul > li > a , .main-menu .navigation > li > ul > li > ul > li a , .cart-box a ,
.header-contact-info li .single-item .text h3 , .main-slider .slide-content .text , .main-slider .slide-content .btn-box a.project-view-button , .main-slider.style2 .slide-content .text , .main-slider.style2 .slide-content .btn-box a.slide-style2-button , .main-slider.style3 .slide-content .text , .about-image-box .text-box h3 span , .about-style2-image-box .overlay-box .title h1 , .single-working-box-style2 .text-holder .title .count , .single-service-style1 .text-holder .top .count h1 , .single-working-process-style2 .top-box .count h1 , .header-call-button .inner .title h3 , .single-history-content .text-box .inner .date h3 , .single-fact-counter .count-box h1 ,  .single-pricing-box .static-content .table-header .package h1 ,  .sidebar-contact-box .inner-content .bottom-box h2 , .single-blog-post.style3 .post-date h3 , .single-sidebar .categories li a , .author-quote-box .text .name h3 span  , .author-box-holder .inner-box .text h3 span , .single-sidebar-box .categories li a  , .review-box-holder .single-review-box .text-holder .top .name h3 span , .cart-area .cart-table tbody .available-info , .cart-area .cart-table tbody tr td.price , .cart-area .cart-table tbody tr .sub-total , .cart-bottom .calculate-shipping .ui-state-default ,  .cart-bottom .calculate-shipping input[type="text"] ,  .checkout-area .table .cart-table tbody tr td.price , .cart-total-table li span.col , .cart-total .payment-options .option-block .checkbox label span b , .countdown-timer li span.days,
.countdown-timer li span.hours,
.countdown-timer li span.minutes,
.countdown-timer li span.seconds         
{
font-family: "Cairo", sans-serif;
}

.author-box-holder .inner-box .text .author-social-links p {float: right;padding-left: 10px;}
.author-box-holder .inner-box .text .author-social-links ul {float: right;}
.accordion-box {text-align: right;}
.intro-box .sec-title {text-align: right;}

  .intro-box .text {text-align: right;}

.btn-one .flaticon-next:before {padding-right: 11px;}
.single-service-top .text {text-align: right;}
.how-work-box .how-works-content {text-align: right;}
.how-work-box .how-works-content ul li .icon { left:unset;right: 1px;}
.how-work-box .how-works-content ul li .text {padding-right: 30px;padding-left:unset;}
.concept-design-pricing-box .title , .additional-information-box .title  {    text-align: right;}
.main-menu.style2 .navigation > li > a {padding-left: 7px;}
.project-description-content .sec-title .title , .project-description-content .sec-title p{text-align: center;}
.sidebar-wrapper .single-sidebar {
  text-align: right;}
.single-blog-post .top-text-box h3 , .author-quote-box .text , .blog-single-bottom-content-box h2 {
    text-align: center;}


.tag-with-social-links-box .tag-box p {padding-left: 10px;float: right;}
.inner-content clearfix .tag-box .pull-left{float: right;}
.inner-content clearfix .social-links-box .pull-right{    float: left;}
.tag-with-social-links-box .social-links-box p {float: right;
  padding-left: 10px;}
.tag-with-social-links-box .social-links-box p i {padding-left: 8px;float: right;}

.single-sidebar-box .categories li a {
  padding-right: 13px;}

  .product-tab-box .review-form {text-align: right;}

  .cart-total .shop-page-title ,.cart-bottom .calculate-shipping .shop-page-title {text-align: right;}

  .cart-bottom button.checkout-btn , .cart-bottom .calculate-shipping button {float: right;}
  .cart-area .cart-table tbody tr td .remove .checkbox label input[type="checkbox"] {
    display: inline-block;
    position: relative;
    top: 6px;
    margin-left: 5px;
    float: right;}

    .

    .cart-total-table {
      border: 1px solid #ededed;
      text-align: right;
  }
  .checkout-area .exisitng-customer , .checkout-area .coupon {text-align: right;direction: rtl;}

  .form shipping-info{ text-align: right; }
  .login-register-area .form .social-icon .login-with {left: -195px;}
  .login-register-area .form .remember-text .checkbox span {float: left;
    
    margin-right: 5px;}


    .shop-page-title .title {
      text-align: center;}

      .checkout-area .create-acc .checkbox input {
        
        top: 5px;
        margin-left: 5px;
        float: right;
    }

/*********/
@media only screen and (max-width: 767px){
.top-style2-left p {
    display: block;
    float: none;
    direction: rtl;
}}
@media only screen and (max-width: 1024px) and (min-width: 768px){
.top-style2-left p {
    
    direction: rtl;
}}
@media only screen and (max-width: 2650px) and (min-width: 1025px) {
.top-style2-left .icon-music{float: right;
  padding-top: unset;}
}

@media (min-width: 1200px){
  .checkout-area .row .col-xl-6 {
  text-align: right;
}}




h1,
h2,
h3,
h4,
h5,
.sec-title p,
.sec-title .title,
.post-pagination li a ,
.post-pagination2 li a ,
.main-slider .slide-content .big-title ,
.main-slider.style3 .slide-content .big-title ,
.single-brand-item .overlay-content p ,
.top-style2-left p ,
.about-style2-image-box .overlay-box .title h1 span ,
.working-style-bottom p ,
.breadcrumb-area .inner-content-box .title-s2 span ,
.single-pricing-box .static-content .table-header .package p ,
.single-service-sidebar .service-pages li a ,
.single-service-sidebar .service-pack-download li .title-holder a ,
.project-filter li .count ,
.sidebar-title .title ,
.single-sidebar .instagram li .img-holder .overlay-style-one .box .content a ,
.tag-with-social-links-box .tag-box p ,
.tag-with-social-links-box .social-links-box p ,
.blog-single-area
  .inner-comment-box
  .single-comment-box
  .text-box
  .top
  .reply-button
  a ,
  .product-tab-box .tab-btns .tab-btn span ,
  .shop-page-title .title ,
  .cart-area .cart-table .cart-header ,
  .cart-area .cart-table tbody tr td ,
  .checkout-area .create-acc .checkbox label ,
  .checkout-area .table .cart-table .cart-header ,
  .checkout-area .table .cart-table tbody tr .qty .form-control ,
  .cart-total-table li span.col.col-title ,
  .cart-total .payment-options .option-block .checkbox label span ,
  .login-register-area .form .remember-text .checkbox span ,
  .coming-soon-content .title ,
  .countdown-timer li span.timeRef ,
h6 {font-family: 'Markazi Text', serif !important;}








/****************************NAVBAR---RTL******************/
  

.main-menu .navigation > li {
    position: relative;
    display: inline-block;
    float: right;
    margin-right: 35px;
  }
  @media only screen and (max-width: 2650px) and (min-width: 991px) {
    .float-right {
      float: left !important;
    }
    .float-left {
      float: right !important;
      text-align: right;
    }
  }
  .icon-music{
    PADDING: 8PX;
  }
  .cart-box {
    position: relative;
    display: inline-block;
    float: right;
    height: 50px;
    padding: 15px 0;
    margin: 20px 0;
    transition: all 500ms ease 100ms;
  }
  .mainmenu-right.style2 {
    margin-right: 30px;
    margin-left: 0px;
  }

  .mainmenu-right {
    position: relative;
    display: inline-block;
    float: left;
    margin-left: 30px;
  }

  .main-menu {
    position: relative;
    display: inline-block;
    float: right;
  }
  .main-menu.style2 .navigation > li {
    margin-right: 16px !important;
  }

  .cart-box a span.number {
    position: relative;
    display: inline-block;
    float: left;
    color: #e9212e;
    font-size: 14px;
    line-height: 14px;
    font-weight: 600;
    margin: -4px;
  }

  .main-menu .navbar-collapse > ul li.dropdown .dropdown-btn {
    left: 30px;
  }
  @media only screen and (min-width: 1234px) {
    .main-menu.style2 .navigation > li {
      margin-right: 35px !important;
      margin-left: 25px;
    }
  }
  @media only screen and (max-width: 991px) and (min-width: 768px) {
    .header-style2 .inner-container {
      position: relative;
      padding: 0px 5px;
    }
  }
  @media only screen and (max-width: 1199px) and (min-width: 992px) {
    .main-menu.style2 .navigation > li {
      margin-left: 5px;
    }
  }
  @media only screen and (max-width: 991px) and (min-width: 768px) {
    .logo-box-style2 {
      position: absolute;
      margin: 0;
      top: 0px;
      right: 20px;
      left: unset;
      margin: 15px 0;
      z-index: 33;
    }
    .logo-box-style2 a {
      display: inline-block;
      float: right;
    }
    .mainmenu-right.style2 {
      position: absolute;
      top: 0;
      left: 60px;
      margin: 0;
    }
    .mainmenu-right.style2 .cart-box {
      float: left;
      margin: 18px -40px;
      left: 42px;
    }
  }

  @media only screen and (max-width: 991px) {
    .main-menu .navbar-header .navbar-toggle {
      left: 0;
      right: unset;
    }
    .main-menu .navbar-collapse .navigation li a {
      text-align: right;
    }
    .main-menu .navbar-collapse > .navigation {
      direction: ltr;
    }
    .main-menu .navbar-collapse .navigation > li > ul {
      text-align: right;
    }
    .main-menu .navbar-collapse .navigation li ul li a {
      text-align: right;
      margin-right: 10px;
    }
  }
  @media only screen and (max-width: 767px) {
    .mainmenu-right.style2 {
      position: absolute;
      top: 0;
      left: 60px;
      margin: 0;
    }
    .logo-box-style2 {
      left: unset;
      right: -40px;
    }
  }

  /****************************NAVBAR---RTL******************/
  /****************************BODY-----RTL******************/
  
  .container {
    max-width: 1200px;
    direction: ltr;
  }
  .row {
    direction: ltr;
  }
  .single-footer-widget {
    direction: ltr;
  }
  .single-blog-post .text-holder {
    text-align: start;
  }
  .single-blog-post .meta-box .meta-info li {
    float: right;
    padding-right: 10px;
    margin-right: 0px;
  }
  .single-blog-post .meta-box .meta-info li a {padding: 5px;}
  .main-slider.style2 {
    direction: ltr;
  }
  .single-blog-post .text-holder .blog-title {    text-align: right;
  }
  .single-blog-post .text-holder .text p {text-align: right;}
  .about-style2-text {
    text-align: right;
  }
  .about-style2-text .authorised-info {
    text-align: -webkit-right;
  }

  @media only screen and (min-width: 1025px) {
    .top-style2-left p {
      float: right;
    }
    .top-style2-left ul {
      float: right;
      padding-right: 20px;
    }

    .top-style2-right {
      float: left;
    }
  }
  .why-choose-title ul li:before {
    right: -30px;
  }
  .why-choose-title ul {
    padding-right: 40px;
  }
  .why-choose-title .sec-title {
    padding-right: 40px;
  }
  .single-working-process-style2 .inner {
    text-align: right;
  }
  .contact-details-form-box .title-box h2 {
    text-align: -webkit-right;
  }
  .breadcrumb-area .inner-content {
    text-align: right;
  }
  .breadcrumb-area .title:before {
    right: 0;
    left: unset;
  }
  .intro-box {
    direction: rtl;
  }
  .single-fact-counter {
    direction: rtl;
  }
  .single-fact-counter {
    text-align: right;
  }
  .footer-area .container .row {
    direction: rtl;
  }
  .footer-bottom-area .row {
    direction: rtl;
  }
  .why-choose-area .row {
    direction: rtl;
    text-align: -webkit-right;
  }
  .services-style2-service-page .row {
    direction: rtl;
  }
  .services-style2-service-page .sec-title {
    text-align: right;
  }
  .single-blog-post.style4 .text-holder {
    text-align: right;
  }
  .accordion-box .accordion .accord-btn::after {left: 40px;}
/**************** footer*********/
.footer-social-links span {float: right;
  padding-left: 15px;}
  .scroll-to-top {left: 20px;}
  .single-footer-widget .contact-info-box ul {    text-align: end;
  }
  .footer-area .container .row {text-align: center;}
`;

function changeLanguageAr() {
  document.head.appendChild(style);

  /*******************end add language************* */
}
function changeLanguageEn() {
  document.head.removeChild(style);
}

@Component({
  selector: "app-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.css"],
})
export class NavBarComponent implements OnInit {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang("en");
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {}

  /* addStyleRTL() {
    document.head.appendChild(style1);
  }
  deleteStyleRTL(style1) {
    document.head.removeChild(style1);
  }

  ar() {
    this.addStyleRTL();
  }
  //  */

  toggle = document.getElementById("toggle-btn");
  blog = document.getElementById("blog1");

  addAr() {
    changeLanguageAr();
  }

  addEn() {
    changeLanguageEn();
  }
  togglemenu() {
    this.toggle.setAttribute("data-toggle", "collapse");
    this.toggle.setAttribute("data-target", ".navbar-collapse");
  }
}
