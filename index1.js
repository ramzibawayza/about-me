// 'use strict';
// var counter = 0
// var name = prompt('What is your name?');
// alert(' Nice to meet you ' + name);



// var questions = [
//     [
//         'Is the last name of \"Ramzi\" is \"Bawayza\"?',
//         'Great answer, you got 1 point, your score: ' +  ++counter,
//         'Oooh, wrong annswer'
//     ],
//     [
//         'Is Ramzi age 24 years?',
//         'WHAT DID YOU SAY!, Do you think I am at the age of your father, Certainly wrong answer.',
//         'Great one, you got 1 point, your score: ' + ++counter,
//     ],
//     [
//         'Has Ramzi studied at the University of Jordan?',
//         'Oh my God, Do you think i am of the bourgeois class?',
//         'Wow, Great answer, you got 1 point, your score: ' + ++counter,
//     ],
//     [
//         'Is Ramzi favorite team is Real Madrid?',
//         'Of course it is, you got 1 point, your score: ' + ++counter,
//         'Oooh, wrong annswer, sorry about that!'
//     ],
//     [
//         'do Ramzi love coding?',
//         'Of course i do, you got 1 point, your score:' + ++counter ,
//         'Sorry about that, wrong annswer '
//     ],
// ];
// for (var i = 0; i < questions.length; i++) {
//     var currentQuestion = questions[i]; // array of 3 items [prompt, positive, negative]
//     var promptIndex = 0;
//     var positiveIndex = 1;
//     var negativeIndex = 2;
//     var currentPrompt = currentQuestion[promptIndex];
//     var userResponse = prompt(currentPrompt);
//     userResponse = userResponse.toUpperCase();
//     var currentPositiveReply = currentQuestion[positiveIndex];
//     var currentNegativeReply = currentQuestion[negativeIndex];
//     switch (userResponse) {
//         case 'YES':
//         case 'Y':
//             // ++counter;
//             alert(currentPositiveReply);
//             break;
//         case 'NO':
//         case 'N':
//             alert(currentNegativeReply);
//             break;
//         default:
//             alert(' Wrong Answer!');
//     }
// }



var num = prompt('What is favorite number for Ramzi?');
var proceed = false;



while (!proceed) {

    if (typeof (num) == "string") {
        num = num.trim();
        if (num == "") {
            proceed = false;
            alert("Please input number ----------------- ");
            var num = prompt('What is favorite number for Ramzi?');

        }
        else {
            proceed = true;


            var num = prompt('What is favorite number for Ramzi?(just number)');

            for (let j = 0; j < 1; j++) {
                if (num === 7) {
                    alert('correct answer');

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


                }
                num = prompt('What is favorite number for Ramzi?(just number)');
                // break;
            }




            if (num === null) {
                proceed = false;
                alert('Approve process cancelled !!!');
                var num = prompt('What is favorite number for Ramzi?(just number)');
                break;

            }
        }
    }





    // for (let k = 0; k < 6; k++) {
    //     var color = prompt('What is favorite color for Ramzi?');

    //     if (color == 'red' || color == 'blue' || color == 'black' || color == 'maroon' || color == 'yellow' || color == 'green') {
    //         alert('correct answer, you got 1 point');
    //         ++counter;
    //         break;

    //     } else {
    //         alert('wrong answer');
    //     }
    // }
    // alert('My favorite color is: \"Black\", \"Blue\", \"Red\", \"Green\", \"Maroon\"')
    // alert('Thank you for your time, You have got ' + counter + '/7')











    // var love = prompt('Is the last name of \"Ramzi\" is \"Bawayza\"?')
    // love = love.toLowerCase();

    // if (love == 'yes') { // YES, yES, yeS, Yes, YEs, yEs,
    //     alert('Great answer');
    // } else if (love == 'y') {
    //     alert('Great answer');
    // } else if (love == 'no') {
    //     alert('Oooh, wrong annswer');
    // } else if (love == 'n') {
    //     alert('Oooh, wrong annswer');
    // }
    // else {
    //     alert('Wrong answer, please enter \"yes\" OR \"no\"');
    // }

    // var love = prompt('Is Ramzi age 28 years?')
    // love = love.toLowerCase();
    // if (love == 'yes') { // YES, yES, yeS, Yes, YEs, yEs,
    //     alert('WHAT DID YOU SAY!, Do you think I am at the age of your father, Certainly wrong answer.');
    // } else if (love == 'y') {
    //     alert('WHAT DID YOU SAY!, Do you think I am at the age of your father, Certainly wrong answer.');
    // } else if (love == 'no') {
    //     alert('Great one, keep going');
    // } else if (love == 'n') {
    //     alert('Great one, keep going');
    // }
    // else {
    //     alert('Wrong answer, please enter \"yes\" OR \"no\"');
    // }

    // var love = prompt('Has Ramzi studied at the University of Jordan?')
    // love = love.toLowerCase();
    // if (love == 'yes') { // YES, yES, yeS, Yes, YEs, yEs,
    //     alert('Oh my God, Do you think i am of the bourgeois class?');
    // } else if (love == 'y') {
    //     alert('Oh my God, Do you think i am of the bourgeois class?');
    // } else if (love == 'no') {
    //     alert('Wow, Great answer');
    // } else if (love == 'n') {
    //     alert('Wow, Great answer');
    // }
    // else {
    //     alert('Wrong answer, please enter \"yes\" OR \"no\"');
    // }

    // var love = prompt('Is Ramzi favorite team is Real Madrid?')
    // love = love.toLowerCase();
    // if (love == 'yes') { // YES, yES, yeS, Yes, YEs, yEs,
    //     alert('Of course it is');
    // } else if (love == 'y') {
    //     alert('Of course it is');
    // } else if (love == 'no') {
    //     alert('Oooh, wrong annswer, sorry about that!');
    // } else if (love == 'n') {
    //     alert('Oooh, wrong annswer, sorry about that!');
    // }
    // else {
    //     alert('Wrong answer, please enter \"yes\" OR \"no\"');
    // }

    // var love = prompt('do Ramzi love coding?')
    // love = love.toLowerCase();
    // if (love == 'yes') { // YES, yES, yeS, Yes, YEs, yEs,
    //     alert('Of course i do');
    // } else if (love == 'y') {
    //     alert('Of course i do');
    // } else if (love == 'no') {
    //     alert('Sorry about that, wrong annswer');
    // } else if (love == 'n') {
    //     alert('Sorry about that, wrong annswer');
    // }
    // else {
    //     alert('Wrong answer, please enter \"yes\" OR \"no\"');
    // }

    // switch (love){
    //     case 'Yes':
    //         alert (positiveReplies[0]);
    //         break;
    //         case 'NO':
    //             alert (nigativeReplies[0]);
    //             break;
    //             default:
    //                 alert ('aaaaaaa');
}