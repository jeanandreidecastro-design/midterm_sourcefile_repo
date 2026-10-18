const studentNames = [
  'Ana',
  'Ben',
  'Carla',
  'Daniel',
  'Ella'
];

const studentScores = [85, 72, 91, 64, 78];

//part A
console.log('\nPART A: DISPLAY THE ORIGINAL RECORDS');
const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];
for (let i = 0; i < studentNames.length; i++) {
    console.log(i + ' - ' + studentNames[i] + ': ' + studentScores[i]);
}

//part B
console.log('\nPART B: ADD NEW STUDENTS');
studentNames.push('Faith');
studentScores.push(88);
studentNames.unshift('Aaron');
studentScores.unshift(76);
console.log('Updated Names:', studentNames);
console.log('Updated Scores:', studentScores);
console.log('Number of Students:', studentNames.length);

//part C
console.log('\nPART C: REMOVE AND REPLACE RECORDS');
studentNames.shift();
studentScores.shift();
studentNames.pop();
studentScores.pop();

let danielIndex = studentNames.indexOf('Daniel');

studentNames.splice(danielIndex, 1);
studentScores.splice(danielIndex, 1);
studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);
console.log('Names:', studentNames);
console.log('Scores:', studentScores);

//part D
console.log('\nPART D: CLASS STATISTICS');

let total = 0;
for (let i = 0; i < studentScores.length; i++) {
    total += studentScores[i];
}

let average = total / studentScores.length;

let highest = studentScores[0];
let lowest = studentScores[0];

for (let i = 1; i < studentScores.length; i++) {
    if (studentScores[i] > highest) {
        highest = studentScores[i];
    }
    if (studentScores[i] < lowest) {
        lowest = studentScores[i];
    }
}
console.log('Total Score:', total);
console.log('Average Score:', average.toFixed(2));
console.log('Highest Score:', highest);
console.log('Lowest Score:', lowest);

//part E
console.log('\nPART E: PASSING-SCORE ANALYSIS');

const passingScore = 75;

const passingScores = studentScores.filter(score => score >= passingScore);

const statuses = studentScores.map(score => {
    if (score >= passingScore) {
        return 'Passed';
    } else {
        return 'Failed';
    }
});

const atLeastOneFailed = studentScores.some(score => score < passingScore);

const allStudentsPassed = studentScores.every(score => score >= passingScore);

console.log('Passing Scores:', passingScores);
console.log('Statuses:', statuses);
console.log('At Least One Failed:', atLeastOneFailed);
console.log('All Students Passed:', allStudentsPassed);

//part F
console.log('\nPART F: SORT AND SEARCH');

const sortedScores = Array.from(studentScores);

sortedScores.sort((a, b) => b - a);

const contains91 = studentScores.includes(91);
const indexOf91 = studentScores.indexOf(91);

console.log('Scores from Highest to Lowest:', sortedScores);
console.log('Contains 91:', contains91);
console.log('Index of 91:', indexOf91);

//part G
console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

const originalNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];

const activityAverages = [];

for (let i = 0; i < activityScores.length; i++) {
    let total = 0;

    for (let j = 0; j < activityScores[i].length; j++) {
        console.log(
            originalNames[i] + ' Activity ' + (j + 1) + ': ' + activityScores[i][j]
        );
        total += activityScores[i][j];
    }

    let average = total / activityScores[i].length;

    activityAverages.push(average);

    console.log(
        originalNames[i] + "'s activity average: " + average.toFixed(2)
    );
}

console.log('Activity Averages:', activityAverages);

//part H
console.log('\nPART H: TEXT SUMMARY');

console.log('Students:', studentNames.join(' | '));