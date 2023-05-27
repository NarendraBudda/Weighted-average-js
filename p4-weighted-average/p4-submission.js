let assignmentWeight=10;
let projectWeight=35;
let quizWeight=10;
let midTermWeight=15;
let finalExamWeight=30;
let assignmentScore=97;
let projectScore=82;
let quizScore=60;
let midTermScore=75;
let finalExamScore=80;

function percentageScore(weight,score) {
    return (weight/100)*score;
}
function calculateWeightedAverage(assignmentScore,projectScore,quizScore,midTermScore,finalExamScore) {
    let totalScore=assignmentScore+projectScore+quizScore+midTermScore+finalExamScore;
    return totalScore/5;
    
}

let assignmentPercentageScore=percentageScore(assignmentWeight,assignmentScore);
let projectPercentageScore=percentageScore(projectWeight,projectScore);
let quizPercentageScore=percentageScore(quizWeight,quizScore);
let midTermPercentageScore=percentageScore(midTermWeight,midTermScore);
let finalExamPercentageScore=percentageScore(finalExamWeight,finalExamScore);

let overAllPercentage=assignmentPercentageScore+projectPercentageScore+quizPercentageScore+midTermPercentageScore+finalExamPercentageScore;

function dispaly(assignmentPercentageScore,projectPercentageScore,quizPercentageScore,midTermPercentageScore,finalExamPercentageScore,overAllPercentage) {
    console.log(`weight         %value of score`);
    console.log(`Assigments= ${assignmentPercentageScore}`)
    console.log(`Projects=${projectPercentageScore}`);
    console.log(`Quizzes =${quizPercentageScore}`);
    console.log(`Mid term =${midTermPercentageScore}`);
    console.log(`Fianl Exam = ${finalExamPercentageScore}`);
    console.log(`The weighted average score is ${overAllPercentage}%`);
    
}
dispaly(assignmentPercentageScore,projectPercentageScore,quizPercentageScore,midTermPercentageScore,finalExamPercentageScore,overAllPercentage);



console.log(`The weighted average score is : ${calculateWeightedAverage(97, 82, 60, 75, 80)}`);