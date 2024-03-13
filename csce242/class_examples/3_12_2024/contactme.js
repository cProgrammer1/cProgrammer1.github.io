/*
    Edited by Chrissy Dobrowolski 
    Class Example 
    3.12.2024 
    CSCE 242- 001 
*/


const showEmailResult = async(event) =>
{
    event.preventDefault();

    const result = document.getElementById("result");
    
    let response = await getEmailResult();

    // 200 -> successfully sent; good / not an error (as oppossed to 404 error, etc.)
    if(response.status == 200)
    {
        result.innerHTML = "Email successfuly sent!"

    }
    else
    {
        result.innerHTML = "Sorry, you're email was not sent"

    }

};

const getEmailResult = async() =>
{
    const form = document.getElementById("contact-form");
    
    const formData = new FormData(form);

    // Converts form entries to object 
    const object = object.formEntries(formData);

    const json = JSON.stringify(object);

    const result = document.getElementById("result");
    result.innerHTML = "Please wait...";

    try
    {
        // Second parameter is customization for fetch 
        const response = await fetch("https://api.web3forms.com/submit", 
        {
            method: "POST", 
            headers:
            {
                "Content-type":"application/json",
                Accept:"application/json"

            },

            // (?) Sends json variable in body 
            body:json

        });

        return response;

    }
    catch(error)
    {
        console.log(error);
        result.innerHTML = "Sorry, you're email couldn't be sent";

    }

};

document.getElementById("contact-form").onsubmit = showEmailResult;