// Name: Abhinav Yadav
// Roll Number: 2510303021
// Assignment: 8 - Task 1

class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        return "Hi, I am " + this.name;
    }
}

class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
}

let teacher1 = new Teacher("Anita", "Maths");

console.log(teacher1.greet());