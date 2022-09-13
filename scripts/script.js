window.addEventListener('DOMContentLoaded', function () {

    function rollDice () {

        var diceSide1 = document.getElementById('dice-side-1');
        var diceSide2 = document.getElementById('dice-side-2');
        var status = document.getElementById('status');

        var side1 = Math.floor( Math.random() * 6 ) + 1;
        var side2 = Math.floor( Math.random() * 6 ) + 1;
        var diceTotal = side1 + side2;

        diceSide1.innerHTML = side1;
        diceSide2.innerHTML = side2;

        status.innerHTML = 'Сумма двух чисел ' + diceTotal + '.';

        if ( side1 === side2 ) {
            status.innerHTML += ' У вас выпал дубель! Бросайте еще!';
        }
    }

    var buttonRollDice = document.querySelector('.dice-roll');
    buttonRollDice.addEventListener('click', rollDice, false);

}, false);