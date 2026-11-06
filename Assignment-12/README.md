# Assignment 12: Callbacks and Higher-Order Functions

**University:** Invertis University, Bareilly  
**Course:** B.Tech CSE - Second Year  
**Lab:** JavaScript Programming Lab (BCS354)  
**Student Name:** Abhinav yadav
**Roll Number:**2510303021

## Aim
Pass a function as an argument to another function and call it.

## Questions / Tasks
1. Create applyTwice, which takes a function and a value, calls the function on the value and then on the result, and returns it. Add addTen, which adds 10 to a number, and print applyTwice(addTen, 5).
2. Create formatMarks(marks, callback) that returns callback(marks). Print it with marks 76 and an arrow function that returns Marks: followed by marks, then /100.
3. Create repeatAction(times, action) that calls action once for each round from 1 to times, passing the round number. Call it with 3 and an arrow function that prints Round followed by the round number.

## Files
- `index.html` - HTML page for running the assignment in a browser.
- `script.js` - JavaScript solution for the tasks.
- `README.md` - Aim, task questions, input and expected output.
- `screenshot.png` - Screenshot-style preview of the expected output.

## Input
The values and sample data are provided in the JavaScript program as specified in each task. For interactive controls in Assignment 9, enter a note, click Save, and select an answer in the quiz.

## How to Run
1. Open `index.html` in a web browser.
2. For console output, press F12 and open the Console tab.
3. You can also run `node script.js` in the assignment folder for Node-compatible tasks. Assignment 9 requires a browser because it uses the DOM and localStorage.

## Expected Output
The `screenshot.png` file shows a representative output preview. Timer and Promise output order may vary slightly depending on execution timing.