
// this here is the object of questions created for the user to answer
const Kwiz = require('kwiz');

Kwiz.start;

const quizDefinition = {
    questions: [
      { message: 'What is your name?', answer: {type: 'string', hint: 'Not a number!', id: 'name'} }, 
      { message: 'What is your name?', answer: {type: 'string', hint: 'Not a number!', id: 'name'} },
    ]
  }
   
  
  const quiz = new Kwiz(quizDefinition)
    quiz.start()
    .then((reply) => {
      return quiz.processMessage('John')
    })
    .then((reply) => {
      return quiz.processMessage()
    })
    .then((reply) => {
      console.log(quiz.getState())
    })
  
  
  // this function here is a if else statment that checks our answers for the question whether it is right or wrong
  
    quiz.addHandler('speed', function (question, answer) {
      var matches = /(\d+) +mph/i.exec(answer)
      return matches 
        ? Promise.resolve(parseInt(matches[1], 10)) 
        : Promise.reject(question.hint || 'Wrong speed value')
    })

