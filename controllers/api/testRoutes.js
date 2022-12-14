const Kwiz = require('kwiz');

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