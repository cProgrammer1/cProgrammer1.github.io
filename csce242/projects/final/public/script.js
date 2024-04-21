/*
    Created by Chrissy Dobrowolski 
    Semester Project Part 7: BackEnd Implementation 
    CSCE 242- 001 
    Due 4.21.2024 
    
*/


// Function for displaying errors 
errorPrompt = (error) =>
{
    const errorPrompt = document.getElementById("error-prompt");
    errorPrompt.innerHTML = "";
    
    const errorPromptText = document.createElement("h5");
    errorPromptText.innerHTML = "ERROR: ", error;
    errorPrompt.append(errorPromptText);

    errorPrompt.classList.remove("hidden");

}

// Retrieves bird data 
const getBirds = async() =>
{
    try
    {
        // let response = await fetch("http://localhost:3000/api/birds");
        // let response = await fetch("https://csce242assignment18server.onrender.com/api/birds");
        return (await fetch("api/birds/")).json();

    }
    catch(error)
    {
        console.log(error);
        // errorPrompt(result.error);


        return "";

    }

};


// Shows birds 
const showBirds = async() =>
{
    birdsJSON = await getBirds();

    console.log(birdsJSON);

    const birdsDiv = document.getElementById("birds");
    birdsDiv.innerHTML = "";

    if(birdsJSON == "")
    {
        birdsJSON.innerHTML = "There are no birds to display"
    

        return;

    }

    const birdsContainer = document.createElement("section");
    birdsContainer.classList.add("birds-container");
    birdsDiv.append(birdsContainer);


    let birdsSection;

    for(let i=0; i<3; i++)
    {
        birdsSection = document.createElement("section");
        birdsSection.classList.add(`bird-section${i}`);
        birdsContainer.append(birdsSection);

    }

    const smallBirdSection = document.querySelector(".bird-section0");
    smallBirdSection.classList.add("small-bird-section");
    console.log(smallBirdSection);

    const mediumBirdSection = document.querySelector(".bird-section1");
    mediumBirdSection.classList.add("medium-bird-section");

    const largeBirdSection = document.querySelector(".bird-section2");
    largeBirdSection.classList.add("large-bird-section");


    // Sorts birds into their respective columns by size 

    birdsJSON.forEach((bird) => 
    {
        if(bird.size == "Small")
        {
            const constBirdSpecies = document.createElement("h3");
            constBirdSpecies.innerHTML = bird.species;
            smallBirdSection.append(constBirdSpecies);

            const birdImage = document.createElement("img");
            birdImage.src = "images/" + bird.image;
            birdImage.classList.add("initial-image-preview");

            const BirdPhotoCredits = document.createElement("h4");
            BirdPhotoCredits.innerHTML = bird.photo_credits;
            smallBirdSection.append(BirdPhotoCredits);

            // Appends to smallBirdSection 
            smallBirdSection.append(birdImage);

            birdImage.onclick = (event) =>
            {
                console.log("Clicked bird");

                openBirdsModal("expanded-image-section");
                openBirdsModal("expanded-info-section");

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";

                
                const expandedBirdSpeciesh2 = document.createElement("h2");
                expandedBirdSpeciesh2.classList.add("inline");
                expandedBirdSpeciesh2.innerHTML = bird.species;
                expandedInfoSection.append(expandedBirdSpeciesh2);

                const editPencilLink = document.createElement("a");
                editPencilLink.innerHTML = "&#9998;";
                expandedInfoSection.append(editPencilLink);
                editPencilLink.id = "edit-pencil-image";

                const deleteXLink = document.createElement("a");
                deleteXLink.innerHTML = "X";
                expandedInfoSection.append(deleteXLink);
                deleteXLink.id = "delete-x-link";


                const expandedBirdSizeP = document.createElement("p");
                expandedBirdSizeP.innerHTML = bird.size;
                expandedInfoSection.append(expandedBirdSizeP);

                const expandedBirdCharacteristicsTitle = document.createElement("h3")
                expandedBirdCharacteristicsTitle.innerHTML = "Characteristics:"
                expandedInfoSection.append(expandedBirdCharacteristicsTitle);

                const expandedBirdCharacteristicsUl = document.createElement("ul");
                
                for(let i=0; i<bird.characteristics.length; i++)
                {
                    const expandedBirdCharacteristicsP = document.createElement("li");

                    expandedBirdCharacteristicsP.append(bird.characteristics[i]);
                    
                    expandedBirdCharacteristicsUl.append(expandedBirdCharacteristicsP);
                    
                };
                
                expandedInfoSection.append(expandedBirdCharacteristicsUl);


                const expandedBirdDietP = document.createElement("p");
                expandedBirdDietP.innerHTML = bird.diet;
                expandedInfoSection.append(expandedBirdDietP);

                const expandedBirdWhereP = document.createElement("p");
                expandedBirdWhereP.innerHTML = bird.where_USC;
                expandedInfoSection.append(expandedBirdWhereP);

                const expandedBirdFactP = document.createElement("p");
                expandedBirdFactP.innerHTML = bird.fun_fact;
                expandedInfoSection.append(expandedBirdFactP);

                const expandedBirdInfoCreditsP = document.createElement("p");
                expandedBirdInfoCreditsP.innerHTML = bird.info_credits;
                expandedInfoSection.append(expandedBirdInfoCreditsP);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedBirdImage = document.createElement("img");
                expandedBirdImage.classList.add("expanded-bird-image");
                expandedBirdImage.src = "images/" + bird.image;
                expandedImageSection.append(expandedBirdImage);

                const expandedBirdPhotoCreditsP = document.createElement("p");
                expandedBirdPhotoCreditsP.innerHTML = bird.photo_credits;
                expandedInfoSection.append(expandedBirdPhotoCreditsP);

                editPencilLink.onclick = showAddEditBirdForm;
                
                deleteXLink.onclick = (event) => 
                {
                    event.preventDefault();
                    console.log("deleteXLink clicked")

                    deleteBirdPrompt(bird);

                } 

                populateAddEditBirdForm(bird);

            };

        }

        if(bird.size == "Medium")
        {
            constBirdSpecies = document.createElement("h3");
            constBirdSpecies.innerHTML = bird.species;
            mediumBirdSection.append(constBirdSpecies);

            const birdImage = document.createElement("img");
            birdImage.src = "images/" + bird.image;
            birdImage.classList.add("initial-image-preview");

            const BirdPhotoCredits = document.createElement("h4");
            BirdPhotoCredits.innerHTML = bird.photo_credits;
            mediumBirdSection.append(BirdPhotoCredits);

            // Appends to mediumBirdSection 
            mediumBirdSection.append(birdImage);

            birdImage.onclick = (event) =>
            {
                console.log("Clicked bird");

                openBirdsModal("expanded-image-section");
                openBirdsModal("expanded-info-section");

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";

                
                const expandedBirdSpeciesh2 = document.createElement("h2");
                expandedBirdSpeciesh2.classList.add("inline");
                expandedBirdSpeciesh2.innerHTML = bird.species;
                expandedInfoSection.append(expandedBirdSpeciesh2);

                const editPencilLink = document.createElement("a");
                editPencilLink.innerHTML = "&#9998;";
                expandedInfoSection.append(editPencilLink);
                editPencilLink.id = "edit-pencil-image";

                const deleteXLink = document.createElement("a");
                deleteXLink.innerHTML = "X";
                expandedInfoSection.append(deleteXLink);
                deleteXLink.id = "delete-x-link";


                const expandedBirdSizeP = document.createElement("p");
                expandedBirdSizeP.innerHTML = bird.size;
                expandedInfoSection.append(expandedBirdSizeP);

                const expandedBirdCharacteristicsTitle = document.createElement("h3")
                expandedBirdCharacteristicsTitle.innerHTML = "Characteristics:"
                expandedInfoSection.append(expandedBirdCharacteristicsTitle);

                const expandedBirdCharacteristicsUl = document.createElement("ul");
                
                for(let i=0; i<bird.characteristics.length; i++)
                {
                    const expandedBirdCharacteristicsP = document.createElement("li");

                    expandedBirdCharacteristicsP.append(bird.characteristics[i]);
                    
                    expandedBirdCharacteristicsUl.append(expandedBirdCharacteristicsP);
                    
                };
                
                expandedInfoSection.append(expandedBirdCharacteristicsUl);


                const expandedBirdDietP = document.createElement("p");
                expandedBirdDietP.innerHTML = bird.diet;
                expandedInfoSection.append(expandedBirdDietP);

                const expandedBirdWhereP = document.createElement("p");
                expandedBirdWhereP.innerHTML = bird.where_USC;
                expandedInfoSection.append(expandedBirdWhereP);

                const expandedBirdFactP = document.createElement("p");
                expandedBirdFactP.innerHTML = bird.fun_fact;
                expandedInfoSection.append(expandedBirdFactP);

                const expandedBirdInfoCreditsP = document.createElement("p");
                expandedBirdInfoCreditsP.innerHTML = bird.info_credits;
                expandedInfoSection.append(expandedBirdInfoCreditsP);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedBirdImage = document.createElement("img");
                expandedBirdImage.classList.add("expanded-bird-image");
                expandedBirdImage.src = "images/" + bird.image;
                expandedImageSection.append(expandedBirdImage);

                const expandedBirdPhotoCreditsP = document.createElement("p");
                expandedBirdPhotoCreditsP.innerHTML = bird.photo_credits;
                expandedInfoSection.append(expandedBirdPhotoCreditsP);

                editPencilLink.onclick = showAddEditBirdForm;
                
                deleteXLink.onclick = (event) => 
                {
                    event.preventDefault();
                    console.log("deleteXLink clicked")

                    deleteBirdPrompt(bird);

                } 

                populateAddEditBirdForm(bird);

            };

        }

        if(bird.size == "Large")
        {
            constBirdSpecies = document.createElement("h3");
            constBirdSpecies.innerHTML = bird.species;
            largeBirdSection.append(constBirdSpecies);

            const birdImage = document.createElement("img");
            birdImage.src = "images/" + bird.image;
            birdImage.classList.add("initial-image-preview");

            const BirdPhotoCredits = document.createElement("h4");
            BirdPhotoCredits.innerHTML = bird.photo_credits;
            largeBirdSection.append(BirdPhotoCredits);

            // Appends to mediumBirdSection 
            largeBirdSection.append(birdImage);

            birdImage.onclick = (event) =>
            {
                console.log("Clicked bird");

                // document.getElementById("birds-modal").style.display = "block";
                openBirdsModal("expanded-image-section");
                openBirdsModal("expanded-info-section");

                const expandedInfoSection = document.getElementById("expanded-info-section");
                expandedInfoSection.innerHTML = "";

                
                const expandedBirdSpeciesh2 = document.createElement("h2");
                expandedBirdSpeciesh2.classList.add("inline");
                expandedBirdSpeciesh2.innerHTML = bird.species;
                expandedInfoSection.append(expandedBirdSpeciesh2);

                const editPencilLink = document.createElement("a");
                editPencilLink.innerHTML = "&#9998;";
                expandedInfoSection.append(editPencilLink);
                editPencilLink.id = "edit-pencil-image";

                const deleteXLink = document.createElement("a");
                deleteXLink.innerHTML = "X";
                expandedInfoSection.append(deleteXLink);
                deleteXLink.id = "delete-x-link";


                const expandedBirdSizeP = document.createElement("p");
                expandedBirdSizeP.innerHTML = bird.size;
                expandedInfoSection.append(expandedBirdSizeP);

                const expandedBirdCharacteristicsTitle = document.createElement("h3")
                expandedBirdCharacteristicsTitle.innerHTML = "Characteristics:"
                expandedInfoSection.append(expandedBirdCharacteristicsTitle);

                const expandedBirdCharacteristicsUl = document.createElement("ul");
                
                for(let i=0; i<bird.characteristics.length; i++)
                {
                    const expandedBirdCharacteristicsP = document.createElement("li");

                    expandedBirdCharacteristicsP.append(bird.characteristics[i]);
                    
                    expandedBirdCharacteristicsUl.append(expandedBirdCharacteristicsP);
                    
                };
                
                expandedInfoSection.append(expandedBirdCharacteristicsUl);


                const expandedBirdDietP = document.createElement("p");
                expandedBirdDietP.innerHTML = bird.diet;
                expandedInfoSection.append(expandedBirdDietP);

                const expandedBirdWhereP = document.createElement("p");
                expandedBirdWhereP.innerHTML = bird.where_USC;
                expandedInfoSection.append(expandedBirdWhereP);

                const expandedBirdFactP = document.createElement("p");
                expandedBirdFactP.innerHTML = bird.fun_fact;
                expandedInfoSection.append(expandedBirdFactP);

                const expandedBirdInfoCreditsP = document.createElement("p");
                expandedBirdInfoCreditsP.innerHTML = bird.info_credits;
                expandedInfoSection.append(expandedBirdInfoCreditsP);


                const expandedImageSection = document.getElementById("expanded-image-section");
                expandedImageSection.innerHTML = "";

                const expandedBirdImage = document.createElement("img");
                expandedBirdImage.classList.add("expanded-bird-image");
                expandedBirdImage.src = "images/" + bird.image;
                expandedImageSection.append(expandedBirdImage);

                const expandedBirdPhotoCreditsP = document.createElement("p");
                expandedBirdPhotoCreditsP.innerHTML = bird.photo_credits;
                expandedInfoSection.append(expandedBirdPhotoCreditsP);

                editPencilLink.onclick = showAddEditBirdForm;
                
                deleteXLink.onclick = (event) => 
                {
                    event.preventDefault();
                    console.log("deleteXLink clicked")

                    deleteBirdPrompt(bird);

                } 

                populateAddEditBirdForm(bird);

            };

        }


        
    });

};


// Opens bird modal 
const openBirdsModal = (id) =>
{
    document.getElementById("birds-modal").style.display = "block";

    console.log("ID clicked: ", id);
    
    // Selects all of modal-content direct children for each item 
    document.querySelectorAll("#modal-content > *").forEach((item) =>
    {
        item.classList.add("hidden");
        // console.log("Item hidden: ", item);

        document.getElementById(id).classList.remove("hidden");
        // console.log("ID shown: ", id)

    });

};

// Shows bird form 
const showAddEditBirdForm = (event) =>
{
    event.preventDefault();

    openBirdsModal("add-edit-bird-form");

    // console.log(event.target);

    document.querySelectorAll("#expanded-image-info-section > *").forEach((item) =>
    {
        item.classList.add("hidden");

    });

    if(event.target.getAttribute("id") != "edit-pencil-image")
    {
        resetAddEditBirdForm();

        return;

    }

};

// Resets bird form 
const resetAddEditBirdForm = () =>
{
    const AddEditBirdForm = document.getElementById("add-edit-bird-form");
    AddEditBirdForm.reset();

    AddEditBirdForm._id.value = "";

    document.getElementById("characteristics-section").innerHTML = "";

    document.getElementById("image-preview").src = "";

};

// Adds bird characteristics 
const addCharacteristics = (event) =>
{
    event.preventDefault();

    document.getElementById("add-characteristic-click").onclick = addCharacteristics;

    const characteristicSection = document.getElementById("characteristics-section");

    const characteristicInput = document.createElement("input");
    characteristicInput.classList.add("supply");
    characteristicInput.classList.add("block");
    characteristicInput.type = "text";
    characteristicSection.append(characteristicInput);

}

// Adds bird 
const addEditBird = async (event) =>
{
    event.preventDefault();

    let response;

    const AddEditBirdForm = document.getElementById("add-edit-bird-form");
    const AddEditBirdFormData = new FormData(AddEditBirdForm);
    AddEditBirdFormData.append("characteristics", getCharacteristics());

    console.log(...AddEditBirdFormData);

    // If adding bird 
    if(AddEditBirdForm._id.value.trim() == "")
    {   
        console.log("Adding bird (POST)")

        response = await fetch("/api/birds", 
        {
            method: "POST",
            body: AddEditBirdFormData,

        });

    }
    // If editing bird 
    else
    {
        console.log("Editing bird (PUT)");

        response = await fetch(`/api/birds/${AddEditBirdForm._id.value}`,
        {
            method: "PUT",
            body: AddEditBirdFormData,

        });

    }

    console.log("Status: ", response.status);

    if(response.status != 200)
    {
        console.log("Error adding or editing bird data");
        // errorPrompt(result.error);


        return;

    }


    await response.json();
    resetAddEditBirdForm();
    document.getElementById("birds-modal").style.display = "none";

    showBirds();

};

// Asks user if they are sure they want to delete a bird from the list 
deleteBirdPrompt = (bird) =>
{
    const deletePrompt = document.getElementById("delete-prompt");
    deletePrompt.innerHTML = "";
    
    const deletePromptText = document.createElement("h5");
    deletePromptText.innerHTML = "Are you sure you want to delete this species?";
    deletePrompt.append(deletePromptText);
    
    const yesDelete = document.createElement("button");
    yesDelete.id = "yes-delete-button";
    yesDelete.innerHTML = "Yes";
    deletePrompt.append(yesDelete);

    const noDelete = document.createElement("button");
    noDelete.id = "no-delete-button";
    noDelete.innerHTML = "No";
    deletePrompt.append(noDelete);

    deletePrompt.classList.remove("hidden");

    yesDelete.onclick = deleteBird.bind(this, bird);

    noDelete.onclick = () => 
    {
        console.log("noDelete clicked");

        deletePrompt.classList.add("hidden");

    }

}

const deleteBird = async (bird) =>
{    
    let response = await fetch(`/api/birds/${bird._id}`,
    {
        method:"DELETE",
        headers:
        {
            "Content-Type":"application/json;charset=utf-8"
        }
        
    });

    if(response.status != 200)
    {
        console.log("There was an error deleting the species");
        // errorPrompt(result.error);


        return;

    }

    await response.json();
    resetAddEditBirdForm();
    document.getElementById("birds-modal").style.display = "none";

    showBirds();

};


const getCharacteristics = () =>
{
    const characteristicInputs = document.querySelectorAll("#characteristics-section input");

    const characteristics = [];

    characteristicInputs.forEach((input) =>
    {
        characteristics.push(input.value);

    });


    return characteristics;

};

// Populates bird form when the edit pencil is clicked 
populateAddEditBirdForm = (bird) =>
{
    const AddEditBirdForm = document.getElementById("add-edit-bird-form");

    AddEditBirdForm._id.value =  bird._id;
    AddEditBirdForm.species_input.value = bird.name;
    AddEditBirdForm.size_input = bird.size;
    // AddEditBirdForm.characteristics_input = bird.characteristics;
    AddEditBirdForm.diet_input.value = bird.diet;
    AddEditBirdForm.where_USC_input.value = bird.where_USC;
    AddEditBirdForm.fun_fact_input.value = bird.fun_fact;
    AddEditBirdForm.info_credits_input.value = bird.info_credits;

    document.getElementById("placeholder-preview-image").classList.remove("block");
    document.getElementById("placeholder-preview-image").classList.add("hidden");
    document.getElementById("image-preview").src = "images/" + bird.image;
    
    AddEditBirdForm.photo_credits_input.value = bird.photo_credits;


    populateCharacteristics(bird.characteristics);

};

// Populates bird characteristics for populateAddEditBirdForm 
const populateCharacteristics = (characteristic) => 
{
    const characteristicSection = document.getElementById("characteristics-section");

    characteristicSection.innerHTML = "";
    
    characteristic.forEach((characteristic) => 
    {
        const characteristicInput = document.createElement("input");
        characteristicInput.classList.add("supply");
        characteristicInput.classList.add("block");
        characteristicInput.type = "text";
        characteristicInput.value = characteristic;
        characteristicSection.append(characteristicInput);

    });

};



// Shows birds on load 
showBirds();

document.getElementById("modal-close").onclick = () =>
{
    // console.log("Clicked");
    document.getElementById("birds-modal").style.display = "none";
    
    document.getElementById("add-edit-bird-form").style.display = "none";
    
    document.querySelectorAll("#expanded-image-info-section > *").forEach((item) =>
    {
        item.classList.add("hidden");

    });

};

document.getElementById("form-plus-sign").onclick = showAddEditBirdForm;
document.getElementById("add-characteristic-click").onclick = addCharacteristics;
document.getElementById("add-edit-bird-form").onsubmit = addEditBird;

document.getElementById("image_input").onchange = (event) =>
{
    // If an image was not picked or the file chosen is blank 
    if(!event.target.files.length)
    {
        document.getElementById("image-preview").src = "";


        return;

    }

    document.getElementById("placeholder-preview-image").classList.remove("block");
    document.getElementById("placeholder-preview-image").classList.add("hidden");

    // Populates URL of src attribute of imagePreview with 0th (first/only) file chosen 
    document.getElementById("image-preview").src = URL.createObjectURL(event.target.files.item(0));

};

document.getElementById("cancel-form-button").onclick = () =>
{
    console.log("Cancel button clicked");
    document.getElementById("birds-modal").style.display = "none";

};

document.getElementById("modal-close").onclick = () =>
{
    // console.log("Clicked");
    document.getElementById("birds-modal").style.display = "none";
    
    document.querySelectorAll("#expanded-image-info-section > *").forEach((item) =>
    {
        item.classList.add("hidden");

    });

};



/*

    - NOTES: 
        - 

            

*/