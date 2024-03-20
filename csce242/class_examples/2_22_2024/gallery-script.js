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
        
        // const src = event;
        // const src = event.target; -> gives exactly the elemnt was clicked (the title, image, etc.; not the section as a whole)
        // const src = event.currentTarget; -> represents element that event was onto (in this case, the section)
        // const src = section.querySelector("img"); -> gets section's img source; can do b/c access to section in scope of function 
        /* 
        const src = event.currentTarget.querySelector("img").src;
        console.log(src);
        */

        // Get dialog content's image src and set equal to image clicked inside of dialog content 
        document.querySelector("#dialog-content img").src = event.currentTarget.querySelector("img").src;

        const detailsSection = document.getElementById("dialog-details");
        detailsSection.innerHTML = "";

        const h3 = document.createElement("h3");
        h3.innerHTML = section.querySelector("h3").innerHTML;

        detailsSection.append(h3);
        
        // To get ONE paragraph: 
        // const p = document.createElement("p");
        // p.innerHTML = section.querySelector("p").innerHTML;
        // detailsSection.append(p);

        // To get ONE OR MORE paragraphs: 
        // - "getElementByTagName" is older than "querySelectorAll" and doesn't work here 
        const ps = section.querySelectorAll("p");
        
        ps.forEach((p) => 
        {
            const newP = document.createElement("p");
            newP.innerHTML = p.innerHTML;
            detailsSection.append(newP);

        });


    };


});

document.getElementById("dialog-close").onclick = () =>
{
    // console.log("Clicked");
    document.getElementById("dialog").style.display = "none";

};