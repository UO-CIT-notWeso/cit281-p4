// Project 4 -- CIT 281
//Wes O'Brien

const fastify = require("fastify")();
const {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
} = require("./p4-module.js");

//Route /cit/question
fastify.get("/cit/question", (request, reply) => {
      reply
  .code(200)
  .header("Content-Type", "text/json; charset=utf-8")
  .send({error: "", statusCode: 200, questions: getQuestions()});
  }); 

  fastify.get("/cit/question/:number", (request, reply) => {
    let {number = ""} = request.params;
    const response = {
        error: "",
        statusCode: 200,
        question: "Q1",
        number: "1",
    };

    if (number === "") {
        response.error = " A number route parameter is required. ";
        response.statusCode = 404;
    }
    else {
        number = parseInt(number);

    const questionInfo = getQuestion(number);

    if (questionInfo.error.length > 0) {
        response.error = questionInfo.error;
        response.statusCode = 404;
    }
    else {
        response.question = questionInfo.question;
        response.number = number;
    }
}

reply 
.code(response.statusCode)
.header("Content-Type", "text/json; charset=utf-8")
.send(response);
});

//Route /cit/answer
fastify.get("/cit/answer", (request, reply) => {
    reply
    .code(200)
    .header("Content-Type", "text/json; charset=utf-8")
    .send({error: "", statusCode: 200, answers: getAnswers()});
});

fastify.get("/cit/answer/:number", (request, reply) => {
    let {number = ""} = request.params;
    const response = {
        error: "",
        statusCode: 200,
        answer: "A2",
        number: "2",
};

if (number === "") {
    response.error = " A number route parameter is required. ";
    response.statusCode = 404;
}
else {
    number = parseInt(number);

    const answerInfo = getAnswer(number);

    if (answerInfo.error.length > 0) {
        response.error = answerInfo.error;
        response.statusCode = 404;
    }
    else {
        response.answer = answerInfo.answer;
        response.number = number;
    }
    }
    reply
    .code(response.statusCode)
    .header("Content-Type", "text/json; charset=utf-8")
    .send(response);
});

//Route /cit/questionanswer
fastify.get("/cit/questionanswer", (request, reply) => {
    reply
    .code(200)
    .header("Content-Type", "text/json; charset=utf-8")
    .send({error: "", statusCode: 200, question_Answers: getQuestionsAnswers()});
});

fastify.get("/cit/questionanswer/:number", (request, reply) => {
    let {number = ""} = request.params;
    const response = {
        error: "",
        statusCode: 200,
        question: "Q3",
        answer: "A3",
        number: "3",
};

if (number === "") {
    response.error = " A number route parameter is required. ";
    response.statusCode = 404;
}
else {
    number = parseInt(number);

    const answerInfo = getQuestionAnswer(number);

    if (answerInfo.error.length > 0) {
        response.error = answerInfo.error;
        response.statusCode = 404;
    }
    else {
        response.answer = answerInfo.answer;
        response.number = number;
    }
    }
    reply
    .code(response.statusCode)
    .header("Content-Type", "text/json; charset=utf-8")
    .send(response);
});

//Route * for unmatched route handler
fastify.get("*", (request, reply) => {
    reply
    .code(404)
    .header("Content-Type", "text/json; charset=utf-8")
    .send({error: "Route not found", statusCode: 404});
});


// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8082;
fastify.listen(listenPort, listenIP, (err, address) => {
if (err) {
console.log(err);
process.exit(1);
}
console.log(`Server listening on ${address}`);
});

