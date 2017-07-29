/*
To Dos:
- Include a timer that moves to the next person if the user is not clicking on 'Next' or 'Prev'. If the user clicks on 'Next' or 'Prev', the timer should be reset. The timer should transition between people every 10 seconds.

Complete:
- Include 'Prev' and 'Next' buttons
- One person at a time should be shown on the DOM represented by showing their name and their shout out
- clicking 'Prev' when on the first person should wrap around to show the last person and vice versa.
- DOM should display showing the number of people and which is being currently viewed (eg. 2/20).
- When a person is displayed, show their first name, last name and their shout out. Only one person should be shown at any given time.
- Include a fade out and fade in animation in-between transitioning people.
*/

console.log('peopleArray from data.js: ', peopleArray);

$(document).ready(function () {
    // Defining global variables
    var currentPerson = 1;

    // Initial View on DOM load
    $('#name').html(peopleArray[currentPerson-1].name);
    $('#shoutout').html(peopleArray[currentPerson - 1].shoutout);
    $('#current-person').html('0' + currentPerson + ' out of 23');

    // Add event listeners for Next and Previous Buttons
    $('.buttons').on('click', '#next', nextPerson);
    $('.buttons').on('click', '#previous', previousPerson);

    // Adjust currentPerson when next button is clicked
    function nextPerson() {
        if(currentPerson === 23) {
            currentPerson = 1;
        } else {
            currentPerson++;            
        }
        displayCurrentPerson();
    }

    // Adjust currentPerson when previous button is clicked
    function previousPerson() {
        if(currentPerson === 1) {
            currentPerson = 23;
        } else {
            currentPerson--;
        }
        displayCurrentPerson();
    }

    // Function to display the current person when next or previous button is clicked
    function displayCurrentPerson() {
        $('#name').hide().html(peopleArray[currentPerson - 1].name).fadeIn('fast');
        $('#shoutout').hide().html(peopleArray[currentPerson - 1].shoutout).fadeIn('fast');
        if(currentPerson < 10) {
            $('#current-person').html('0' + currentPerson + ' out of 23');
        } else {
            $('#current-person').html(currentPerson + ' out of 23');
        }
    }
});