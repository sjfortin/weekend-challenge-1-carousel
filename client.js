// console.log('peopleArray from data.js: ', peopleArray);

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