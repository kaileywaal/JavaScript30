const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

const rotationDegrees = 360 / 60;
const hourRotationDegrees = 360 / 12;


function rotateHand(hand, degrees) {
    hand.style.transform = `rotate(${90 + (degrees)}deg)`;
}

function minuteRotation() {
    let date = new Date();
    return date.getMinutes() * rotationDegrees;
};

function secondRotation() {
    let date = new Date();
    return date.getSeconds() * rotationDegrees;
}

function hourRotation() {
    let date = new Date();
    let hour = date.getHours();
    return ( hour > 12 ? hour - 12 : hour ) * hourRotationDegrees;
}

setInterval(setHandsRotation, 1000);

function setHandsRotation() {
    rotateHand(minuteHand, minuteRotation());
    rotateHand(secondHand, secondRotation())
    rotateHand(hourHand, hourRotation());
}