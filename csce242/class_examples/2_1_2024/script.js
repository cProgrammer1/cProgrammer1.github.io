/*
    Created by Chrissy Dobrowolski 
    Class Example 
    2.1.2024 
    CSCE 242- 001 
*/

/* alert("Hello"); */

/* Similar to System.Out.PrintLine for Java; have console open on browser ALL the time */
/* console.log("hello"); */


let pos = 0;

const colorSquare = () =>
{
    /* FOR TESTING: */
    /*- console.log("yay made it!"); */
    
    /* Adds CLASS TO element */ 
    document.getElementById("square").classList.add("rainbow")

};

const moveDown = () => 
{
    /* FOR TESTING: */
    /*- console.log("down"); */
    
    /* querySelector: accesses only the FIRST */ 
    /*- Equivalent if doing document.querySelector(#square) */ 
    pos += 10;
    const root = document.querySelector(":root");

    /* Setting root style property to be 200px */ 
    root.style.setProperty("--square-top", pos + "px");

};

const addCircle = () =>
{
    /* Input valid color */ 
    /* .value --> gets INPUT from box; w/out .value --> the box itself */ 
    const color = document.getElementById("txt-color").value;

    /* Changes color of ALL balls */
    /*- const root = document.querySelector(":root"); */
    /* root.style.setProperty("--ball-color", color); */
    
    /* FOR TESTING: */
    /*- console.log("adding a circle"); */
    const playground = document.getElementById("circle-playground");
    /* playground.innerHTML = "test"; */


    /* 1st way of adding circles: */ 

    /*- Creates HTML element */ 
    /*-- playground.innerHTML += "<section class='circle'></section>"; */ 


    /* 2nd way of adding circles; more explicit: */

    const ball = document.createElement("section");
    ball.classList.add("circle");
    playground.append(ball);

    /* Changes color of one ball */ 
    ball.style.background = color;

};

document.getElementById("btn-color").onclick = colorSquare;
document.getElementById("btn-move-down").onclick = moveDown;
document.getElementById("btn-add-circle").onclick = addCircle;