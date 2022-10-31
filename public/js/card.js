const flashcard = document.getElementByClassName ('card')[0];
const questions = document.getElementByID('question')[0];
const answers = document.getElementByID('answer');

Let storage = localStorage.getItem('items')
JSON.parse(localStorage.getItem('items')) : []



function flashcard(){
    var = card_data
    'card_question' : question.value,
   'card_answer' : answer.value,
}


function delCard(){
    localStorage.clear();
    card.innerHTNL = '';
    storage = [];
}

function addCard(){
    createbox.style.display = 'block';
}

function 