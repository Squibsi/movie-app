"use strict"; // Enable strict mode for better error checking

// #0: Start app når DOM er loaded (hele HTML siden er færdig med at indlæse)
document.addEventListener("DOMContentLoaded", initApp);

// #1: Initialize the app
function initApp() {
  console.log("initApp: Movie App is running 🎉"); // Log to the console that the app is running
}

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

//Fortsæt fra del 1 step 4: Arbejde med strings og tal (https://github.com/cederdorff/js-movie-app/blob/main/_exercises/movie-app-1.md)