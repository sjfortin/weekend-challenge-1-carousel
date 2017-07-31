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
    var personCurrentlyBeingViewed = 1;
    var person = peopleArray[personCurrentlyBeingViewed - 1];
    var totalNumberOfPeople = peopleArray.length;

    // Start application and set view on DOM load
    displayCurrentPerson();

    // Add event listeners for Next and Previous Buttons
    $('#next').on('click', changePerson);
    $('#previous').on('click', changePerson);

    function changePerson() {
        if ($(this)[0].id === 'previous') {
            if (personCurrentlyBeingViewed === 1) {
                personCurrentlyBeingViewed = totalNumberOfPeople;
            } else {
                personCurrentlyBeingViewed--;
            }
        } else if ($(this)[0].id === 'next') {
            if (personCurrentlyBeingViewed === totalNumberOfPeople) {
                personCurrentlyBeingViewed = 1;
            } else {
                personCurrentlyBeingViewed++;
            }
        }

        // Reset timer and start it again
        clearInterval(carouselTimer);
        startCarouselTimer();

        displayCurrentPerson();
    }

    // Displays the current person when next or previous button is clicked
    function displayCurrentPerson() {
        person = peopleArray[personCurrentlyBeingViewed - 1];

        $("#name, #shoutout").fadeOut(200, function () {
            $('#name').html(person.name).fadeIn(400);
            $('#shoutout').html(person.shoutout).fadeIn(400);
        });

        if (personCurrentlyBeingViewed < 10) {
            $('#current-person').html('0' + personCurrentlyBeingViewed + ' out of ' + totalNumberOfPeople);
        } else {
            $('#current-person').html(personCurrentlyBeingViewed + ' out of ' + totalNumberOfPeople);
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
        if (personCurrentlyBeingViewed === totalNumberOfPeople) {
            personCurrentlyBeingViewed = 1;
        } else {
            personCurrentlyBeingViewed++
        }

        displayCurrentPerson();
    }

    // Starting to add start and stop functionality
    $('#start').on('click', startTimer);
    $('#stop').on('click', stopTimer);

    function stopTimer() {
        clearInterval(carouselTimer);
    }

    function startTimer() {
        startCarouselTimer();
    }
});