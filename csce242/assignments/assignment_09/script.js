/*
    Created by Chrissy Dobrowolski 
    Assignment 9- Loops 
    CSCE 242- 001 
    Due: 2.18.2024 

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


/* - Exercise 1 (Bounce Ball) content: */ 

let ballStartStopClick = document.getElementById("ball-start-stop-click");
let ball = document.getElementById("e-1-image");
const root = document.querySelector(":root");
root.style.setProperty("--ball-top", "0px");
pos = 0;


const clickStartStop = (event) =>
{
    /* FOR TESTING: console.log("Start button clicked"); */

    if(event.target.innerHTML == "Start")
    {
        /* FOR TESTING: console.log("Start is working") */
        
        ballStartStopClick.innerHTML = "Stop";

        
        bounceBall = setInterval(() =>
        {

            root.style.setProperty('--ball-top','0px');

            if(root.style.getPropertyValue('--ball-top') == '0px')
            {   
                pos += 1;
                root.style.setProperty("--ball-top", pos + "px");

                console.log(root.style.getPropertyValue('--ball-top'));

            }

            
            if(root.style.getPropertyValue('--ball-top') == '425px')
            {

                clearInterval(bounceBall);

                bounceBallUp = setInterval(() =>
                {
                    pos -= 1;
                    root.style.setProperty("--ball-top", pos + "px");

                    console.log(root.style.getPropertyValue('--ball-top'));

                }, 1);

            }
            

            const clickStartStop = (event) =>
            {
                /* FOR TESTING: console.log("Start button clicked"); */
            
                if(event.target.innerHTML == "Start")
                {
                    /* FOR TESTING: console.log("Start is working") */
                    
                    ballStartStopClick.innerHTML = "Stop";
            
                    
                    bounceBall = setInterval(() =>
                    {
            
                        root.style.setProperty('--ball-top','0px');
            
                        if(root.style.getPropertyValue('--ball-top') == '0px')
                        {   
                            pos += 1;
                            root.style.setProperty("--ball-top", pos + "px");
            
                            console.log(root.style.getPropertyValue('--ball-top'));
            
                        }
            
                        
                        if(root.style.getPropertyValue('--ball-top') == '425px')
                        {
            
                            clearInterval(bounceBall);
            
                            bounceBallUp = setInterval(() =>
                            {
                                pos -= 1;
                                root.style.setProperty("--ball-top", pos + "px");
            
                                console.log(root.style.getPropertyValue('--ball-top'));
            
                            }, 1);
            
                        }
            
                    }, 1);
            
                }
            
                else /* if(event.target.innerHTML == "Stop") */
                {
                    /* FOR TESTING: console.log("Stop is working") */
                    
                    ballStartStopClick.innerHTML = "Start";
            
                    clearInterval(bounceBall);
            
                }
            
            };

        }, 1);

    }

    else /* if(event.target.innerHTML == "Stop") */
    {
        /* FOR TESTING: console.log("Stop is working") */
        
        ballStartStopClick.innerHTML = "Start";

        clearInterval(bounceBall);

    }

};



/* - Exercise 2 (Yoga Fun) content: */  

const showDescription = (event) =>
{

    /* FOR TESTING: console.log(event.target.getAttribute("rel")); */

    description = event.target.getAttribute("rel");
    /* console.log(event.target.getAttribute("rel")); */

    
    if(description == "Triangle Pose")
    {
        /* FOR TESTING: console.log("Description 1 showing"); */

        document.getElementById("description-1").innerHTML = description;

    }
    
    if(description == "Downward Facing Dog")
    {
        /* FOR TESTING: console.log("Description 2 showing"); */

        /* FOR TESTING: console.log("Description 2 showing"); */

        document.getElementById("description-2").innerHTML = description;

    }

    if(description == "Tree Pose")
    {
        /* FOR TESTING: console.log("Description 3 showing"); */

        document.getElementById("description-3").innerHTML = description;

    }

    if(description == "One Leg Forward Bend II (sort of)")
    {
        /* FOR TESTING: console.log("Description 4 showing"); */

        document.getElementById("description-4").innerHTML = description;

    }

    if(description == "Eagle Pose (sort of)")
    {
        /* FOR TESTING: console.log("Description 5 showing"); */

        document.getElementById("description-5").innerHTML = description;

    }

    if(description == "Warrior Pose II")
    {
        /* FOR TESTING: console.log("Description 6 showing"); */

        document.getElementById("description-6").innerHTML = description;

    }

    if(description == "One Leg Forward Bend (sort of)")
    {
        /* FOR TESTING: console.log("Description 7 showing"); */

        document.getElementById("description-7").innerHTML = description;

    }

    if(description == "Easy Warrior Pose III")
    {
        /* FOR TESTING: console.log("Description 8 showing"); */

        document.getElementById("description-8").innerHTML = description;

    }

}



/* - Function callers: */ 

document.getElementById("toggle-triangle-down").onclick = hideDownTriangleToggle;
document.getElementById("toggle-triangle-up").onclick = hideUpTriangleToggle;

document.getElementById("nav-exercise-1").onclick = showExercise1;
document.getElementById("nav-exercise-2").onclick = showExercise2;

document.getElementById("ball-start-stop-click").onclick = clickStartStop;



document.querySelectorAll("#yoga-poses img").forEach((img) =>
{

    /* FOR TESTING: console.log(img); */

    img.onclick = showDescription;    

});




/* REJECTED CODE: */ 

    /* ballStartStopClick.innerHTML = "Stop"; */

    /* ------------------------- */

    
    /* 

    let posPos = 0;
    let negPos = 0;

    */
    
    // const clickStartStop = (event) =>
    // {
    //     /* FOR TESTING: console.log("Start button clicked"); */

    //     event.preventDefault();


    //     let bounceDown;
    //     bounceDown = setInterval(() =>
    //     {

    //         pos += 1;
    //         root.style.setProperty("--ball-top", pos + "px");
            
    //         /* FOR TESTING: */
    //         console.log(root.style.getPropertyValue('--ball-top'));

    //     }, 1);


    //     let bounceUp;
    //     bounceUp = setInterval(() =>
    //     {
    //         pos -= 1;
    //         root.style.setProperty("--ball-top", pos + "px");

    //         /* FOR TESTING: */
    //         console.log(root.style.getPropertyValue('--ball-top'));

    //     }, 1);


    //     if(event.target.innerHTML == "Start")
    //     {
    //         /* FOR TESTING: console.log("Start is working") */
            
    //         ballStartStopClick.innerHTML = "Stop";

    //         if(root.style.getPropertyValue('--ball-top') <= '0px')
    //         {
                
    //             bounceDown;
                

    //         }

    //         else if(root.style.getPropertyValue('--ball-top') >= '100px')
    //         {
                

    //             bounceUp;
                

    //         }

    //     }

    //     else /* if(event.target.innerHTML == "Stop") */
    //     {
    //         /* FOR TESTING: console.log("Stop is working") */
            
    //         ballStartStopClick.innerHTML = "Start";

    //         clearInterval(bounceDown);
    //         clearInterval(bounceUp);

    //         /* clearInterval(bounceBall); */

    //     }

    
    // if(root.style.getPropertyValue('--ball-top') >= '100px')
    // {
    //     bounceUp;

    // }

    // let bounceBall;

    // bounceBall = setInterval(() =>
    // {

    //     /* When REACHES 100px, ACTIVATE function to go back up, when REACHES 0px, ACTIVATE FUNCTION to go down */ 
    

    /* ------------------------- */


    /* Inside Inner ClickStartStop: */ 

        /* 
        else if(root.style.getPropertyValue('--ball-top') >= '100px')
        {

            pos -= 1;

            root.style.setProperty("--ball-top", pos + "px");

        }
        */

        // if(root.style.getPropertyValue('--ball-top') >= '100px')
        // {
        //     /* FOR TESTING: console.log("Working") */

        //     pos -= 1;

        //     root.style.setProperty("--ball-top", pos + "px");
            
        //     /* clearInterval(bounceball); */
        // }
        
    
    /* console.log(document.getElementById("e-1-image").style.getPropertyValue('top')); */
        /* console.log(ball.style.getPropertyValue('top')); */
    
        
        
    
            /* clearInterval(bounceball); */
        
    
    
    
        /* 
    
        TOGGLING TEXT DOESN'T WORK W/IF-STATMENTS: 
    
        if(ballStartStopClick.innerHTML = "Start")
        {
            console.log("Start is working")
            
            ballStartStopClick.innerHTML = "Stop";
    
        }
    
        else if(ballStartStopClick.innerHTML = "Stop")
        {
            console.log("Stop is working")
    
            ballStartStopClick.innerHTML = "Start";
    
        }
        */ 


    /* ------------------------- */

    /* Inside bounceBall: */

        /* 
        else if(root.style.getPropertyValue('--ball-top') >= '100px')
        {

            pos -= 1;

            root.style.setProperty("--ball-top", pos + "px");

        }
        */

    /* ------------------------- */
        

        // if(root.style.getPropertyValue('--ball-top') >= '100px')
        // {
        //     /* FOR TESTING: console.log("Working") */

        //     pos -= 1;

        //     root.style.setProperty("--ball-top", pos + "px");
            
        //     /* clearInterval(bounceball); */
        // }

        
        /* ------------------------- */


        /* Misc.: */

        /* console.log(document.getElementById("e-1-image").style.getPropertyValue('top')); */
    /* console.log(ball.style.getPropertyValue('top')); */

        /* clearInterval(bounceball); */
    
    /* 

    TOGGLING TEXT DOESN'T WORK W/IF-STATMENTS: 

    if(ballStartStopClick.innerHTML = "Start")
    {
        console.log("Start is working")
        
        ballStartStopClick.innerHTML = "Stop";

    }

    else if(ballStartStopClick.innerHTML = "Stop")
    {
        console.log("Stop is working")

        ballStartStopClick.innerHTML = "Start";

    }
    */ 

            
    //     // if(root.style.getPropertyValue('--ball-top') <= '0px')
    //     // {

    //     //     pos += 1;
    //     //     root.style.setProperty("--ball-top", pos + "px");

    //     //     /* FOR TESTING: */
    //     //     console.log(root.style.getPropertyValue('--ball-top'));

    //     //     /* FOR TESTING: */
            
    //     //     /* console.log(root.style.getPropertyValue('--ball-top')); */

    //     // }

        
    //     // else if(root.style.getPropertyValue('--ball-top') >= '100px')
    //     // {
    //     //     /* pos = 0; */
    //     //     pos -= 1;
    //     //     root.style.setProperty("--ball-top", pos + "px");

    //     //     /* FOR TESTING: */
            
    //     //     /* console.log(root.style.getPropertyValue('--ball-top')); */

    //     // }


    //     /* 
    //     if((root.style.getPropertyValue('--ball-top') >= '0px') || (root.style.getPropertyValue('--ball-top') < "100px"))
    //     {

    //         pos += 1;
    //         root.style.setProperty("--ball-top", pos + "px");

    //         /* FOR TESTING: */
            
    //         /*
    //         console.log(root.style.getPropertyValue('--ball-top'));

    //     }

    //     */
        

    //     /*
    //     if(root.style.getPropertyValue('--ball-top') == '100px')
    //     {

    //         clearInterval(setInterval);

    //         pos -= 1;
    //         root.style.setProperty("--ball-top", pos + "px");

    //     }
    //     */
        

    //     /* 
    //     if(root.style.getPropertyValue('--ball-top') == '100px')
    //     {

    //         clearInterval(bounceBall);

    //         pos -= 1;

    //         root.style.setProperty("--ball-top", pos + "px");

    //     }
    //     */

    //     /* 
    //     else if(root.style.getPropertyValue('--ball-top') >= '100px')
    //     {

    //         pos -= 1;

    //         root.style.setProperty("--ball-top", pos + "px");

    //     }
    //     */
    
        
    //     // if(root.style.getPropertyValue('--ball-top') >= '100px')
    //     // {
    //     //     /* FOR TESTING: console.log("Working") */

    //     //     pos -= 1;

    //     //     root.style.setProperty("--ball-top", pos + "px");
            
    //     //     /* clearInterval(bounceball); */
    //     // }


    // }, 1);


    /* console.log(document.getElementById("e-1-image").style.getPropertyValue('top')); */
    /* console.log(ball.style.getPropertyValue('top')); */

        /* clearInterval(bounceball); */

    /* 

    TOGGLING TEXT DOESN'T WORK W/IF-STATMENTS: 

    if(ballStartStopClick.innerHTML = "Start")
    {
        console.log("Start is working")
        
        ballStartStopClick.innerHTML = "Stop";

    }

    else if(ballStartStopClick.innerHTML = "Stop")
    {
        console.log("Stop is working")

        ballStartStopClick.innerHTML = "Start";

    }
    */ 

    // };

    /* ------------------------- */
        


/* NOTES: 

- Click ball-start-stop-click -> clickStartStop function: 
    IF event/ballStartStopClick text = Start 
        event/ballStartStopClick text = Stop AND set ball-top to 0 px 
            IF ball-top = 0px -> pos += 1 

*/ 