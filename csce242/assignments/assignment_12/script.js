/*
    Created by Chrissy Dobrowolski 
    Assignment 12- Parsing JSON 
    CSCE 242- 001 
    Due: 3.12.2024 

*/


const getHouses = async() =>
{

    const JSON_url = "https://portiaportia.github.io/json/house-plans.json";

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


const showHouses = async() =>
{
    const houses = await getHouses();

    houses.forEach((house) => 
    {
        // FOR TESTING: console.log(house.name);

        document.getElementById("house-sections").append(getHousesSection(house));

    });

};

const getHousesSection = (house) =>
{
    // Creates new section "house_section" for each house 
    const house_section = document.createElement("section");
    house_section.classList.add("house-section");
    
    // Creates new h3 "house_name"; appends to house_section 
    const house_name = document.createElement("h3");
    house_name.innerHTML = house.name;
    house_section.append(house_name);

    // Creates new section "house_image_text_section" for each house's image and text; appends to house_section 
    const house_image_text_section = document.createElement("section");
    house_image_text_section.classList.add("image-text-section")
    house_section.append(house_image_text_section);

    // Creates new img "main_house_image"; appends to house_image_text_section 
    const main_house_image = document.createElement("img");
    main_house_image.src = "https://portiaportia.github.io/json/images/house-plans/" + house.main_image;
    house_image_text_section.append(main_house_image);

    // Creates new ul "house_text_ul"; appends to house_image_text_section 
    const house_text_ul = document.createElement("ul");
    house_text_ul.classList.add("text");
    house_image_text_section.append(house_text_ul);

    const house_size = document.createElement("li");
    house_size.innerHTML = house.size;
    house_size.classList.add("inline");
    house_text_ul.append("Size: ", house_size);


    // Adds breaks to separate inline p 
    const breakLine1 = document.createElement("br");
    const breakLine2 = document.createElement("br");
    house_text_ul.append(breakLine1, breakLine2);


    const house_bedrooms = document.createElement("li");
    house_bedrooms.innerHTML = house.bedrooms;
    house_bedrooms.classList.add("inline");
    house_text_ul.append("Bedrooms: ", house_bedrooms);


    // Adds breaks to separate inline p 
    const breakLine3 = document.createElement("br");
    const breakLine4 = document.createElement("br");
    house_text_ul.append(breakLine3, breakLine4);

    
    const house_bathrooms = document.createElement("li");
    house_bathrooms.innerHTML = house.bathrooms;
    house_bathrooms.classList.add("inline");
    house_text_ul.append("Bathrooms: ", house_bathrooms);


    // Adds breaks to separate inline p 
    const breakLine5 = document.createElement("br");
    const breakLine6 = document.createElement("br");
    house_text_ul.append(breakLine5, breakLine6);


    const house_features = document.createElement("section");
    house_features.classList.add("features-section");
    house_features.classList.add("inline");
    house_text_ul.append(house_features);
    
    house.features.forEach((feature) => 
    {
        // FOR TESTING: console.log(feature);
        const featureP = document.createElement("li");
        featureP.innerHTML = feature;
        featureP.classList.add("inline");
        house_features.append(" *", featureP);

    });


    // Creates new p "house_floor_plans"; appends to house_section 
    const house_floor_plans = document.createElement("section");
    house_floor_plans.classList.add("floor-plan-sections");
    house_section.append(house_floor_plans);

    house.floor_plans.forEach((floor_plan) => 
    {
        // FOR TESTING: console.log(floor_plan);

        const floor_plan_section = document.createElement("section");
        floor_plan_section.classList.add("floor-plan");

        const plan_name = document.createElement("p");
        floor_plan_section.append(plan_name);

        plan_name.innerHTML = floor_plan.name;
        // FOR TESTING: console.log(plan_name);
        plan_name.classList.add("centered");

        const plan_image = document.createElement("img");
        plan_image.src = "https://portiaportia.github.io/json/images/house-plans/" + floor_plan.image;
        floor_plan_section.append(plan_image);

        house_floor_plans.append(floor_plan_section);
        

    });


    return house_section;

};


showHouses();



/* 

- NOTES: 
    - REJECTED CODE: 

        // const house_text_section = document.createElement("section");
        // house_image_text_section.append(house_text_section);


*/