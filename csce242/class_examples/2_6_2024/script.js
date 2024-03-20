/*
    Created by Chrissy Dobrowolski 
    Class Example 
    2.6.2024 
    CSCE 242- 001 

*/


/* Functions: */

const showHideNav = () =>
{
    /* FOR TESTING: */ /* console.log("in show hide"); */

    document.getElementById("nav-items").classList.toggle("hide-small");
};

const changeP = (event) =>
{
    /* FOR TESTING: console.log("in change p"); */ 

    /* Default action -> to go to another page (if same page, refreshing page so like haven't clicked link at all!), so preventing that */ 
    /*  - Can also call "event" "e" */ 
    event.preventDefault();

    /* Can't add ids w/textContent */ 
    document.getElementById("display").textContent = "Hello Chrissy";


};

const showMood = () =>
{
    /* FOR TESTING: console.log("in show mood"); */ 

    /* "toLowerCase()" -> makes input here lowercase; "trim()" -> gets rid of extra white space */ 
    const color = document.getElementById("txt-mood").value.toLowerCase().trim();

    /* FOR TESTING: console.log(color); */ 

    const moodP = document.getElementById("mood");

    /* Default mood (always shows until an if statement true) */ 
    let mood = "Undeterminable mood";

    if (color == "red") 
    {
        mood = "ANGRY";
    }
    else if(color == "blue")
    {
        mood = "sad";
    }
    else if (color == "yellow")
    {
        mood = "yellow";
    }

    /* moodP.innerHTML = "You are in a " + mood + " mood!"; */ 
    /* Use this instead of concatinating; "${}" to retrieve variable */ 
    moodP.innerHTML = `You are in a ${mood}`;

};

const evalForm = (event) => 
{
    /* Prevents info from appearing in URL */ 
    event.preventDefault();
    
    console.log("We did it!");
}


/* - Function callers: */ 

document.getElementById("hamburger").onclick = showHideNav;
document.getElementById("link-click").onclick = changeP;

/* "keyup" b/c when releasing key being pressed */ 
document.getElementById("txt-mood").onkeyup = showMood;

document.getElementById("form").onsubmit = evalForm;