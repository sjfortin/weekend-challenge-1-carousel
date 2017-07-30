/*
To Dos:
- Combine next and previous button event handlers into one event listener? ==> nextPerson and previousPerson combine into one function? Need to implement DRY here.

Complete:
- Include 'Prev' and 'Next' buttons
- One person at a time should be shown on the DOM represented by showing their name and their shout out
- clicking 'Prev' when on the first person should wrap around to show the last person and vice versa.
- DOM should display showing the number of people and which is being currently viewed (eg. 2/20).
- When a person is displayed, show their first name, last name and their shout out. Only one person should be shown at any given time.
- Include a fade out and fade in animation in-between transitioning people.
- Include a timer that moves to the next person if the user is not clicking on 'Next' or 'Prev'. If the user clicks on 'Next' or 'Prev', the timer should be reset. The timer should transition between people every 10 seconds.
*/

console.log('peopleArray from data.js: ', peopleArray);

$(document).ready(function () {
    // Defining global variables
    var currentPersonToBeDisplayed = 1;
    var person = peopleArray[currentPersonToBeDisplayed - 1];

    // Initial View on DOM load
    // $("#name").hide(function () {
    //     $(this).html(person.name).fadeIn(200);
    // });
    // $("#shoutout").hide(function () {
    //     $(this).html(person.shoutout).fadeIn(200);
    // });

    $("#name, #shoutout").hide(function () {
        $('#name').html(person.name).fadeIn(200);
        $('#shoutout').html(person.shoutout).fadeIn(200);
    });

    $('#current-person').html('0' + currentPersonToBeDisplayed + ' out of 23');

    // Add event listeners for Next and Previous Buttons
    $('#next').on('click', nextPerson);
    $('#previous').on('click', previousPerson);

    // Set the person to be displayed as the next person when next button is clicked
    function nextPerson() {
        // If current person is the last person, set the person to be displayed to the first person
        if (currentPersonToBeDisplayed === peopleArray.length) {
            currentPersonToBeDisplayed = 1;
        } else {
            currentPersonToBeDisplayed++;
        }

        // Reset timer and start it again
        clearInterval(carouselTimer);
        startCarouselTimer();

        displayCurrentPerson();
    }

    // Set the person to be displayed as the previous person when previous button is clicked
    function previousPerson() {
        // If the current person is the first person, set the person to be displayed to the last person
        if (currentPersonToBeDisplayed === 1) {
            currentPersonToBeDisplayed = peopleArray.length;
        } else {
            currentPersonToBeDisplayed--;
        }
        
        // Reset timer and start it again
        clearInterval(carouselTimer);
        startCarouselTimer();
        
        displayCurrentPerson();
    }

    // Displays the current person when next or previous button is clicked
    function displayCurrentPerson() {
        person = peopleArray[currentPersonToBeDisplayed - 1];

        // $("#name").fadeOut(200, function () {
        //     $(this).html(person.name).fadeIn(400);
        // });

        // $("#shoutout").fadeOut(200, function () {
        //     $(this).html(person.shoutout).fadeIn(400);
        // });

        $("#name, #shoutout").fadeOut(200, function () {
            $('#name').html(person.name).fadeIn(400);
            $('#shoutout').html(person.shoutout).fadeIn(400);
        });

        if (currentPersonToBeDisplayed < 10) {
            $('#current-person').html('0' + currentPersonToBeDisplayed + ' out of 23');
        } else {
            $('#current-person').html(currentPersonToBeDisplayed + ' out of 23');
        }
    }

    // Timer setup for the auto transition between names and shoutouts
    var carouselTimer;

    function startCarouselTimer() {
        carouselTimer = setInterval(function () {
            timerDisplayCurrentPerson();
        }, 10000);
    }
    startCarouselTimer();

    function timerDisplayCurrentPerson() {
        if (currentPersonToBeDisplayed === peopleArray.length) {
            currentPersonToBeDisplayed = 1;
        } else {
            currentPersonToBeDisplayed++
        }
        displayCurrentPerson();
    }
});