/*
To Dos:

- Include a fade out and fade in animation in-between transitioning people.
- Include a timer that moves to the next person if the user is not clicking on "Next" or "Prev". If the user clicks on "Next" or "Prev", the timer should be reset. The timer should transition between people every 10 seconds.

Complete:
- Include "Prev" and "Next" buttons
- One person at a time should be shown on the DOM represented by showing their name and their shout out
- clicking "Prev" when on the first person should wrap around to show the last person and vice versa.
- DOM should display showing the number of people and which is being currently viewed (eg. 2/20).
- When a person is displayed, show their first name, last name and their shout out. Only one person should be shown at any given time.
*/

console.log('peopleArray from data.js: ', peopleArray);

$(document).ready(function () {
    // Defining global variables
    var currentPersonDisplayed = 1;

    // Initial View on DOM load
    $('#name').html(peopleArray[currentPersonDisplayed-1].name);
    $('#shoutout').html(peopleArray[currentPersonDisplayed - 1].shoutout);
    $('#current-person').html(currentPersonDisplayed + "/23");

    // Add event listeners for Next and Previous Buttons
    $('.buttons').on('click', '#next', nextPerson);
    $('.buttons').on('click', '#previous', previousPerson);

    function nextPerson() {
        if(currentPersonDisplayed === 23) {
            currentPersonDisplayed = 1;
        } else {
            currentPersonDisplayed++;            
        }
        console.log('Next person', currentPersonDisplayed);
        displayPerson();
    }

    function previousPerson() {
        if(currentPersonDisplayed === 1) {
            currentPersonDisplayed = 23;
        } else {
            currentPersonDisplayed--;
        }
        console.log('Previous person', currentPersonDisplayed);
        displayPerson();
    }

    function displayPerson() {
        $('#name').html(peopleArray[currentPersonDisplayed - 1].name);
        $('#shoutout').html(peopleArray[currentPersonDisplayed - 1].shoutout);
        $('#current-person').html(currentPersonDisplayed + "/23");
    }
});