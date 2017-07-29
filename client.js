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
    var currentPersonToBeDisplayed = 1;
    var secondsCounter = 0;
    var person = peopleArray[currentPersonToBeDisplayed - 1];

    // Initial View on DOM load
    $('#name').html(person.name);
    $('#shoutout').html(person.shoutout);
    $('#current-person').html('0' + currentPersonToBeDisplayed + ' out of 23');

    // Add event listeners for Next and Previous Buttons
    $('.buttons').on('click', '#next', nextPerson);
    $('.buttons').on('click', '#previous', previousPerson);

    // Adjust currentPerson when next button is clicked
    function nextPerson() {
        if (currentPersonToBeDisplayed === peopleArray.length) {
            currentPersonToBeDisplayed = 1;
        } else {
            currentPersonToBeDisplayed++;
        }
        displayCurrentPerson();
    }

    // Adjust currentPerson when previous button is clicked
    function previousPerson() {
        if (currentPersonToBeDisplayed === 1) {
            currentPersonToBeDisplayed = peopleArray.length;
        } else {
            currentPersonToBeDisplayed--;
        }
        displayCurrentPerson();
    }

    // Function to display the current person when next or previous button is clicked
    function displayCurrentPerson() {
        person = peopleArray[currentPersonToBeDisplayed - 1];
        $('#name').hide().html(person.name).fadeIn('slow');
        $('#shoutout').hide().html(person.shoutout).fadeIn('slow');
        if (currentPersonToBeDisplayed < 10) {
            $('#current-person').html('0' + currentPersonToBeDisplayed + ' out of 23');
        } else {
            $('#current-person').html(currentPersonToBeDisplayed + ' out of 23');
        }
    }

    // Working on transition timer. Need to figure out how to reset. Maybe have a countdown display on the DOM
    function timerDisplayCurrentPerson() {
        secondsCounter = 0;
        if (currentPersonToBeDisplayed === peopleArray.length) {
            currentPersonToBeDisplayed = 1;
        } else {
            currentPersonToBeDisplayed++
        }
        displayCurrentPerson();
    }

    var carouselTimer = function () {
        setInterval(timerDisplayCurrentPerson, 5000);
    }

    carouselTimer();
});