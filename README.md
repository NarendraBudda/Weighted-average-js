The placement team of an engineering college needs to select eligible candidates for campus placement. To do so, they require individual weighted average scores of the students.​

​Write a program to calculate the weighted average for individual students. ​

### Task -1
- The percentage value assigned for each of the different types of assessments conducted is listed below. 

Serial No|Assessment Type|Percentage
|-|-|-|
1|Assignments|10
2|Projects|35
3|Quiz|10
4|Mid-Term-Evaluation|15
5|Final Exams|30

- Write a program that calculates the weighted average score and displays the weighted average score of the student.

### Task - 2
- Create the method `calculateWeightedAverage()`. Initialize the variables from the below table and pass these variables as parameters to the method and write the logic inside the function body to calculate the Weighted Average.
- Call the above method globally
- Below is the list of weightages

Variable|Values
|-|-|
assignmentWeight|10
projectWeight|35
quizWeight|10
midTermWight|15
finalExamWeight|30

- Below are the scores of the students secured for the maximum score of 100

Variable|Values
|-|-|
assignmentScore|97
projectScore|82
quizScore|60
midTernScore|60
midTermScore|75
finalExamScore|80

### Task - 3

Calculate the individual weights of all the scores and store it in variables. For example, calculate the weighted score for assignments using the given formula.​

​`assignmentPercentSCore = (assignmentWeight/100) * assignmentScore`

Similarly calculate the weighted score for all the weights.

### Task - 4

- Calculate the overall weighted percentage and store it in a variable as shown below.​

`overallPercentage = assignmentPercentageSCore + projectPercentageSCore + quizPercentageSCore + midTerPercentageScore + finalExamPercentageScore`
- Display all the details in the below format
```
Weights      % Value of SCore
Assignments  9.7
Projects     28.699999
Quizzes      6.0
Mid Term     11.25
Final Exam   24.0

The weighted average score is 79.649994%

```

- The solution for this exercise should be provided in `p4-submission.js` file.
- The file is located inside the folder `p4-weighted-average`.
