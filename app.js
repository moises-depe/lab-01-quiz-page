import { countsAsAYes } from './counts-as-a-yes.js';


const button = document.getElementById('launch-button');
const results = document.getElementById('results');

button.addEventListener('click', () => {
    const userName = prompt('What is your name?');

    const userHasConfirmed = confirm('Do you really want to take this quiz?');

    if (!userHasConfirmed) {
        alert('you have opted out. congrats!');
        return;
    }

    let correctAnswers = 0;

    const bombersResponse = prompt('Does the "New York Highlanders" sound like our original name?');

    if (countsAsAYes(bombersResponse)) {
        correctAnswers++;
    }

    const sisterResponse = prompt(`Okay ${userName}! Is that qoute from a movie called "catch me if you can"?`);

    if (countsAsAYes(sisterResponse)) {
        correctAnswers++;
    }
    
    const cliffordResponse = prompt(`Okay ${userName}! Does Babe Ruth hold the HomeRun record?`);

    if (!countsAsAYes(cliffordResponse)) {
        correctAnswers++;
    }
    

    alert('Quiz complete! Check the page for your results');


    results.textContent = `Hey ${userName}, you got ${correctAnswers} right out of 3.`;
});