
// var questionOne = document.markQuizStart.questionOne.value;
// var questionTwo = document.markQuizNext.questionTwo.value;
// var questionThree = document.markQuizNext2.questionThree.value;
// var itemsCorrect =0;
var itemsCorrect =0;

var countDown = 20;

function startTimer(){
    var timerGo = setInterval(function() {
    var timeElement = document.querySelector(".time");    
        countDown--;
        timeElement.textContent = countDown + " time remaining for quiz";

        if(countDown === 0) {
            clearInterval(timerGo);
            
            document.getElementById("quizBody").style.visibility = "hidden";
            document.getElementById("markQuizNext2").style.visibility = "hidden";
        }
    }, 1000);
}

function nextTest() {
    var questionOne = document.markQuizStart.questionOne.value;
    if (questionOne === ".css") {
        itemsCorrect++;
    }
    document.getElementById("markQuizNext").style.visibility ="visible";
    document.getElementById("markQuizStart").style.visibility ="hidden";
}
    
  function nextTest2(){
    var questionTwo = document.markQuizNext.questionTwo.value;
    if (questionTwo === "onHover") {
        itemsCorrect++;
    }
    document.getElementById("markQuizNext2").style.visibility = "visible";
    document.getElementById("markQuizNext").style.visibility ="hidden";
  }  

function submitTest(){
    var questionThree = document.markQuizNext2.questionThree.value;

    // if (questionOne === ".css") {
    //     itemsCorrect++;
    // }
    // if (questionTwo === "onHover") {
    //     itemsCorrect++;
    // }
    if (questionThree === "script"){
        itemsCorrect++;
    }
   
var results = ["Nice Work, you got all correct!", "I know you can do better!"];


var yourResults;

    if (itemsCorrect === 3 ) {
        yourResults = 0;
    }
    else {
            yourResults =1;
        }
    

    document.getElementById("results").innerHTML = results[yourResults];
    document.getElementById("submitResponse").style.visibility = "visible";
    
    document.getElementById("answersCorrect").innerHTML = "You have answered " + itemsCorrect + " correctly!";
    // console.log(itemsCorrect);
    // console.log(answersCorrect);
    // console.log(results);
}

// startTimer();