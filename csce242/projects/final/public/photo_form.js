/*
    Created by Chrissy Dobrowolski 
    Semester Project Part 7: BackEnd Implementation 
    CSCE 242- 001 
    Due 4.21.2024 
    
*/


const showAddPhotoForm = () =>
{
    // event.preventDefault();
    
    console.log("Submit photo button clicked");

    document.getElementById("photo-form").classList.remove("hidden");


};

const submitPhoto = (event) =>
{
    event.preventDefault();

    // document.getElementById("photo-form-results").classList.remove("hidden");
    // const photo_form_results_appended_div = document.getElementById("photo-form-results-appended")

    // const form = document.getElementById("photo-form");
    
    // photo_form_results_appended_div.innerHTML = "RESULTS: ";


    // const breakLine1 = document.createElement("br");
    // const breakLine2 = document.createElement("br");
    // photo_form_results_appended_div.append(breakLine1, breakLine2);


    // const name = form.elements["name-input"].value;
    // photo_form_results_appended_div.append("Name: ", name);


    // const breakLine3 = document.createElement("br");
    // const breakLine4 = document.createElement("br");
    // photo_form_results_appended_div.append(breakLine3, breakLine4);


    // const email = form.elements["email-input"].value;
    // photo_form_results_appended_div.append("Email: ", email);


    // const breakLine5 = document.createElement("br");
    // const breakLine6 = document.createElement("br");
    // photo_form_results_appended_div.append(breakLine5, breakLine6);


    // const image = form.elements["image-input"].value;
    // photo_form_results_appended_div.append("Image: ", image);


    // const breakLine7 = document.createElement("br");
    // const breakLine8 = document.createElement("br");
    // photo_form_results_appended_div.append(breakLine7, breakLine8);


    // const date = form.elements["date-input"].value;
    // photo_form_results_appended_div.append("Date: ", date);


    // const breakLine9 = document.createElement("br");
    // const breakLine10 = document.createElement("br");
    // photo_form_results_appended_div.append(breakLine9, breakLine10);


    // const location = form.elements["location-input"].value;
    // photo_form_results_appended_div.append("Location: ", location);


    // const breakLine11 = document.createElement("br");
    // const breakLine12 = document.createElement("br");
    // photo_form_results_appended_div.append(breakLine11, breakLine12);


    // const species = form.elements["species-input"].value;
    // photo_form_results_appended_div.append("Species: ", species);


    // const breakLine13 = document.createElement("br");
    // const breakLine14 = document.createElement("br");
    // photo_form_results_appended_div.append(breakLine13, breakLine14);


    // const description = form.elements["description-input"].value;
    // photo_form_results_appended_div.append("Description: ", description);


    // const breakLine15 = document.createElement("br");
    // const breakLine16 = document.createElement("br");
    // photo_form_results_appended_div.append(breakLine15, breakLine16);


    // const termsChecked = form.elements["terms-input"].checked;
    // // FOR TESTING: console.log(termsChecked);
    // photo_form_results_appended_div.append("Terms checked? ", termsChecked);


    let counter = 0;

    setInterval(() => 
    {   
        const success = document.getElementById("photo-form-results");

        success.classList.remove("hidden");
        counter++;

        if(counter >= 5)
        {
            success.classList.add("hidden");


            return;

        }
        
    }, 1000);

clearInterval();

};


document.getElementById("submit-photo-button").onclick = showAddPhotoForm;

document.getElementById("photo-form").onsubmit = submitPhoto;