/*
    Edited by Chrissy Dobrowolski 
    Class Example 
    2.20.2024 
    CSCE 242- 001 
    
*/


// // Not count = 0 b/c querySelector starts at 1 
// let count = 1;

// const interval = setInterval(() =>
// {
//     // FOR TESTING: console.log("Hi");

//     // FOR TESTING: console.log(count);

//     // QuerySelectorAll() b/c want list of items 
//     const allSections = document.querySelectorAll(".items section");
//     allSections.forEach((section)=>
//     {
//         section.classList.remove("highlighted");

//         // Only querySelector() b/c just want one item 

//     });

//     if(count > allSections.length)
//     {
//         count = 1;
//         // OR could call clearInterval(interval); and return afterwards to stop 

//     }

//     // document.querySelector(`.items section:nth-child(3)`).classList.add("highlighted");
//     document.querySelector(`.items section:nth-child(${count})`).classList.add("highlighted");

//     count++;

// }, 500);


// Another way of doing it: 
//- No need for global variable, BUT other method is easier to understand conceptually 


const interval = setInterval(()=>
{
    //FOR TESTING: console.log("Hi");

    const currentSection = document.querySelector(".items section.highlighted"); //OR could just be (".items highlighted")
    let nextSection = currentSection.nextElementSibling;

    if(nextSection == null)
    {
        // Selects first one again b/c querySelector selects first 
        nextSection = document.querySelector(".items section");
        
    }

    currentSection.classList.remove("highlighted");
    nextSection.classList.add("highlighted");

}, 500);