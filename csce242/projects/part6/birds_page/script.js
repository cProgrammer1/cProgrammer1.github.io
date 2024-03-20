/*
    Created by Chrissy Dobrowolski 
    Semester Project Part 5: JSON File Parsing 
    CSCE 242- 001 
    Due 3.16.2024 
    
*/


const getBirds = async() =>
{

    const JSON_url = "bird_species.json";

    try
    {
        const response = await fetch(JSON_url);


        return response.json();

    }
    catch(error)
    {
        console.log(error);

    }

};


const showBirds =  async() =>
{
    const birds = await getBirds();

    birds.forEach((bird) => 
    {
        // FOR TESTING: console.log(bird.image_name);

        document.getElementById("bird-species").append(getBirdsSection(bird));

    });

};

const getBirdsSection = (bird) =>
{
    // Creates new section "bird_section" for each bird 
    const bird_section = document.createElement("section");
    bird_section.classList.add("bird-section");

    // Creates new section "bird_title_image_section"; appends to bird_section 
    const bird_title_image_section = document.createElement("section");
    bird_title_image_section.classList.add("bird-title-image");
    bird_section.append(bird_title_image_section);

    // Creates new section "bird_text_section"; appends to bird_section 
    const bird_text_section = document.createElement("section");
    bird_text_section.classList.add("bird-text");
    bird_section.append(bird_text_section);


    // Creates new h3 "bird_id"; appends to bird_title_image_section 
    const bird_id = document.createElement("h3");
    bird_id.innerHTML = bird.id;
    bird_title_image_section.append(bird_id);

    // Creates new img "bird_image"; appends to bird_title_image_section 
    const bird_image = document.createElement("img");
    bird_image.src = "images/" + bird.image_name;
    bird_title_image_section.append(bird_image);

    // Creates new h4 "bird_photo_credits"; appends to bird_text_section 
    const bird_photo_credits = document.createElement("h4");
    bird_photo_credits.innerHTML = bird.photo_credits;
    bird_title_image_section.append(bird_photo_credits);

    bird.broad_identifiers.forEach((identifier) =>
    {
        // FOR TESTING: console.log(identifier);

        // Creates new h4 "bird_broad_identifiers"; appends to bird_text_section 
        const bird_broad_identifiers = document.createElement("h4");
        bird_broad_identifiers.innerHTML = identifier;
        bird_text_section.append(bird_broad_identifiers);

    });

    // Creates new p "bird_USC_area"; appends to bird_text_section 
    const bird_USC_area = document.createElement("p");
    bird_USC_area.innerHTML = bird.USC_area;
    bird_USC_area.classList.add("inline");
    bird_text_section.append("Where to Find: ", bird_USC_area);


    // Adds breaks to separate inline p 
    const breakLine1 = document.createElement("br");
    const breakLine2 = document.createElement("br");
    bird_text_section.append(breakLine1, breakLine2);


    // Creates new p "bird_diet"; appends to bird_text_section 
    const bird_diet = document.createElement("p");
    bird_diet.innerHTML = bird.diet;
    bird_diet.classList.add("inline");
    bird_text_section.append("Diet: ", bird_diet);


    // Adds breaks to separate inline p 
    const breakLine3 = document.createElement("br");
    const breakLine4 = document.createElement("br");
    bird_text_section.append(breakLine3, breakLine4);


    // Creates new p "bird_fun_fact"; appends to bird_text_section 
    const bird_fun_fact = document.createElement("p");
    bird_fun_fact.innerHTML = bird.fun_fact;
    bird_fun_fact.classList.add("inline");
    bird_text_section.append("Fun Fact: ", bird_fun_fact);


    // Adds breaks to separate inline p 
    const breakLine5 = document.createElement("br");
    const breakLine6 = document.createElement("br");
    bird_text_section.append(breakLine5, breakLine6);

    const bird_info_credits_title_section = document.createElement("section");
    bird_info_credits_title_section.classList.add("bird_info_credits_title");
    const bird_info_credits_title = document.createElement("h4");
    bird_info_credits_title.innerHTML = "Information credits: ";
    bird_info_credits_title_section.append(bird_info_credits_title);
    bird_text_section.append(bird_info_credits_title_section);

    bird.info_credits.forEach((info_credit) =>
    {
        // FOR TESTING: console.log(info_credit);

        // Creates new p "birdBroadIdentifiers"; appends to bird_text_section 
        const bird_info_credits = document.createElement("section");
        bird_info_credits.classList.add("bird_info_credit");
        const bird_info_credits_p = document.createElement("p");
        bird_info_credits.innerHTML = info_credit;
        bird_info_credits.append(bird_info_credits_p);
        bird_text_section.append(bird_info_credits);

    });


    // NOTE: Make sure to return section to avoid "undefined" error! 
    return bird_section;

};


showBirds();


/*

    - NOTES: 
        - REJECTED CODE: 

            // const h_line = document.createElement("hr");
            // bird_section.append(h_line);

*/