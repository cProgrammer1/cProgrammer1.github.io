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


// Extensions Setup: 

const express = require("express");
const app = express();

const joi = require("joi");
const multer = require("multer");

app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use(express.json());

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");

const storage = multer.diskStorage
({
    destination: (request, file, cb) =>
    {
      cb(null, "./public/images/");

    },

    filename: (request, file, cb) => 
    {
      cb(null, file.originalname);

    },

});

const upload = multer({storage: storage});


// Mongoose/MongoDB Setup: 

mongoose
    .connect("mongodb+srv://cProgrammer1:NmBdn8GGlE2XbQNE@cluster0.mhmoliw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => 
    {
        console.log("Connected to MongoDB")
        
    })
    .catch((error) => 
    {
        console.log("Couldn't connect to MongoDB; ERROR: ", error);
        errorPrompt(result.error);

    });

// Creates new schema (format for parameters) for birds 
const birdSchema = new mongoose.Schema
({
    species: String,
    image: String,
    photo_credits: String,
    size: String,
    characteristics: [String],
    diet: String,
    where_USC: String,
    fun_fact: String,
    info_credits: String,

});

// Creates new Object "Bird" with schema birdSchema 
const Bird = mongoose.model("Bird", birdSchema);


// GET Requests 

// GET from root / for Home page 
app.get("/", (request, response) => 
{
    // FOR TESTING: 
        // response.send("Test");
        // const testArray = ["test1, test2, test3"];
        // response.send(testArray);

    // Responds with file in existing directory 
    response.sendFile(__dirname + "/home_page.html");

});

// GET for About page 
app.get("/about", (request, response) => 
{
    // Responds with file in existing directory 
    response.sendFile(__dirname + "/about_page.html");

});

// GET for Birds page 
app.get("/birds", (request, response) => 
{
    // Responds with file in existing directory 
    response.sendFile(__dirname + "/birds_page.html");

});

// GET for Photography page 
app.get("/photography", (request, response) => 
{
    // Responds with file in existing directory 
    response.sendFile(__dirname + "/photography_page.html");

});

// GET for More Resources page 
app.get("/more_resources", (request, response) => 
{
    // Responds with file in existing directory 
    response.sendFile(__dirname + "/more_resources_page.html");

});


// Retrieves birds from MongoDB database 
const getBirds = async (response) =>
{
    const birds = await Bird.find();

    response.send(birds);

}

// GET from /api/birds 
app.get("/api/birds", (request, response) => 
{
    console.log("API requested");
    // response.send("Test");
        
    // FOR TESTING: console.log(birds);

    getBirds(response);

});

// GET from specific ID in /api/birds 
app.get("/api/birds/:id", async (request, response) => 
{
    console.log("API with ID requested");

    const birdID = request.params.id;
    console.log("birdID: ", birdID);

    const bird = await Bird.findOne({_id:birdID});

    response.send(bird);

});


// Adds a new bird 
app.post("/api/birds", upload.single("image_input"), async (request, response) =>
{
  console.log("Inside POST");


  // Creates new variable "result" equal to validated bird 
  const result = validateBird(request.body);

  if(result.error)
  {
    // In event of 400 error, sends result's first error in array of errors 
    response.status(400).send(result.error.details[0].message);
    errorPrompt(result.error);


    return;

  }

    // Creates new bird "newBird" of type Bird and populates with form input 
    const newBird = new Bird
    ({
        // _id: birds.length,
        species: request.body.species_input,
        photo_credits: request.body.photo_credits_input,
        size: request.body.size_input,
        characteristics: request.body.characteristics.split(","), // Splits comma-separated items in array 
        diet: request.body.diet_input,
        where_USC: request.body.where_USC_input,
        fun_fact: request.body.fun_fact_input,
        info_credits: request.body.info_credits_input,

    });

    if(request.file)
    {
        newBird.image = request.file.filename;

    }


    // Saves newBird 
    const saveBird = await newBird.save();

    console.log("New bird added: ", newBird);

    response.send(newBird);
  
    console.log("Past the validator");

});


// Edits an existing bird 
app.put("/api/birds/:id", upload.single("image_input"), async (request, response) =>
{
    console.log("Inside PUT");


    // Creates new variable "result" equal to validated bird 
    const result = validateBird(request.body);

    if(result.error)
    {
        // In event of 400 error, sends result's first error in array of errors 
        result.status(400).send(result.error.details[0].message);
        errorPrompt(result.error);
        

        return;

    }

    // Creates new variable "birdFieldsToUpdate" storing updated given bird information 
    let birdFieldsToUpdate = 
    {
        species: request.body.species_input,
        photo_credits: request.body.photo_credits_input,
        size: request.body.size_input,
        characteristics: request.body.characteristics.split(","), // Splits comma-separated items in array 
        diet: request.body.diet_input,
        where_USC: request.body.where_USC_input,
        fun_fact: request.body.fun_fact_input,
        info_credits: request.body.info_credits_input,

    }

    if(request.file)
    {
        birdFieldsToUpdate.image = "images/" + request.file.filename;

    }

    const birdID = request.params.id;

    // Creates new variable "deleteBird" equal to given bird with updated information 
    const updateBirdResult = await Bird.updateOne({_id:birdID}, birdFieldsToUpdate);

    response.send(updateBirdResult);

});


app.delete("/api/birds/:id", async (request, response) => 
{
    // Creates new variable "deleteBird" equal to deleted bird 
    const deleteBird = await Bird.findByIdAndDelete(request.params.id);
    
    response.send(deleteBird);

});


function validateBird(bird)
{
    console.log("Inside validate");

    const schema = joi.object
    ({
        // Can be empty or full if editing existing bird 
        _id: joi.allow(""),

        species_input: joi.string().min(3).required(),
        photo_credits_input: joi.string().min(5).required(),
        size_input: joi.string().min(5).required(),
        characteristics: joi.allow(""),
        diet_input: joi.string().min(3).required(),
        where_USC_input: joi.string().min(3).required(),
        fun_fact_input: joi.string().min(10).required(),
        info_credits_input: joi.string().min(5).required(),

        // NOTE: Image not required since some birds species may have been spotted and confirmed, but not adequately photographed yet 
        image_input: joi.allow(""),

    });


    return schema.validate(bird);

}

// Listens to port 3000 for server 
app.listen(3000, () => 
{
    console.log("Listening to server");

});