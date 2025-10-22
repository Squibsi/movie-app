"use strict"; // Enable strict mode for better error checking

// #0: Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
document.addEventListener("DOMContentLoaded", initApp);

// #1: Initialize the app
function initApp() {
  console.log("initApp: Movie App is running 🎉"); // Log to the console that the app is running
}

/*

//Our first movie-variable
const title = "The Matrix";
console.log("Movie title", title);

// Numbers
const year = 1999; // Whole number - No Quotation marks
const rating = 8.7; // Decimal number - with period

// Strings
const genre = "Action"; // Text - with quotation marks
const director = "Christopher Nolan";

// Arrays
const actors = ["Keanu Reeves", "Laurence Fishburne"]; // List of Actors

// More Text
const description = "A computer programmer discovers..."; // Movie description
const image = "matrix.jpg"; // Reference for the movie poster

// Test of all our variables
console.log("År:", year);
console.log("Rating:", rating);
console.log("Genre:", genre);
console.log("Instruktør:", director);
console.log("Skuespillere:", actors);
console.log("Beskrivelse:", description);
console.log("Plakat:", image);

// Try and change a const (This will give an error)
//title = "Inception"; // Error! can't change a const
//year = 2010; // Error! can't change a const

// let variables CAN be changes
let userRating = 4.5; // Start rating
console.log("Start rating:", userRating);

userRating = 5.0; // Updates rating - this works with let
console.log("New rating:", userRating);

// More examples of let
let isFavorite = false;
console.log("Is it a favourite movie?", isFavorite);

isFavorite = true; // Changes the boolean value
console.log("After update:", isFavorite);

//Assignment views
let views = 0;
console.log("Start views", views);

views = 1; //updates views
console.log("updated views", views);

//description = "Bingo bongo"; //Forcing an error by trying to change a const

*/


/*
// Step 4

// String composition (concatenation)
const director = "Christopher Nolan";
const movie = "Inception";
const year = 2010;

// The old method (using +)
const oldWay = "Filmen " + movie + " fra " + year + " er instrueret af " + director;
console.log("Gamle måde:", oldWay);

// The new method (with template literals ` `)
const newWay = `Filmen ${movie} fra ${year} er instrueret af ${director}`;
console.log("Nye måde:", newWay);

// calculate with numbers
let rating = 8.5;
rating = rating + 0.3; // Add 0.3
console.log("Ny rating:", rating);

let views = 0;
views = views + 1; // Count one view
console.log("Antal visninger:", views);

// Shortcut with numbers
views += 1; // Same as: views = views + 1
rating += 0.1; // Same as: rating = rating + 0.1
console.log("Opdaterede værdier:", views, rating);

// let = can be changed later
let userRating = 4.5;
console.log("Start rating:", userRating);

// Change the value (this works!)
userRating = 5.0;
console.log("New rating:", userRating);

// Old way (works, but messy)
const oldMessage = "The movie " + movie + " is from " + year;
console.log("Old way:", oldMessage);

// Smart way with template literals
const smartMessage = `The movie ${movie} is from ${year}`;
console.log("Smart way:", smartMessage);

// Multiple variables in same template literal
const complexMessage = `Movie: ${movie}, Year: ${year}, Rating: ${userRating}, Genre: ${movieGenre}`;
console.log("Complete info:", complexMessage);

// Multiple lines in same message (like your project's movie details)
const multiLineMessage = `🎬 MOVIE INFO:
Title: ${movie}
Year: ${year}
Rating: ${userRating}/10
Genre: ${movieGenre}`;
console.log(multiLineMessage);

*/

//Opgave 1.2
