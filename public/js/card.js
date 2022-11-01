
const flashcard = document.getElementByClassName ('card')[0];
const questions = document.getElementByID('question')[0];
const answers = document.getElementByID('answer');

Let storage = localStorage.getItem('items')
JSON.parse(localStorage.getItem('items')) : []

storage.forEach(name);
function name(text){
 var div = document.createElement('div');
 var question = document.createElement('h3');
 var answer = document.createElement('h3');

 div.classname = "card";

 question.setAttribute('style',"border-top:1px solid red; margin-top 30px")

 question.innerHTNL = text.card_question

answer.innerHTML = text.card_answer;

div.appendChild('question');
div.appendChild('answer');

addEventListener("click", function(){
    if(answer.style.display == "none")
    answer.style.display = "block";
    else 
    answer.style.display = "none";
});
    card.appendChild(div);
}

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

// const flashcard = document.getElementByClassName ('card')[0];
// const questions = document.getElementByID('question')[0];
// const answers = document.getElementByID('answer');

// // let storage = localStorage.getItem('items')
// // JSON.parse(localStorage.getItem('items')) : []



// function flashcard(){
//     var = card_data
//     'card_question' : question.value,
//    'card_answer' : answer.value,
// }


// function delCard(){
//     localStorage.clear();
//     card.innerHTNL = '';
//     storage = [];
// }

// function addCard(){
//     createbox.style.display = 'block';
// }

// function 

const newCardHandler = async function(event) {
    event.preventDefault();
     const question = document.getElementById('question').value.trim();
     const answer = document.getElementById('answer').value.trim();

     if(question && answer) {
        const response = await fetch('/api/cards/create', {
            method: 'POST',
            body: JSON.stringify({ question, answer }),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Could not create question!');
        }
     }
}

document.getElementById('save').addEventListener('click', newCardHandler);

