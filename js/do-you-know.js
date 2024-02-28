const questions = [...document.querySelectorAll('.question-header-card')]

/* Funcionalidade de visualisar as respostas para cada pergunta*/

function questionAnimationAnswer(){
    questions.forEach(element => {
        element.addEventListener('click', ()=> {
          element.classList.toggle('view-answer')
        })
    });
}

export default questionAnimationAnswer;