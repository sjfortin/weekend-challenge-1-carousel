/*
To Dos:
- One person at a time should be shown on the DOM represented by showing their name and their shout out
- clicking "Prev" when on the first person should wrap around to show the last person and vice versa.
- DOM should display showing the number of people and which is being currently viewed (eg. 2/20).
- When a person is displayed, show their first name, last name and their shout out. Only one person should be shown at any given time.
- Include a fade out and fade in animation in-between transitioning people.
- Include a timer that moves to the next person if the user is not clicking on "Next" or "Prev". If the user clicks on "Next" or "Prev", the timer should be reset. The timer should transition between people every 10 seconds.

Complete:
- Include "Prev" and "Next" buttons

*/

console.log('peopleArray from data.js: ', peopleArray);

$(document).ready(function () {
    
    // Initial View on DOM load
    var currentPerson = 1;

    $('#name').html(peopleArray[currentPerson-1].name);
    $('#shoutout').html(peopleArray[currentPerson - 1].shoutout);
    $('#current-person').html(currentPerson + "/23");

    // Add event listeners for Next and Previous Buttons
    $('.buttons').on('click', '#next', nextPerson);
    $('.buttons').on('click', '#previous', previousPerson);

    function nextPerson() {
        currentPerson++;
        console.log('Next person', currentPerson);
    }

    function previousPerson() {
        currentPerson--;
        console.log('Previous person', currentPerson);
    }
});