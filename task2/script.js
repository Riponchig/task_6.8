let consoleLog = document.querySelector('#consoleLog');
let aalert = document.querySelector('#alert');
let pprompt = document.querySelector('#prompt');

consoleLog.addEventListener('click', () =>{
    alert('Вывод информации в консоль');
}); 

aalert.addEventListener('click', () =>{
    alert('Команда alert в JavaScript выводит всплывающее диалоговое окно с сообщением.');
}); 

pprompt.addEventListener('click', () =>{
    alert('Функция prompt() показывает всплывающее окно с полем ввода, где пользователь может ввести текст.');
});