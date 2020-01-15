

function submitTest(){
    var questionOne = document.markQuiz.questionOne.value;
var questionTwo = document.markQuiz.questionTwo.value;
var questionThree = document.markQuiz.questionThree.value;
var itemsCorrect =0;

    if (questionOne === ".css") {
        itemsCorrect++;
    }
    if (questionTwo === "onHover") {
        itemsCorrect++;
    }
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
    console.log(itemsCorrect);
    console.log(answersCorrect);
    console.log(results);
}

