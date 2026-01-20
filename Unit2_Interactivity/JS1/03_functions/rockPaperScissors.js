let getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if(userInput === 'rock') {
    return userInput;
  } else if(userInput === 'paper') {
    return userInput;
  } else if(userInput === 'scissors') {
    return userInput;
  } else {
    console.log("Please pick rock, paper, or scissors...");
  }
};

let computerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);
  if(randomNum === 0) {
    return "rock";
  } else if(randomNum === 1) {
    return "paper";
  } else if(randomNum === 2) {
    return 'scissors'
  } else {
    console.log("An internal error occurred...");
  }
};

function determineWinner(userChoice, computerChoice) {
  
  if(userChoice === computerChoice) {
    return "Its a draw!"
  }

  if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return "Computer wins, better luck next time."
    } else {
      return "Congratulations! You are the winner!"
    }
  }

  if(userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return "Computer wins, better luck next time."
    } else {
      return "Congratulations! You are the winner!"
    }
  }

  if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return "Computer wins, better luck next time."
    } else {
      return "Congratulations! You are the winner!"
    }
  }

}


function playGame() {
  let player = getUserChoice('papER');
  console.log("Player: " + player);
  let cpu = computerChoice();
  console.log("Computer: " + cpu);
  console.log()
  console.log(determineWinner(player, cpu));

}

playGame();

