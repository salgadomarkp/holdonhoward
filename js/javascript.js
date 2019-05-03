console.log("JavaScript is loaded");

$( document ).ready(function() {

    console.log("Document is ready");

    //Clicking ANY dropdown button
    $( ".dropdown__button").click(function() {
        //If we clicked on an open dropdown
        if($(this).siblings(".dropdown__list").hasClass("hidden") == false)
        {
            //Hide it
            $(this).siblings(".dropdown__list").addClass("hidden");
        }
        //Otherwise
        else{
            //Hide all of the list items
            $(".dropdown__list").addClass("hidden");
    
            //remove the hidden class from the clicked drop down
            $(this).siblings(".dropdown__list").removeClass("hidden");
        }
    });

});