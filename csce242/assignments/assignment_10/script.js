/*
    Created by Chrissy Dobrowolski 
    Assignment 10- Arrays 
    CSCE 242- 001 
    Due: 2.24.2024 

*/


let ads = ["Ad 1", "Ad 2", "Ad 3", "Ad 4", "Ad 5"];

const adInterval = setInterval(() => 
{
    const currentAd = document.querySelector("#part-1-ad-text :not(.hidden)");
    // FOR TESTING: console.log(currentAd);

    let nextAd = currentAd.nextElementSibling;

    if(nextAd == null)
    {
        nextAd = document.querySelector("#part-1-ad-text :first-child");

    }

    currentAd.classList.add("hidden");
    nextAd.classList.remove("hidden");


}, 2000);


let p2Images = [];
p2Images['<p><a href="https://www.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_40965130.htm#query=landscape&position=0&from_view=keyword&track=sph&uuid=8e520e53-3fb6-4e41-9da7-682c824a94f7">Image by vecstock</a> on Freepik</p>'] = "images/mountain-lake.jpg";
p2Images['<p><a href="https://www.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_11342065.htm#query=landscape&position=7&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik</p>'] = "images/golden.jpg";
p2Images['<p><a href="https://www.freepik.com/free-photo/amazing-shot-beautiful-butchart-gardens-brentwood-bay_20496783.htm#query=landscape&position=27&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik</p>'] = "images/garden.jpg";
p2Images['<p><a href="https://www.freepik.com/free-photo/small-houses-green-field-with-dark-sky_7553929.htm#query=landscape&position=39&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik</p>'] = "images/small-house.jpg";
p2Images['<p><a href="https://www.freepik.com/free-photo/beautiful-scenery-lot-leafless-trees-snow-covered-land-during-sunset_10990489.htm#query=landscape&position=38&from_view=keyword&track=sph&uuid=16f8afcf-90c6-4cae-8249-a03fef90c6f4">Image by wirestock</a> on Freepik</p>'] = "images/snow.jpg";

const showImages = () =>
{   
    const p2ImagesDiv = document.getElementById("part-2-images");
    p2ImagesDiv.innerHTML = "";

    for(const place in p2Images)
    {
        const img = document.createElement("img");
        const p = document.createElement("p");

        img.src = p2Images[place];
        p.innerHTML = place;

        p2ImagesDiv.append(img);
        p2ImagesDiv.append(p);

        //FOR TESTING: console.log(img);


    }






    //FOR TESTING: console.log(p2Images);
    //FOR TESTING: console.log(p2Images.length);

    // p2Images.setAttribute("p", 'Test');

    // const img = document.createElement("img");

    // p2Images.forEach((image) => 
    // {
    //     const img = document.createElement("img");

    //     // img.innerHTML = '<img src="images/garden.jpg">';
    //     // img.innerHTML = Object.keys(img);

    //     img.innerHTML = "hello";

    //     p2ImagesDiv.append(img);

    //     // img.innerHTML = image;

    //     // p2ImagesDiv.append(img);

    // });



    // p2Images["garden"].setAttribute("p", 'Test');

    // for(i=0; i<p2Images.length; i++)
    // {
    //     //p2Images[i].setAttribute("src", '"images/garden.jpg"');

    //     p2Images[i].setAttribute("src", '"images/garden.jpg"');
        
    //     img_att = document.createElement("img");

    //     img_att = "hello";

    //     p2ImagesDiv.append(img_att);

    // };



    // p2Images.forEach((image) => 
    // {
    //     console.log(image.value);

    // });


    // p2Images.forEach((image) => 
    // {
    //     const attribute = document.createElement("p");
    //     // attribute.innerHTML = p2Images[image];
    //     attribute.innerHTML = image;

    //     console.log(attribute);

    //     p2ImagesDiv.append(attribute);

    // });

};

showImages();