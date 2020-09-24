
//Here I define the selection of game choices
const availableGameChoices = ["Rock", "Paper", "Scissors"]; 

//Here I create the computer choice random generator
let computerChoice = () => {
let randomNumberGenerator = [Math.floor(Math.random() *  availableGameChoices.length)];
return availableGameChoices[randomNumberGenerator]
}

let playerScore = 0;
let computerScore = 0;
			
//Here is where the game play is executed
const playGame = (humanPlayerChoice) => {
	console.log(`Människa spelar med ${humanPlayerChoice}`)
	playerchoice.textContent = `You chose ${humanPlayerChoice}`
	
	const computer = computerChoice();
	console.log(`Dator spelar med ${computer}`)
	computerchoice.textContent = `Computer chose ${computer}`
					

		if (humanPlayerChoice === computer){
				winner.textContent = "It is a draw. We are keeping the Aliens at bay for now..."
		} else if (
			(humanPlayerChoice === 'Paper' && computer === 'Rock') ||
			(humanPlayerChoice === 'Scissors' && computer === 'Paper') ||
			(humanPlayerChoice === 'Rock' && computer === 'Scissors' )){	
			playerScore++
			console.log(playerScore)
			winner.textContent = "Congratulations Human, You Have Saved Mankind!"
			playerscore.textContent = `${playerScore}`

		} else {
			computerScore++
				winner.textContent = "The Aliens win, Mankind has fallen!!"
				computerscore.textContent = `${computerScore}`
		};


				
}