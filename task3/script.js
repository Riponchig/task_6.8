let trafficLightEl1 = document.querySelector('#trafficLight1');
let trafficLightEl2 = document.querySelector('#trafficLight2');
let trafficLightEl3 = document.querySelector('#trafficLight3');

function makeGreen() {
    trafficLightEl3.style.background = ('green');
    trafficLightEl1.removeEventListener('click', makeGreen);
    trafficLightEl2.removeEventListener('click', makeGreen);
    trafficLightEl3.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);

}
function makeYellow() {
    trafficLightEl2.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeRed);
}
function makeRed() {
    trafficLightEl1.style.background = ('red');
    trafficLightEl1.removeEventListener('click', makeRed);
    trafficLightEl2.removeEventListener('click', makeRed);
    trafficLightEl3.removeEventListener('click', makeRed);
    trafficLightEl1.addEventListener('click', makeGreen);
    trafficLightEl2.addEventListener('click', makeGreen);
    trafficLightEl3.addEventListener('click', makeGreen);
}

trafficLightEl1.addEventListener('click', makeRed);
trafficLightEl2.addEventListener('click', makeRed);
trafficLightEl3.addEventListener('click', makeRed);