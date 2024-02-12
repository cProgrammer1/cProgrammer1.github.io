/*
    Created by Chrissy Dobrowolski 
    Assignment 8- Conditionals 
    CSCE 242- 001 
    Due: 2.11.2024 

*/


/* Functions: */ 

/* - Triangle toggle menu: */ 

const hideDownTriangleToggle = () =>
{
    document.getElementById("toggle-triangle-down").classList.add("hidden");
    document.getElementById("toggle-triangle-up").classList.remove("hidden");
    
    document.getElementById("nav-exercise-1").classList.remove("hidden");
    document.getElementById("nav-exercise-2").classList.remove("hidden");

}

const hideUpTriangleToggle = () =>
{
    document.getElementById("toggle-triangle-up").classList.add("hidden");
    document.getElementById("toggle-triangle-down").classList.remove("hidden");

    document.getElementById("nav-exercise-1").classList.add("hidden");
    document.getElementById("nav-exercise-2").classList.add("hidden");

}


/* - Exercise nav: */ 

const showExercise1 = () =>
{
    document.getElementById("exercise-1-content").classList.remove("hidden");
    document.getElementById("exercise-2-content").classList.add("hidden")
}

const showExercise2 = () =>
{
    document.getElementById("exercise-2-content").classList.remove("hidden");
    document.getElementById("exercise-1-content").classList.add("hidden")
}


/* - Exercise 1 (Enter Command) content: */ 

const showExercise1Images = () =>
{
    let userCommand = document.getElementById("user-command").value.toLowerCase().trim();

    /* FOR TESTING: console.log(userCommand); */

    if(userCommand == "b")
    {
        document.getElementById("e_1_image").src = "images/(e_1)_enter_command/read.jpg";
    }

    else if(userCommand == "c")
    {
        document.getElementById("e_1_image").src = "images/(e_1)_enter_command/clown.jpg";
    }

    else if(userCommand == "p")
    {
        document.getElementById("e_1_image").src = "images/(e_1)_enter_command/birthday.jpg";
    }
    
    else if(userCommand == "r")
    {
        document.getElementById("e_1_image").src = "images/(e_1)_enter_command/rain.jpg";
    }

    else if(userCommand == "s")
    {
        document.getElementById("e_1_image").src = "images/(e_1)_enter_command/shovel.jpg";
    }

    else if(userCommand == "w")
    {
        document.getElementById("e_1_image").src = "images/(e_1)_enter_command/work.jpg";
    }

}


/* - Exercise 2 (Yoga Slider) content: */  

const showExercise2Images = () =>
{
    let sliderValue = document.getElementById("slider-id").value;
    
    /* FOR TESTING: console.log(sliderValue); */

    if(sliderValue >= 1 && sliderValue < 12.5)
    {
        document.getElementById("e_2_image").src = "images/(e_2)_yoga_slide/yoga1.jpg";
    }

    else if(sliderValue >= 12.5 && sliderValue < 25)
    {
        document.getElementById("e_2_image").src = "images/(e_2)_yoga_slide/yoga2.jpg";
    }

    else if(sliderValue >= 25 && sliderValue < 37.5)
    {
        document.getElementById("e_2_image").src = "images/(e_2)_yoga_slide/yoga3.jpg";
    }

    else if(sliderValue >= 37.5 && sliderValue < 50)
    {
        document.getElementById("e_2_image").src = "images/(e_2)_yoga_slide/yoga4.jpg";
    }

    else if(sliderValue >= 50 && sliderValue < 62.5)
    {
        document.getElementById("e_2_image").src = "images/(e_2)_yoga_slide/yoga5.jpg";
    }

    else if(sliderValue >= 62.5 && sliderValue < 75)
    {
        document.getElementById("e_2_image").src = "images/(e_2)_yoga_slide/yoga6.jpg";
    }

    else if(sliderValue >= 75 && sliderValue < 87.5)
    {
        document.getElementById("e_2_image").src = "images/(e_2)_yoga_slide/yoga7.jpg";
    }

    else if(sliderValue >= 87.5 && sliderValue <= 100)
    {
        document.getElementById("e_2_image").src = "images/(e_2)_yoga_slide/yoga8.jpg";
    }

}


/* - Function callers: */ 

document.getElementById("toggle-triangle-down").onclick = hideDownTriangleToggle;
document.getElementById("toggle-triangle-up").onclick = hideUpTriangleToggle;

document.getElementById("nav-exercise-1").onclick = showExercise1;
document.getElementById("nav-exercise-2").onclick = showExercise2;

document.getElementById("user-command").onkeyup = showExercise1Images;
document.getElementById("slider-id").oninput = showExercise2Images;