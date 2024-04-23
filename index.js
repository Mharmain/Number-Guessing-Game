#!/usr/bin/env node
import inquirer from 'inquirer';
console.log('\n\tWelcome to the \'Muhammad Harmain\'-CLI Number Guessing Game\n');
let loop = true;
while (loop) {
    const randomNumber = Math.floor(Math.random() * 5 + 1);
    // console.log('Random Number: ', randomNumber);
    let answer = await inquirer.prompt([
        { name: 'guessedNumber', message: 'Guess a number between 1 and 5: ', type: 'number' }
    ]);
    if (randomNumber === answer.guessedNumber) {
        console.log('Congratulations! You have guessed the correct number.');
    }
    else {
        console.log(`Sorry, the correct number was ${randomNumber}`);
    }
    let response = await inquirer.prompt([
        { name: 'continue', message: 'Do you want to play again? (y/n): ', type: 'input' }
    ]);
    if (response.continue.toLowerCase() !== 'y') {
        loop = false;
        console.log('Thank you for playing the game.');
    }
    else {
        console.log('Great! Let\'s play again.');
    }
}
