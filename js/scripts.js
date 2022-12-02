/*!
* Start Bootstrap - Modern Business v5.0.6 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// disable scroll with mouse wheel

$("#boutonCommencer").click(function(){
    window.addEventListener("wheel", e => e.preventDefault(), { passive:false })
    window.addEventListener("click", e => e.preventDefault(), { passive:false })
// add css property to html
    $("html").css("cursor", "none");
    // css when over html tag
    $("*").hover(function(){
        $(this).css("cursor", "none");
    });

}); 

