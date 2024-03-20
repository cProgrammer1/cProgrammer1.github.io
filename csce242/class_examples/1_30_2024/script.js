/* 
    Created by Chrissy Dobrowolski 
    Class Example 
    1.30.2024 
    CSCE 242- 001 
    
*/ 


/* Functions: */ 

/* 
() : parameters 
( {} : scope of function; says what function does ) 
*/ 

const doStuff = () =>
{
    /* messageP: "message in form of paragraph" */
    const messageP = document.getElementById("message");
    messageP.innerHTML = "Hello Chrissy!";
    /* Could also do .toggle so that can click and unclick */ 
    messageP.classList.toggle("special");
};

const hideBluberries = () =>
{
    /* For SHOWING NEW IMAGE: .src = new image source */ 
    document.getElementById("blueberries").classList.add("hidden");
};



/* Callers: */ 

document.getElementById("btn-click").onclick = doStuff;
document.getElementById("blueberries").onclick = hideBluberries;




/* NEW, streamlined way of doing creating clickable button: */ 

/* 

document.getElementById("btn-click").onclick = () =>
{
    alert("stuff")
}

*/ 


/* OLD way of creating clickable button: */ 

/* 
function doStuff()
{
    alert("doing stuff");
}
*/ 

/* Creates reference to clickButton */
/* const clickButton = document.getElementById("btn-click"); */ 

/* clickButton.innerHTML = "DON'T CLICK"; */

/* DON'T put paranthesis for execution of function b/c will call anyway */
/* clickButton.onclick = doStuff; */