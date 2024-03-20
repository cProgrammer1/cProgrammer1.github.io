/*
    Edited by Chrissy Dobrowolski 
    Class Example 
    2.29.2024 
    CSCE 242- 001 
    
*/


//https://api.openbrewerydb.org/breweries

// DOING ALL IN ONE LINE: 

const getBreweries = async() =>
{
    try
    {
        return (await fetch("https://api.openbrewerydb.org/breweries")).json();

    }
    catch (error)
    {
        console.log(error);

    }


};

const getMap = async(latitude, longitude) =>
{
    try
    {
        // URL w/longitude amd latitude from Google Maps (SEE POSTED EXAMPLE) 
        return await fetch(``);

    }
    catch(error)
    {
        console.log("error");

    }

}

const showBreweries = async() =>
{
    const breweries = await getBreweries();
    // FOR TESTING: console.log(breweries);

    breweries.forEach(async(brewery) => 
    {
        // "allBsSection" -> all breweries sections 
        const allBsSection = document.getElementById("breweries-section");
        const brewerySection = document.createElement("section");
        allBsSection.append(brewerySection);
        
        brewerySection.classList.add("brewery");

        // URL link 
        const a = document.createElement("a");
        a.href = brewery.website_url;
        brewerySection.append(a);

        const h3 = document.createElement("h3");
        h3.innerHTML = brewery.name;
        a.append(h3);

        const p = document.createElement("p");

        // So all text becomes clickable 
        a.append(p);

        p.innerHTML = `${brewery.brewery_type} brewery`

        const iframe = document.createElement("iframe");
        iframe.src = await getMap(brewery.latitude, brewery.longitude);
        a.append(iframe);

    });

}

showBreweries();