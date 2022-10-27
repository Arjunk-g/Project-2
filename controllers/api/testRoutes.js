const Kwiz = require('kwiz');
 
const quizDefinition = {
  questions: [
    { message: 'Hey' },
    { message: 'What is your name?', answer: {type: 'string', hint: 'Really?', id: 'name'} },
    { message: 'Buy {{answers.name}}' }
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

  quiz.addHandler('speed', function (question, answer) {
    var matches = /(\d+) +mph/i.exec(answer)
    return matches 
      ? Promise.resolve(parseInt(matches[1], 10)) 
      : Promise.reject(question.hint || 'Wrong speed value')
  })