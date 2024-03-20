/*
    Created by Chrissy Dobrowolski 
    Assignment 11- Classes  
    CSCE 242- 001 
    Due: 3.1.2024 

*/


class Swallow
{
    constructor(speciesName, conservationStatus, habitat, diet, funFact, image)
    {
        // NOTE: this.parameter is setting paramter equal to variable of same name 
        this.speciesName = speciesName;
        this.conservationStatus = conservationStatus;
        this.habitat = habitat;
        this.diet = diet;
        this.funFact = funFact;
        this.image = image;

    }

    get swallowSection()
    {
        const swallowSection = document.createElement("section");
        swallowSection.classList.add("swallow-preview");
        swallowSection.classList.add("flex-columns");


        const speciesNameh3 = document.createElement("h3");
        speciesNameh3.innerHTML = this.speciesName;
        swallowSection.append(speciesNameh3);

        const imageSection = document.createElement("section");
        imageSection.classList.add("swallow-image")
        const image = document.createElement("img");
        image.src = "images/" + this.image;
        imageSection.append(image);
        swallowSection.append(imageSection);


        return swallowSection;

    }

    get expandedSwallowSection()
    {        
        const expandedSwallowSection = document.createElement("section");
        expandedSwallowSection.classList.add("swallow-expanded-info");
        expandedSwallowSection.classList.add("hidden");
        // this.swallowSection.append(expandedSwallowSection);

        expandedSwallowSection.append(this.swallowInfo("Species Name", this.speciesName));
        expandedSwallowSection.append(this.swallowInfo("Conservation Status", this.conservationStatus));
        expandedSwallowSection.append(this.swallowInfo("Habitat", this.habitat));
        expandedSwallowSection.append(this.swallowInfo("Diet", this.diet));
        expandedSwallowSection.append(this.swallowInfo("Fun Fact", this.funFact));
        expandedSwallowSection.append(this.swallowImage(this.image));

        
        return expandedSwallowSection;

    }
    
    // Returns swallow species name along with additional information 
    swallowInfo(swallowParameter, info)
    {
        const infoP = document.createElement("p");
        infoP.innerHTML = `${swallowParameter}: ${info}`;

        return infoP;

    }

    swallowImage(swallowImage)
    {
        const image = document.createElement("img");
        image.src = "images/" + `${swallowImage}`;

        return image;

    }

}

const swallows = [];

//            constructor(speciesName, conservationStatus, habitat, diet, funFact, image)
swallows.push(new Swallow("Purple Martin", "Low Concern", "Lakes and ponds", "Insects", 'During late summer, these swallows gather in such large numbers that you can see them on a weather radar map! (Source: https://www.allaboutbirds.org/guide/Purple_Martin)', "Purple_Martin_Image.jpg"));
swallows.push(new Swallow("Tree Swallow", "Low Concern", "Lakes and ponds", "Insects", 'These swallows can gather in massive numbers during migration and wintering season. (Source: https://www.allaboutbirds.org/guide/Tree_Swallow)', "Tree_Swallows_Image.jpg"));
swallows.push(new Swallow("Barn Swallow", "Low Concern", "Grasslands", "Insects", 'Sometimes parents will get help in feeding their young from previously-hatched older siblings. (Source: https://www.allaboutbirds.org/guide/Barn_Swallow)', "Barn_Swallows_Image.jpg"));
swallows.push(new Swallow("Violet-green Swallow", "Low Concern", "Open woodlands", "Insects", 'These small birds have a flight speed that can reach 28 mph-- comparable to the rapid Peregrine Falcon! (Source: https://www.allaboutbirds.org/guide/Violet-green_Swallow; https://www.allaboutbirds.org/guide/Violet-green_Swallow/id)', "Violet-green_Swallow_Image.jpg"));

swallows.forEach((swallow) => 
{
    document.getElementById("swallow-container").append(swallow.swallowSection);
    document.querySelector(".swallow-preview").append(swallow.expandedSwallowSection);
    
    document.querySelectorAll(".swallow-preview").forEach((preview)=>
    {
        // console.log("Test");

        preview.append(swallow.expandedSwallowSection);

    });

    

    // document.querySelectorAll(".swallow-preview :first-child").append(swallow.expandedSwallowSection);


    // document.querySelectorAll(".swallow-preview :first-child").forEach((preview)=>
    // {
    //     console.log("Test");

    //     preview.append(swallow.expandedSwallowSection);


    // });


    // document.querySelectorAll(".swallow-preview").forEach((preview) => 
    // {
    //     preview.append(swallow.expandedSwallowSection);


    // });
    
    
    // append(swallow.expandedSwallowSection);
    
    

});


document.querySelectorAll(".swallow-preview").forEach((preview) => 
{
    preview.onclick = (event) =>
    {
        // console.log("Clicked");

        document.getElementById("modal").style.display = "block";

        const expandedInfoSection = document.getElementById("expanded-info-section");
        expandedInfoSection.innerHTML = "";

        // document.querySelector("#expanded-info-section").innerHTML = "TEST";
        const expandedSpeciesNameh3 = document.createElement("h3");
        expandedSpeciesNameh3.innerHTML = preview.querySelector("h3").innerHTML;
        expandedInfoSection.append(expandedSpeciesNameh3);

        // expandedInfoSection.append(preview.querySelector("swallow-expanded-info"));
        const expandedInfo = event.currentTarget.closest("#swallow-container").querySelectorAll(".swallow-expanded-info");

        // console.log(expandedInfo);

        expandedInfo.forEach((info) => 
        {
            const newExpandedInfo = document.createElement("p");
            newExpandedInfo.classList.add("expanded-info");

            expandedInfoSection.append(newExpandedInfo);

        });




        // if(expandedInfo.querySelector("p").includes("Purple Martin"))
        // {
        //     console.log("Purple Martin clicked");

        // }

        document.querySelector("#modal-content img").src = event.currentTarget.querySelector("img").src;
        




    
        

        // document.querySelector("#modal-content expanded-info-section").append(event.expandedSwallowSection);
        
        
        // document.querySelector(".swallow-expanded-info").classList.remove("hidden");
        

        // const expandedSpeciesNameh3 = document.createElement("h3");
        // expandedSpeciesNameh3.innerHTML = section.querySelector("h3").innerHTML;

        // const expandedInfoP = document.createElement("p");
        
        // expandedInfoP.forEach((p) => 
        // {
        //     const newExpandedInfo = document.createElement("p");
        //     newExpandedInfo.classList.add("expanded-info");
        //     expandedInfoSection.append(newExpandedInfo);

        // });

    };

});


document.getElementById("modal-close").onclick = () =>
{
    // console.log("Clicked");
    document.getElementById("modal").style.display = "none";

}