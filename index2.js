'use strict';
var counter = 0
var name = prompt('What is your name?');
alert(' Nice to meet you ' + name);



var questions = [
    [
        'Is the last name of \"Ramzi\" is \"Bawayza\"?',
        'Great answer, you got 1 point',
        'Oooh, wrong annswer'
    ],
    [
        'Is Ramzi age 24 years?',
        'Great one, you got 1 point',
        'WHAT DID YOU SAY!, Do you think I am at the age of your father, Certainly wrong answer.'
    ],
    [
        'Has Ramzi studied at the University of Jordan?',
        'Wow, Great answer, you got 1 point',
        'Oh my God, Do you think i am of the bourgeois class?',
    ],
    [
        'Is Ramzi favorite team is Real Madrid?',
        'Of course it is, you got 1 point',
        'Oooh, wrong annswer, sorry about that!',
    ],
    [
        'do Ramzi love coding?',
        'Of course i do, you got 1 point',
        'Sorry about that, wrong annswer'
    ],
];
for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i]; // array of 3 items [prompt, positive, negative]
    var promptIndex = 0;
    var positiveIndex = 1;
    var negativeIndex = 2;
    var currentPrompt = currentQuestion[promptIndex];
    var userResponse = prompt(currentPrompt);
    userResponse = userResponse.toUpperCase();
    var currentPositiveReply = currentQuestion[positiveIndex];
    var currentNegativeReply = currentQuestion[negativeIndex];
    switch (userResponse) {
        case 'YES':
        case 'Y':
            alert(currentPositiveReply);
            counter++;
            break;
        case 'NO':
        case 'N':
            alert(currentNegativeReply);
            break;
        default:
            alert(' Wrong Answer!');
    }
}


for (let j = 0; j < 4; j++) {
    var num = prompt('What is favorite number for Ramzi?(just number)');
    if (num == 7) {
        alert('correct answer, you got 1 point');
        counter++;
        break;
    } else if (num >= 10) {
        alert('too high');
    }
    else if (num > 7) {
        alert('high');
    }
    else if (num < 7) {
        alert('low');
    } else if (num < 4) {
        alert('too low');

    }}

    for (let k = 0; k < 6; k++) {
        var color = prompt('What is favorite color for Ramzi?');
    
        if (color == 'red' || color == 'blue' || color == 'black' || color == 'maroon' || color == 'yellow' || color == 'green') {
            alert('correct answer, you got 1 point');
            break;
            counter++;
        } else {
            alert('wrong answer');
        }
    
    }
    alert('My favorite color is: \"Black\", \"Blue\", \"Red\", \"Green\", \"Maroon\"')
    alert('Thank you for your time, You have got ' + counter + '/7')
    