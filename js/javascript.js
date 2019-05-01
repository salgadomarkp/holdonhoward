console.log("JavaScript is loaded");

$( document ).ready(function() {

    console.log("Document is ready");

    $( ".dropdown__button").click(function() {
        $( ".dropdown__list").toggleClass("hidden");
    });

});