/*
    Created by Chrissy Dobrowolski 
    Class Example 
    2.20.2024 
    CSCE 242- 001 
    
*/

const slide = () =>
{
    // FOR TESTING: console.log("Sliding");

    // Space -> within 
    //- Find child of section "slideshow" that DOESN'T contain class "hidden" 
    //- "slideshow" -> parent; children within slideshow -> "siblings" to one another 
    const currentImage = document.querySelector("#slideshow :not(.hidden)");
    // B/c changing in if-statement below 
    let nextImage = currentImage.nextElementSibling;

    // On the last image, next image is null 
    if(nextImage == null)
    {
        nextImage = document.querySelector("#slideshow :first-child");
    }

    currentImage.classList.add("hidden");
    nextImage.classList.remove("hidden");

};

// 1000 ms  = 1 sec
// CALLS FUNCTION "slide EVERY 1 SEC:"
setInterval(slide, 1000);







// VERY SIMPLE EXAMPLE OF SOMETHING HAPPENING OVER TIME: 

// const slide = () =>
// {
//     console.log("Sliding");

// };

// // 1000 ms  = 1 sec
// setInterval(slide, 1000);