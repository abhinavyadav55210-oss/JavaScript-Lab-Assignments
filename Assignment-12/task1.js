// Name: Abhinav Yadav
// Roll Number: 2510303021
// Assignment: 12 - Task 1

function applyTwice(func, value) {
    let result = func(value);
    result = func(result);
    return result;
}

function addTen(number) {
    return number + 10;
}

console.log(applyTwice(addTen, 5));