/*
    Edited by Chrissy Dobrowolski 
    Class Example 
    2.29.2024 
    CSCE 242- 001 
    
*/


//"https://portiaportia.github.io/json/shoes.json"

// DOING IN MULTIPLE LINES: 

// async -> asynchronous 
const getShoes = async() =>
{
    const url = "https://portiaportia.github.io/json/shoes.json";

    // Try to access data, if goes wrong, catch it and display error 
    try
    {
        // await -> waiting for info from url (asynchronous waiting) 
        const response = await fetch(url);

        // .json() -> returns in json format 
        return response.json();

    }
    catch(error)
    {
        console.log(error);

    }

};

// Also asynchronous b/c waiting on getShoes function 
const showShoes = async() =>
{
    const shoes = await getShoes();

    shoes.forEach((shoe) => 
    {
        // FOR TESTING: console.log(shoe.name);

        document.getElementById("shoes-section").append(getShoeSection(shoe));

    });

};

const getShoeSection = (shoe) => 
{
    const section = document.createElement("section");
    // FOR TESTING: section.innerHTML = shoe.name;
    const h3 = document.createElement("h3");
    // Know "shoe.name" from JSON file 
    h3.innerHTML = shoe.name;
    section.append(h3);
    
    const brandP = document.createElement("p");
    brandP.innerHTML = shoe.brand;
    section.append(brandP);

    const ul = document.createElement("ul");
    section.append(ul);
    shoe.reviews.forEach((review) => 
    {
        // FOR TESTING: console.log(review);
        const li = document.createElement("li");
        li.innerHTML = review;
        ul.append(li);

    });

    return section;

}

showShoes();



/* 

- Notes: 
    - Synchronous: 
        - a -> b -> c 

    - Asynchronous: 
        - In the background; waiting to get something from somewhere else 
        - e.g. 
            - a and b can happen at same time; then c can happen 
            - Squiggly line showing spelling errors in Word; spell check happening in background and not prompting you in any way 

        - AJAX: Asychronous Javascript and XML 
        - JSON: Javascript Object Notation 
    

*/