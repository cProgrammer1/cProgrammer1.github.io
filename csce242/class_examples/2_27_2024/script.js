/*
    Edited by Chrissy Dobrowolski 
    Class Example 
    2.27.2024 
    CSCE 242- 001 
    
*/


class Dog 
{
    constructor(title, breed, color, age, size, pic)
    {
        this.title = title;
        this.breed = breed;
        this.color = color;
        this.age = age;
        this.size = size;
        this.pic = pic;

    }

    get item()
    {
        const section = document.createElement("section");
        section.classList.add("dog");

        const h3 = document.createElement("h3");
        // Any attribute in this class is "this.___"
        h3.innerHTML = this.title;
        section.append(h3);

        // "a" -> anchor; styling it here 
        const arrow = document.createElement("a");
        arrow.href = "#";
        // HTML entity in quotes represents an arrow 
        arrow.innerHTML = "&#x2964;"
        arrow.classList.add("arrow");
        h3.append(arrow);
        arrow.onclick = this.expandContract;

        const columns = document.createElement("section");
        columns.classList.add("columns");
        section.append(columns);

        const imageSection = document.createElement("section");
        columns.append(imageSection);
        const image = document.createElement("img");
        image.src = "images/" + this.pic;
        imageSection.append(image);

        const moreSection = document.createElement("section");
        moreSection.classList.add("hidden", "more");
        moreSection.append(this.paragraph("Breed", this.breed));
        moreSection.append(this.paragraph("Color", this.color));
        moreSection.append(this.paragraph("Age", this.age));
        columns.append(moreSection);

        return section;

    }

    expandContract(event)
    {
        // FOR TESTING: console.log("Expanding/Contracting");

        // closest -> finds the closest specified section, etc.
        // - closest -> go out to find ".dog"; querySelector -> go back in to find "more"
        const section = event.currentTarget.closest(".dog").querySelector("more");

        if(section.classList.contains("hidden"))
        {
            event.currentTarget.innerHTML = "&#x2962;";

        }
        else
        {
            event.currentTarget.innerHTML = "&#x2964;";

        }

        section.classList.toggle("hidden");

    };

    // Helper method 
    paragraph(title, info)
    {
        const p = document.createElement("p");
        p.innerHTML = `<strong>${title}:</strong> ${info}`

        return p;

    }

}

// .push -> adds to array list 
const dogs = [];
dogs.push(new Dog("Coco", "Morkie", "Black", 5, "small", "yorkie.jpg"));
dogs.push(new Dog("Sam", "Golden Retriever", "Yellow", 1, "med", "golden-retriever.jpg"));
dogs.push(new Dog("Gerald", "Pit Bull", "White", 3, "lg", "pitt-bull.jpg"));

dogs.forEach((dog) => 
{
    document.getElementById("dog-list").append(dog.item);


});