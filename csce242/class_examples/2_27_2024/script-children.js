/*
    Edited by Chrissy Dobrowolski 
    Class Example 
    2.27.2024 
    CSCE 242- 001 

    - NOT WORKING; SEE POSTED EXAMPLE 
    
*/


class Child
{
    constructor(firstName, lastName, picture, grade)
    {
        // MUST DO for every single attribute 
        this.firstName = firstName;
        this.lastName = lastName;
        this.picture = picture;
        this.grade = grade;

    }

    get tableRow()
    {
        const tr = document.createElement("tr");
        tr.append(this.tableColumn(this.firstName));
        tr.append(this.tableColumn(this.lastName));
        tr.append(this.tableColumn(this.grade));
        
        // bind --> "this" inside displayDetails will be the child 
        tr.onclick = this.displayDetails.bind(this);

        // Equivalent to console.log in displayDetails, but within functions' scope / embedded 
        /* 
        tr.onclick = () => 
        {
            console.log(this.firstName);
        }

        return tr;
        */

    }


    // Provide data and function gives table column (td) with data 
    tableColumn(data)
    {
        const td = document.createElement("td");
        td.innerHTML = data;

        return td;

    }

    displayDetails()
    {
        // Normally, "this" is the child, but b/c in onclick b/c in nested function w/out access to column 
        //- Need to pass over "this" to displayDetails 
        // FOR TESTING: console.log("Displaying");
        // FOR TESTING: console.log(this.firstName);

        const section = document.getElementById("child-details");
        section.innerHTML = "";

        const img = document.createElement("img");
        img.src = "images/" + this.picture;
        section.append(img);

    }

}

const children = [];
children.push(new Child("Amy", "Smith", "amy.jpg", 2));
children.push(new Child("Bobby", "Carrelson", "bobby.png", 3));
children.push(new Child("Collin", "Carrelson", "carl.png", 1));
children.push(new Child("Dave", "Marks", "dave.jpg", 1));
children.push(new Child("Erin", "Young", "erin.jpg", 1));

children.forEach((child) => 
{
    // Adds row to table 
    document.getElementById("children-table").append(child.tableRow);


});