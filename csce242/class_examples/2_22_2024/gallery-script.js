/*
    Edited by Chrissy Dobrowolski 
    Class Example 
    2.22.2024 
    CSCE 242- 001 
    
*/


document.querySelectorAll(".items section").forEach((section) => 
{
    section.onclick = (event) => 
    {
        // When click section, will be displayed as block
        // event -> event that executed the click; what was clicked to bring up thing ("dialog" in this case) 
        document.getElementById("dialog").style.display = "block";

        // Gives element that was actually clicked 
        // - console.log(event.target);
        // Gives event that click was tied to / associated with 
        // - console.log(event.currentTarget);

        // Get dialog content's image src and set equal to image clicked inside of dialog content 
        document.querySelector("#dialog-content img").src = event.currentTarget.querySelector("img").src;

    };


});