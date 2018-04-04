"use strict";

let productPage = require('./product'),
    aboutPage = require('./about'),
    shippingPage = require('./shipping'),
    shopPage = require('./shop'),
    $ = require('../lib/node_modules/jquery');


    // BANNER

        // CAROUSEL ISN'T FCKNG WORKING
            // $('.carousel').carousel();  

            // setInterval(function() {
            // $('.carousel').carousel('next');
            // }, 12000); // every 12 seconds

            // $('.carousel.carousel-slider').carousel({
            //     fullWidth: true
            // });


    // BUTTONS
    $("#shop-page").click(function() {
        console.log("shop page clicked");
    });

    $("#about").click(function() {
        console.log("about page clicked");
    });

    $("#home").click(function() {
        console.log("home page clicked");

    });