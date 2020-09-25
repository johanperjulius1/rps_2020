// Here I am creating the basic functionality to click on the images.  The element ids are fetched from div elements in index.html. 
//After defining the const that gets the corresponding element id when clicking on respective image, I create the function that when 
// clicking on an image, the game is played with the argument of available game chocies.

//To avoid eventual confusion, the id is spelled in small letters and 
//the playGame argument in capital

const rock = document.getElementById("rock");
rock.addEventListener("click", () => {
  playGame('Rock')
})


const paper = document.getElementById("paper");
paper.addEventListener("click", () => {
  playGame('Paper')})


const scissors = document.getElementById("scissors");
scissors.addEventListener("click", () => {
playGame('Scissors')})


