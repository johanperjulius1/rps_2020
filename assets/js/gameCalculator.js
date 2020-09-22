
//Here I define the selection of game choices
const selection_Of_Game_Choices = ["Rock", "Paper", "Scissor"]; 

let computerChoice = () => {
	let random_Number_Generator = [Math.floor(Math.random() * selection_Of_Game_Choices.length)];
	return selection_Of_Game_Choices[random_Number_Generator]}

console.log(computerChoice());







	//start the game

const calculate_Game_Outcome = (playerChoice, computerChoice) => {
	//Update Text
	const winner = document.querySelector(".winner");
	//Checking for a tie
	if (playerChoice === computerChoice) {
		winner.textContent = "It is a tie";
		return;
	}
	//Check for Rock
	if (playerChoice === "rock") {
		if (computerChoice === "scissors") {
			winner.textContent = "Player Wins";
			pScore++;
			updateScore();
			return;
		} else {
			winner.textContent = "Computer Wins";
			cScore++;
			updateScore();
			return;
		}
	}
				
				
				
				
				
				
				


				//Here I create the computer choice
				

			};

			

			