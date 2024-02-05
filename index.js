function runQuiz () {
    var numOfAgrees=0
    var currentQuestion = 0
    var totalQuestions = questionsArr.length;

    for (var i = 0; i< questionsArr.length; i++) {
        var question = confirm(questionsArr[i].question)
        var correctAnswer= questionsArr.map(a => a.answer);
        if (correctAnswer) {
            numOfAgrees++
            currentQuestion++
        } else {
          currentQuestion++
        }

    var questionLeft = totalQuestions-currentQuestion;
    if(questionLeft === 0){
    var completeQuiz = 0;
    }
    }

        if (completeQuiz===0) {
        return alert (Math.round(numOfAgrees/totalQuestions) * 100 + '%')
 }
}


var questionsArr= [
    {question: 'Pepperoni is the most popular topping in the US',
    answer: true},
    {question: 'Cheesecake comes from Italy',
    answer: false},
    {question: 'Pineapples grow on trees',
    answer: false},
   {question: 'Vanilla is the most expensive spice in the world',
    answer: false},
   {question: 'Subway has the most restaurants by location in the US',
    answer: true},
]








