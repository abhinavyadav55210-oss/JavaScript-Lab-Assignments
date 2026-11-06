// Name: Abhinav Yadav
// Roll Number: 2510303021
// Assignment: 6 - Task 3

let jsonText = '{name: Rohan}';

try {
    let student = JSON.parse(jsonText);
    console.log(student);
} catch (error) {
    console.log("Invalid JSON");
}