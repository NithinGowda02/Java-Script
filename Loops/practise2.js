let game_number = 25; // The number to guess
let guess_user = prompt("Guess the number between 1 and 50:");
while(guess_user != game_number) {
    guess_user=prompt("You entered an invalid number. Please guess again: ");

}console.log(`You guessed: ${guess_user} Congratulations!`); // This will always execute