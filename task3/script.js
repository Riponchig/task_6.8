let light = document.querySelectorAll('.trafficLight');
let index = 0;

function changeLight() {
    light[0].style.background = 'black';
    light[1].style.background = 'black';
    light[2].style.background = 'black';
    if (index === 0){
        light[1].style.background = 'yellow';
        index = 1;
    } else if (index === 1){
        light[2].style.background = 'green';
        index = 2;
    } else if (index === 2){
        light[0].style.background = 'red';
        index = 0; 
    }

}
document.querySelector('.trafficLight').addEventListener('click', changeLight);