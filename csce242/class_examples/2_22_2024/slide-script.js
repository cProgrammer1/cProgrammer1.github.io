/*
    Edited by Chrissy Dobrowolski 
    Class Example 
    2.22.2024 
    CSCE 242- 001 
    
*/


const slideForward = () =>
{
    // FOR TESTING: console.log("Going forward");

    // const currentImage = document.querySelector("#preview :not(.hidden)");

    // If reach the end of the list of images 
    if(getCurrentImage().nextElementSibling == null)
    {
        // Gets first image b/c query selector always selects first 
        slide(document.querySelector("#preview img"));

    }

    else
    {
        slide(getCurrentImage().nextElementSibling);

    }

}

const slideBackward = () =>
{
    // FOR TESTING: console.log("Going backward");

    // If reach the end of the list of images 
    if(getCurrentImage().previousElementSibling == null)
    {
        slide(document.querySelector("#preview :last-child"));

    }

    else
    {
        slide(getCurrentImage().previousElementSibling);

    }

}

const slide = (nextImage) => 
{
    // const currentImage = document.querySelector("#preview :not(.hidden)");

    getCurrentImage().classList.add("hidden");
    nextImage.classList.remove("hidden");

};

const getCurrentImage = () =>
{
    return document.querySelector("#preview :not(.hidden)");

}


document.getElementById("forward-arrow").onclick = slideForward;
document.getElementById("backward-arrow").onclick = slideBackward;

// forEach(image, that image's index) 
document.querySelectorAll("#thumbs img").forEach((img, index) =>
{
    // FOR TESTING: console.log(img);

    img.onclick = () => 
    {
        // FOR TESTING: console.log("Image clicked");
        // FOR TESTING: console.log(index);

        slide(document.querySelector(`#preview :nth-child(${index+1})`));

    };

});