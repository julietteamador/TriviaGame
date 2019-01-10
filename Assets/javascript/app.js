var disneyQuestions = [
    {
        question: "In Aladdin, what is the name of Jasmine's pet tiger?"
        answers: {
            a: "Donald",
            b: "Rajah",
            c: "Jafar",
            d: "Abu",
        },
        correctAnswer: 'b'
    },
    {
        question: "In Peter Pan, Captain Hook had a hook on which hand?"
        answers: {
            a: "left",
            b: "right",
            c: "both",
            d: "he had no hook",
        },
        correctAnswer: 'a'
    },
    {
        question: " In Beauty & the Beast, what color is Belle's ball gown?"
        answers: {
            a: "Purple",
            b: "Silver",
            c: "Gold",
            d: "Pink",
        },
        correctAnswer: 'c'
    },
    {
        question: "Who does the little Mermaid marry?"
        answers: {
            a: "Eric",
            b: "Sebastian",
            c: "Steve",
            d: "Noone",
        },
        correctAnswer: 'a'
    },
]



function makingQuiz(questions, quizContainer, quizResults, submit)

    function showQuestions(questions, quizContainer){

    }


function showResults(questions, quizContainer, quizResults){

}

showQuestions(questions, quizContainer);

submit.onclick = function(){
    showResults(questions, quizContainer, quizResults);
}