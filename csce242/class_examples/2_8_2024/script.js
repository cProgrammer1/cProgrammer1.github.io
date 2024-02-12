/*
    Created by Chrissy Dobrowolski 
    Class Example 
    2.8.2024 
    CSCE 242- 001 
    
*/


/* FOR TESTING: console.log("hello"); */ 

/* Functions: */ 

const updateThermometer = () =>
{
    /* FOR TESTING: console.log("updating"); */

    const goal = 10000;
    const funds = document.getElementById("txt-funds").value;
    /* FOR TESTING: console.log(funds); */ 

    /* NOT .value b/c just getting span element */ 
    const errorSpan = document.getElementById("funds-error");
    errorSpan.innerHTML = "";

    const therm = document.getElementById("thermometer")
    document.querySelector(":root").style.setProperty('--funds', "0%");

    /* - Error checking: */ 
    if(isNaN(funds))
    {
        errorSpan.innerHTML = "* Not a valid number";

        return;
    }
    else if(funds < 0)
    {
        errorSpan.innerHTML = "* Negative number";
        
        return;
    }

    const percent = (funds / goal) * 100;
    document.querySelector(":root").style.setProperty('--funds', percent + "%");

};

const evalForm = (event) => 
{
    /* Prevents default actions of form */ 
    event.preventDefault();

    /* FOR TESTING: console.log("test") */ 

};


/* - Function callers: */ 

document.getElementById("btn-cont").onclick = updateThermometer;
document.getElementById("my-form").onsubmit = evalForm;