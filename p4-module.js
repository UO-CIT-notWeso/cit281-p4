// Project 4 -- CIT 281
//Wes O'Brien

//Export Functions
module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
};


const data = require("./p4-data.js");
function getQuestions() {
    return data.data.map(x => x.question);
}


function getAnswers() {
    return data.data.map(x => x.answer);
}


function getQuestionsAnswers() {
    return [...data.data];
}


function getQuestion(number = "") {
    number = Number.parseInt(number);


const question = data.data[number - 1]?.question || '';

const error = data.question === "";

return {
    error: error,
    question: question,
    number: number,
    
};
}

function getAnswer(number = "") {
    number = Number.parseInt(number);


const question = data.data[number - 1]?.question || '';

const error = data.question === "";

return {
    error: error,
    question: question,
    number: number,
    
};
}

function getQuestionAnswer(number = "") {
    number = Number.parseInt(number);


const question = data.data[number - 1]?.question || '';

const error = data.question === "";

return {
    error: error,
    question: question,
    number: number,
    
};
}

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }


  //Part 8 -- did not have enough time to complete
/*
  addQuestionAnswer(info = {})

// addQuestionAnswer()
if (testAdd) {
    testing(
      "addQuestionAnswer",
      { d: "()", f: addQuestionAnswer() },
      { d: "({})", f: addQuestionAnswer({}) },
      { d: '(question: "Q4")', f: addQuestionAnswer({ question: "Q4" }) },
      { d: '(answer: "A4")', f: addQuestionAnswer({ answer: "A4" }) },
      {
        d: '(question: "Q4", answer: "A4")',
        f: addQuestionAnswer({ question: "Q4", answer: "A4" }),
      }
    );
  }
  */