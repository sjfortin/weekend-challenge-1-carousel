// console.log('peopleArray from data.js: ', peopleArray);

// Defining global variables
var personCurrentlyBeingViewed = 1;
var person = peopleArray[personCurrentlyBeingViewed - 1];
var totalNumberOfPeople = peopleArray.length;
var carouselTimer;

$(document).ready(function () {

    // Start application and set view on DOM load
    displayCurrentPerson();

    // Event handlers
    $('#next').on('click', changePerson);
    $('#previous').on('click', changePerson);
    $('#start').on('click', startTimer);
    $('#stop').on('click', stopTimer);

});

// Changes personCurrentlyBeingViewed when next or previous buttons are clicked
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

// Displays the current person
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

// Auto transitions name and shoutouts
function startCarouselTimer() {
    carouselTimer = setInterval(function () {
        timerDisplayCurrentPerson();
    }, 10000);
}
startCarouselTimer();

// Timer function to display current person
function timerDisplayCurrentPerson() {
    if (personCurrentlyBeingViewed === totalNumberOfPeople) {
        personCurrentlyBeingViewed = 1;
    } else {
        personCurrentlyBeingViewed++
    }

    displayCurrentPerson();
}

// Stop the auto playing
function stopTimer() {
    clearInterval(carouselTimer);
}

// Start the auto playing
function startTimer() {
    startCarouselTimer();
}