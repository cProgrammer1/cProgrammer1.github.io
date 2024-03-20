/*
    Created by Chrissy Dobrowolski 
    Class Example 
    2.15.2024 
    CSCE 242- 001 
    
*/


/* Functions: */ 

const numLoop = () =>
{
    /* FOR TESTING: console.log("looping"); */

    const numList = document.getElementById("num-list");
    /* Sets numList on screen equal to nothing initially */ 
    numList.innerHTML = "";

    const errorP = document.getElementById("error-nums");

    /* Sets error equal to nothing initially */ 
    errorP.innerHTML = "";

    /* Gets starting and ending numbers */ 
    let startNum = document.getElementById("txt-start-num").value;
    let endNum = document.getElementById("txt-end-num").value;


    if((isNaN(startNum) || isNaN(endNum)) || ((startNum.trim() == "") || (endNum.trim() == "")))
    {
        errorP.innerHTML = "You must enter number(s).";

        return;
    }

    /* FOR TESTING: console.log(`Looping from ${startNum} to ${endNum}.`); */

    startNum = parseInt(startNum);
    endNum =  parseInt(endNum);

    if(startNum >= endNum)
    {
        errorP.innerHTML = "Ending number must be larger than starting number";

        return;
    }


    /* Creates an li for each number and appends it to the list */ 
    for(let i = startNum; i < endNum; i++)
    {
        /* FOR TESTING: console.log(i); */

        /* Can make li variable const b/c remade every single time */ 
        const li = document.createElement("li");

        /* Equivalent: li.innerHTML = (i+1); */
        /* ` --> allows you to integrate variables inside of quotes */ 
        li.innerHTML = i;

        numList.append(li);

    }
};

/* Creating outside overrides it in function instead of creating new in addition to original */
let updateCount;
let counter = 0;

const startStopCount = (event) =>
{
    /* FOR TESTING: console.log("counting"); */

    /* Button envokes event, so button is event's target */ 
    /* FOR TESTING: console.log(event.target); */

    const countP = document.getElementById("count-p");

    /* ()=>{} -> anonymous function b/c w/out name */ 
    
    if(event.target.innerHTML.toLowerCase() == "start")
    {
        event.target.innerHTML == "Stop";

        updateCount = setInterval(() => 
        {
            counter++;
            countP.innerHTML = counter;

        }, 1000);

    } 
    
    else 
    {
        event.target.innerHTML == "Start";
        clearInterval(updateCount);
        
    }
    
    /* 
    updateCount = setInterval(()=>
    {
        counter++;
        countP.innerHTML = counter;

        if(counter >= 10)
        {
            clearInterval(updateCount);
        }

        /* 1000 ms */ 
    /*
    }, 1000);
    */


};

const showDetails = (event) =>
{

    /* FOR TESTING: console.log(event.target.innerHTML); */

    console.log(event.target.getAttribute("rel"));


};


/* - Function Callers:  */ 

document.getElementById("btn-loop-nums").onclick = numLoop;
document.getElementById("btn-count").onclick = startStopCount;

/* Accesses all li items in toy domain and call function for each of them when clicked */ 
document.querySelectorAll("#toys li").forEach((li)=>
{
    /* FOR TESTING: console.log(li); */

    li.onclick = showDetails;

});