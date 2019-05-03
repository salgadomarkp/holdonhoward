console.log("JavaScript is loaded");

var images = [
    "images/band-pic-smaller.jpg",
    "images/chalkboard-band-name.jpg",
    "images/relay-pic.png",
    "images/wfmz-relay-pic.jpg"
];



var clickedIndex = -1;

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

    images.forEach(function(image){
        var wrapper = document.createElement("div");
        wrapper.classList.add("gallery-image-wrapper");
        document.getElementById("gallery").appendChild(wrapper);

        var newImage = document.createElement("img");
        newImage.src = image;
        newImage.classList.add("gallery-image");
        wrapper.appendChild(newImage);
    });

    //When we click on a gallery image
    $(".gallery-image").click(function(){
        //Show the dialog
        $("#dialog").removeClass("hidden");

        //Show the image we clicked on
        var clickedImage = $(this).attr('src');
        $(".image__display").attr('src', clickedImage);

        //Set the clicked index to the index of the image we clicked on
        clickedIndex = images.indexOf(clickedImage);
        console.log("Clicked on : " + clickedIndex);
    });

    //On clicking exit
    $(".dialog__exit").click(function(){
        //Remove the dialog
        $("#dialog").addClass("hidden");
    });

    //On clicking right
    $(".dialog__scroll-right").click(function(){
        clickedIndex += 1;

        if(clickedIndex >= images.length){
            clickedIndex -= images.length;
        }

        $(".image__display").addClass("gallery-click-right");
        setTimeout(function(){
            //Change the image according to the index
            $(".image__display").attr('src', images[clickedIndex]);
        }, 150);

        //Remove the animation class
        setTimeout(function(){
            $(".image__display").removeClass("gallery-click-right");
        },300);
    });

    
    //On clicking left
    $(".dialog__scroll-left").click(function(){
        clickedIndex -= 1;

        if(clickedIndex < 0){
            clickedIndex += images.length;
        }


        $(".image__display").addClass("gallery-click-left");
        setTimeout(function(){
            //Change the image according to the index
            $(".image__display").attr('src', images[clickedIndex]);
        }, 150);

        //Remove the animation class
        setTimeout(function(){
            $(".image__display").removeClass("gallery-click-left");
        },300);
    });

});