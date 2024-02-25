/*
    Created by Chrissy Dobrowolski 
    Class Example 
    2.20.2024 
    CSCE 242- 001 
    
*/

/* Global(?) variables: */ 

/* Array -> [] */
let toys = ["drum", "ball", "rope", "balloon", "tire"];

let toyPrices = [];
// Associative array -> [] = ____; "" -> string value is index 
toyPrices["barbie"] = 7.54;
toyPrices["doll house"] = 86.23;
toyPrices["slide"] = 34.23;
toyPrices["ken"] = 2.3;
toyPrices["bike"] = 5.6;

//FOR TESTING: console.log(toyPrices.length);


/* Functions: */

const showToys = () =>
{
    // FOR TESTING: console.log("Showing toys");

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    // for 'in' loops: have index (i) go through numbers 
    
    // for(let i in toys)
    // {
    //     console.log(toys[i]);

    // }

    // for 'each': tell what going to do (function) for each of specified things 
    // - For every toy, will execute this function 
    // 1) toys.forEach(()=>{});
    // 2) toys.forEach((toy)=>{}); // Inside element can be called anything, but good practice to do array as plural and element inside function as singular 
    // 3) 
    //    toys.forEach((toy)=>{

    //      console.log(toy);

    //    });

    toys.forEach((toy)=>
    {
        // FOR TESTING: console.log(toy);

        const p = document.createElement("p");

        p.innerHTML = toy; // In other loop -> toy[i]

        resultDiv.append(p);

    });

};

const addToy = () =>
{
    // FOR TESTING: console.log("adding a toy");

    const toy = document.getElementById("txt-toy").value;

    // Analagous to arrayList in Java; can grow in length 
    // - .add in Java; .push in JavaScript 
    toys.push(toy);

    showToys();

};

const showToysTable = () =>
{
    // FOR TESTING: console.log("Showing table");

    const toyTable = document.getElementById("toy-table");

    for(let toy in toyPrices)
    {
        // REMEMBER designations for rows and columns for table 
        // tr -> table row 
        const tr = document.createElement("tr");
        // td -> table column 
        const td = document.createElement("td");
        td.innerHTML = toy;

        // Attaches rows and columns 
        tr.append(td);

        // Attaches to div in HTML 
        toyTable.append(tr);

        // Unnamed -> anonymous function 
        
        tr.onclick = () => 
        {
            // FOR TESTING: console.log("Row clicked");

            // console.log(`You clicked ${toyPrices[toy]}.`);

            const descP = document.getElementById("toy-description");
            descP.innerHTML = `${toy} costs $${toyPrices[toy]}`;

        };

        // OR: tr.onclick = showPrice.bind(null, toy); 
        // - Use bind if function is really long, but if short just embbed it like above 
        // - INCORRECT: 
        //  - Paranthesis already calls function; not tied to onclick 
        //    tr.onclick = showPrice(toy);

    }

};


// OR: 
//  const showPrice = (toy) =>
//  {
//      console.log(toy);

//  };


/* - Function Callers: */ 

showToys();
document.getElementById("button-add-toy").onclick = addToy;
showToysTable();