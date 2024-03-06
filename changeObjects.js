const favs = {
  artist: "Céline Dion",
  food: "pho",
  animal: "wombat",
  number: 37
};

// 1. Change 'favs' values to your own using dot notation.
favs.animal = "blah";
favs.number = "42";
favs.food = "gwah";
// 2. Add at least 2 additional favorites (e.g. movie, tv show, videogame) to the object `favs` using dot notation.
favs.movie = "Fast and Furious";
favs.tvShow = "Avatar: The Last Airbender (2005)";
favs.videoGame = "Doom";
// 3. Be sure to click 'Run' to see your changes.





// CHALLENGE
// Look up object destructuring - you can also go to this link: https://www.w3schools.com/react/react_es6_destructuring.asp
//  - See if you can save the properties of the object intro separate variables using this.

let { artist, food, animal, number, movie, tvShow, videoGame } = favs;

console.log(artist);
console.log(food);
console.log(animal);
console.log(number);
console.log(movie);
console.log(tvShow);
console.log(videoGame);


// DON'T CHANGE THIS CODE
for (let key in favs) {
  let para = document.createElement("p");
  para.innerHTML = `${key}: ${favs[key]}`
  document.querySelector(".favs").appendChild(para)
}