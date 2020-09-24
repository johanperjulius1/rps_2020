
//Here I define the selection of game choices
const selection_Of_Game_Choices = ["Rock", "Paper", "Scissors"]; 

//Here I create the computer choice random generator
let computerChoice = () => {
let random_Number_Generator = [Math.floor(Math.random() *  selection_Of_Game_Choices.length)];
return selection_Of_Game_Choices[random_Number_Generator]
}
			

const playGame = (humanPlayerChoice) => {
//console.log(`Jag spelar mot datorn med ${humanPlayerChoice}`);
const computer = computerChoice();
//console.log(`Datorn spelar med ${computer}`);
        
	if (humanPlayerChoice === computer){
			console.log(`Oavgjort`);
			console.log(`Människan spelar med ${humanPlayerChoice}`)
			console.log(`Datorn spelar med ${computer}`)        
			winner.textContent = "It is a draw. We are keeping the Aliens at bay for now..."
	} else if (
		(humanPlayerChoice === 'Paper' && computer === 'Rock') ||
		(humanPlayerChoice === 'Scissors' && computer === 'Paper') ||
		(humanPlayerChoice === 'Rock' && computer === 'Scissors' )){
		console.log(`Människan spelar med ${humanPlayerChoice}`)
		console.log(`Datorn spelar med ${computer}`)
		console.log(`människa vinner`);
		winner.textContent = "Congratulations Human, You Have Saved Mankind!"
	} else {
		
		console.log(`Människan spelar med ${humanPlayerChoice}`)
		console.log(`Datorn spelar med ${computer}`)
		console.log(`Datorn vinner`)
		winner.textContent = "The Aliens win, Mankind has fallen!!"
	};


				
				
				
				

	}