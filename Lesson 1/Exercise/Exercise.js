const scores = [95, 87, 76, 68, 92, 73, 85, 79];

console.log("=== STUDENT SCORE ANALYZER ===");
console.log("\nStudent Scores:");

scores.forEach((score, index) => {
    let remark;

    if (score >= 90 && score <= 100) {
        remark = "Excellent";
    } else if (score >= 80) {
        remark = "Very Good";
    } else if (score >= 75) {
        remark = "Good";
    } else {
        remark = "Failed";
    }

    let status = score >= 75 ? "Passed" : "Failed";

    console.log(`Student ${index + 1}: ${score} - ${remark} - ${status}`);
});

const total = scores.reduce((sum, score) => sum + score, 0);

const average = total / scores.length;

const highest = Math.max(...scores);
const lowest = Math.min(...scores);

const passed = scores.filter(score => score >= 75).length;
const failed = scores.filter(score => score < 75).length;

console.log("\n=== RESULTS ===");
console.log(`Total Score: ${total}`);
console.log(`Average Score: ${average.toFixed(2)}`);
console.log(`Highest Score: ${highest}`);
console.log(`Lowest Score: ${lowest}`);
console.log(`Number of Students Passed: ${passed}`);
console.log(`Number of Students Failed: ${failed}`);