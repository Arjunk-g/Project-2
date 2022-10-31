const Kwiz = require('kwiz')


 
const quizDefinition = {
  questions: [
    { message: 'What is your name?', answer: {type: 'string', hint: 'Really?', id: 'name'} },
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