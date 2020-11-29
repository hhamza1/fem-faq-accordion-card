var questions = document.querySelectorAll('.faq-questions');
var answers = document.querySelectorAll('.faq-answers');



questions.forEach((question, index) => {
    question.addEventListener('click', function(){
        question.classList.toggle('display-answer');
        answers.item(index).classList.toggle('opacity-change');
    })
});
