

function submitTest(){
    var questionOne = document.markQuiz.questionOne.value;
var questionTwo = document.markQuiz.questionTwo.value;
var questionThree = document.markQuiz.questionThree.value;
var itemsCorrect =0;

    if (questionOne === "css") {
        itemsCorrect++;
    }
    if (questionTwo === "onHover") {
        itemsCorrect++;
    }
    if (questionThree === "answer3"){
        itemsCorrect++;
    }
    document.getElementById("submitResponse").style.visibility = "visible";
    document.getElementById("answersCorrect").innerHTML = "You have answered " + itemsCorrect + " correctly!";
    console.log(itemsCorrect);
    console.log(answersCorrect);
}