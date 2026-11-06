// Name: Abhinav Yadav
// Roll Number: 2510303021
// Assignment: 13 - Task 2

let marks = [72, 85, 30, 90];

let anyBelow40 = marks.some((mark) => {
    return mark < 40;
});

let allAbove35 = marks.every((mark) => {
    return mark >= 35;
});

console.log(anyBelow40);
console.log(allAbove35);