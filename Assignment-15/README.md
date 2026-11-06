# Assignment 15: Promises and async/await with Local Data

**University:** Invertis University, Bareilly  
**Course:** B.Tech CSE - Second Year  
**Lab:** JavaScript Programming Lab (BCS354)  
**Student Name:** Abhinav yadav
**Roll Number:** 2510303021

## Aim
Create a Promise that resolves or rejects, use async/await with try and catch, and load local data as a Promise.

## Questions / Tasks
1. Create checkMarks that returns a Promise: it resolves with marks for 0 to 100, otherwise rejects with Error saying Marks out of range. Call checkMarks with 80 and print the value.
2. Create checkMarks(marks) that returns a Promise: it resolves with marks for 0 to 100, otherwise rejects with Error saying Marks out of range. Call it with 120 and print the error message when rejected.
3. Create checkMarks(marks), a Promise that resolves with marks 0 to 100 or rejects with Error Marks out of range. Create async run() with try printing await checkMarks(65), then await checkMarks(-5) and catch printing Caught: and its message; then call run.
4. Create getUsers, which returns a Promise that resolves after 100 milliseconds with three local users (id and name: Asha, Rohan, Meera). Write an async function that awaits getUsers and prints each name, then call it.

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