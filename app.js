function getComputerChoice()
{
    randomVal = Math.random();
    if (randomVal < 1/3) {
        return 'rock';
    }
    else if (randomVal < 2/3) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function getHumanChoice()
{
    userInput = prompt(`Choose "Rock", "Paper" or "Scissors"`);
    return userInput;
}

function playGame()
{
    let sumOfScore = 0;
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice)
    {
        let lcHumanChoice = humanChoice.toLowerCase();

        if (lcHumanChoice === computerChoice)
        {
            console.log('Draw.');
        }
        else if (lcHumanChoice === 'rock')
        {
            if (computerChoice === 'paper')
            {
                console.log('You Lose! Paper beats Rock');
                computerScore++;
            }
            else if (computerChoice === 'scissors')
            {
                console.log('You Won! Rock beats Scissors');
                humanScore++;
            }
        }
        else if (lcHumanChoice === 'paper')
            {
                if (computerChoice === 'rock')
                {
                    console.log('You Won! Paper beats Rock');
                    humanScore++;
                }
                else if (computerChoice === 'scissors')
                {
                    console.log('You Lose! Scissors beats Paper');
                    computerScore++;
                }
            }
        else if (lcHumanChoice === 'scissors')
        {
            if (computerChoice === 'rock')
            {
                console.log('You Lose! Rock beats Scissors');
                computerScore++;
            }
            else if (computerChoice === 'paper')
            {
                console.log('You Won! Scissors beats Paper');
                humanScore++;
            }
        }
        console.log(`Human Score: ${humanScore}`);
        console.log(`Computer Score: ${computerScore}`);
        sumOfScore = humanScore + computerScore;
    }
    while (sumOfScore < 5)
    {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore > computerScore)
    {
        console.log('You Won!!');
    }
    else
    {
        console.log('You Lose');
    }
}