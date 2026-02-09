let midterm =Number(prompt("Midterm Score (30%): "));
let quiz = Number(prompt("Quiz Score(30%):"));
let final = Number(prompt("Final Score(40%):"));

let midtermScore= midterm*0.3;
let quizScore = quiz*0.3;
let finalScore = final*0.4;

let average = midtermScore + quizScore + finalScore;

if(average>50){
    alert("Success.This is average"+ average);
}else{
    alert("Failed. This is average " + average);
}