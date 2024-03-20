/*
    Created by Chrissy Dobrowolski 
    Assignment 7- JavaScript, Buttons, Functions, and More 
    CSCE 242- 001 
    Due: 2.4.2024 
    - 2.8.2024: IN-CLASS CORRECTIONS 

*/


/* Variables: */ 

/*
let slider = document.getElementByID("slider-id");
let output = document.getElementByID("slider-range");
output.innerHTML = slider.value;
*/

/*
let slider = document.getElementByID("slider-id");
let sliderValue = slider.value;
output.innerHTML = slider.value;
*/


/* Functions: */ 

/* - const */

/* -- Changes changing-image source to another placeholder image */ 
const changeImage = () =>
{
    document.getElementById("changing-image").src = "https://place-hold.it/200x200/087369";
};

/* -- Rotates image based on value of slider */

/*

slider.oninput = showRange ()
{
    output.innerHTML = this.value;
}

*/


/* -- Creates star */ 

const makeStar = (e) =>
{
    const star = document.createElement("img");
    star.src = "images/star.png";
    e.target.append(star);

}

/* -- Adds star to main-col3of3 */

const addStar = () =>
{

    /* 

    const starArea = document.getElementById("star-area");

    /* starArea.innerHTML += "<section class='star'></section>"; 
    
    */

    /* 
    const star = document.createElement("section");
    starArea.append(star)
    star.classList.add("star");
    star.style.background = red;

    */ 
    
};



/* 


slider.oninput = rotateImage () 
{
    output.innerHTML = this.value;
};

*/



const rotateImage = () =>
{
    const value = document.getElementById("slider").value;
    document.getElementById("img-2").style.transform = `rotate(${(value - 50) * 3.6}deg`;
    


    /* 
    sliderValue = slider.value
    document.getElementById("rotating-image").rotate = sliderValue.value;
    */ 

};



/* - Callers: */

document.getElementById("changing-image").onclick = changeImage;
/* document.getElementByID("slider-id").oninput = showRange; */

/* document.getElementById("slider-id").oninput = rotateImage; */

/* document.getElementById("starArea").addEventListener("click", addStar); */


document.getElementById("starArea").onclick = addStar;