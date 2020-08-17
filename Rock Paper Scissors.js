const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
    return userInput
  } else {
    console.log('Error, please type: rock, paper, or scissors.')
  }
};

const getComputerChoice = () => {
  const randNum = Math.floor(Math.random()* 3)
  switch (randNum) {
    case 0:
     return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
};


const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'This game resulted in a tie!'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Sorry, paper beats rock'
    } else {
      return 'Congratulations, you win!'
    }
  }
  if (userChoice = 'paper') {
    if (computerChoice === 'scissors') {
      return 'Sorry, scissors beats paper'
    } else {
      return 'Congratulations, you win!'
    }
  }
  if (userChoice = 'scissors') {
    if (computerChoice === 'rock') {
      return 'Sorry, rock beats scissors'
    } else {
      return 'Congratulations, you win!'
    }
  }
};




const playGame = () => {
const userChoice = getUserChoice('Paper');
const computerChoice = getComputerChoice();
console.log('You picked ' + userChoice)
console.log('The computer picked ' + computerChoice)
console.log(determineWinner(userChoice, computerChoice));
}

playGame();