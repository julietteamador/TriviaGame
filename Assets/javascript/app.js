var functionObject = {
    function1: function () {
        console.log('hi');
    },
    fn2: function () {
        console.log("what's up");
    },
    adder: function (num1, num2) {
        console.log(num1 + num2);
    }

}

functionObject.fn2()


var frozenQuestions = [
    {
        question: "Who voices Anna?",
        answers: {
            a: "Julie Andrews",
            b: "Kristen Bell",
            c: "Julie Bell",
            d: "Kristen Andrews",
        },
        correctAnswer: 'b'
    },
    {
        question: "What is Anna and Elsa's favorite food?",
        answers: {
            a: "Chocolate",
            b: "Icecream",
            c: "Cake",
            d: "Pie",
        },
        correctAnswer: 'a'
    },
    {
        question: " What other Disney Princess is in Frozen?",
        answers: {
            a: "Jasmine",
            b: "Ariel",
            c: "Rapunzel",
            d: "Belle",
        },
        correctAnswer: 'c'
    },
    {
        question: "What is the name of the heroic snowman?",
        answers: {
            a: "Olaf",
            b: "Sebastian",
            c: "Snowball",
            d: "Frosty",
        },
        correctAnswer: 'a'
    },
]

var results = {};
var count = 30;
var correct = 0;
var incorrect = 0;
var counter;
 $("#start_button").click(function(){
    $(this).hide();
    counter = setInterval(timer, 1000);
    displayTrivia();
 });


 function displayTrivia(){
     for( var i = 0; i < frozenQuestions.length; i++){
        $('#quiz').append(`<div> ${frozenQuestions[i].question} </div>`);
        $('#quiz').append(`<div data-number=${i} data-option="a" class="option"> ${frozenQuestions[i].answers.a}</div>`);
        $('#quiz').append(`<div data-number=${i} data-option="b" class="option"> ${frozenQuestions[i].answers.b}</div>`);
        $('#quiz').append(`<div data-number=${i} data-option="c" class="option"> ${frozenQuestions[i].answers.c}</div>`);
        $('#quiz').append(`<div data-number=${i} data-option="d" class="option"> ${frozenQuestions[i].answers.d}</div>`);
     }
     
     $('.option').on('click', function(){
       var option = $(this).attr('data-option');
       var questionNumber = $(this).attr('data-number');
       results[questionNumber] = option;
       console.log(results);
    })
    $('#quiz').append('<button id="submit">Submit</button>')
    $('#submit').on('click', function(){
        for(var i = 0; i < frozenQuestions.length; i ++) {
            if( results[i] == frozenQuestions[i].correctAnswer){
                correct++
            }else {
                incorrect--
            }
        }
        $('#quiz').html(`<div>You had ${correct} correct answers.</div>`)
    });
 }



 function timer (){
     count--; 
     if (count <= 0){
         clearInterval(counter)
         return;
     }
     $("#timer").html("Time remaining: " + "00:" + count + "seconds");
 }



// document.onclick = function(){
//     showResults(questions, quizContainer, quizResults);
// 


//First make the question appear on the screen 
//hard code if you want/ or populate them on js 
//create a function called renderHtml .. 