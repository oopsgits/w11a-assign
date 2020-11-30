let eventOne = document.getElementById("event1")
eventOne.addEventListener("click", function(eventDetails) {
    eventOne.style.color = "red";

});

let eventTwo = document.getElementById("event2");
document.body.addEventListener("keypress", function(eventDetails) {
    if(eventDetails.code == "Space"){
        eventTwo.style.color = "green"
    }
});

let eventThree = document.getElementById("event3");
eventThree.addEventListener("mouseenter", function(eventDetails) {
    eventThree.style.color = "blue";


});

eventThree.addEventListener("mouseleave", function(eventDetials) {
    eventThree.style.color = "black";
});






