/*
    Edited by Chrissy Dobrowolski 
    Class Example 
    3.12.2024 
    CSCE 242- 001 
*/


const submitRaccoonForm = (event) =>
{
    // DON'T go to the action (refresh the page) 
    event.preventDefault(); 

    console.log("submitRacoonForm function working");
    
    const form = event.target;

    const raccoon = form.elements["raccoon-name"].value;
    const demeanor = form.elements["demeanor"].value;

    // Whether terms was checked or not 
    const termsChecked = form.elements["terms"].checked;

    const size = getRadioValue("size");

    console.log(raccoonName + " is " + demeanor + " terms checked: " + termsChecked + "Size: " + size);

};

const getRadioValue = (radioName) =>
{
    const radios = document.getElementsByName(radioName);

    // B/c more than one radio button ("radios"; plural)
    for(let i in radios)
    {
        if(radios[i].checked)
        {
            return radios[i].value;

        }

    }


    return "";

};



// MUST be .onsubmit and NOT .onlick b/c submitting ALL info in form 
document.getElementById("form-raccoon").onsubmit = submitRaccoonForm;