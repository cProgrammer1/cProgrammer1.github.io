/*
    Created by Chrissy Dobrowolski 
    Semester Project Part 7: BackEnd Implementation 
    CSCE 242- 001 
    Due 4.21.2024 

*/

const showEmailResult = async(event) =>
{
    event.preventDefault();

    const submission_result = document.getElementById("submission-result");

    let response = await getEmailResult();

    if(response.status == 200)
    {
        submission_result.innerHTML = "Email successfully sent!";

    }
    else
    {
        submission_result.innerHTML = "Sorry, your email was unable to send."

    }

};

const getEmailResult = async() =>
{
    const contact_form = document.getElementById("contact-form");
    const form_data = new FormData(contact_form);
    const object = Object.fromEntries(form_data);
    const json = JSON.stringify(object);

    const submission_result = document.getElementById("submission-result");
    submission_result.innerHTML = "Please wait...";

    try
    {
        const response = await fetch("https://api.web3forms.com/submit",
        {
            method: "POST",
            headers:
            {
                "Content-type": "application/json",
                Accept: "application/json"

            },

            body: json

        });


        return response;

    }
    catch(error)
    {
        console.log(error);
        submission_result.innerHTML = "Sorry, your email was unable to send.";

    }


};


document.getElementById("contact-form").onsubmit = showEmailResult;