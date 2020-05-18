function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question(" Which player has made highest numbers of runs in IPL history?", ["Virat", "raina","rohit", "gayle"], "Virat"),
    new Question("Which team has won highest numbers of IPL so far?", ["RCB", "CSK","MI", "KKR"], "MI"),
    new Question("Which player has taken highest numbers of Wickets in IPL history?", ["Malinga", "bumrah","bravo", "kumble"], "Malinga"),
    new Question("Who is the first Indian batsman to hit a century in the IPL?", ["Manish pandey", "MSD","virat", "Rohit"], "Manish pandey"),
    new Question("Who is the first RCB bowler to take the hattrick?", ["Praveen Kumar", "Samuel Badree" ,"starc", "dale steyn"], "Praveen Kumar"),
    new Question("Which foreign player has made highest numbers of runs in IPL history?", ["ABD", "gayle", "david warner", "watson"], "david warner"),
    new Question("which indian bowler has the best bowling figure?", ["bumrah","Kumble", "shami", "kuldeep"], "Kumble"),
    new Question(" Who has taken most catches in the IPL history so far?", ["virat", "Raina","Rohit", "ABD"], "Raina"),
    new Question("which indian player has scored the fastest hundred in ipl?", ["yusuf pathan", "virat", "raina", "Rishab pant"], "yusuf pathan"),
    new Question("which player has bowled most number of maiden overs in ipl?", ["praveen kumar", "bumrah", "kumble", "harbhajan singh"], "praveen kumar"),
    

    
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();