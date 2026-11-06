// Name: Abhinav Yadav
// Roll Number: 2510303021
// Assignment: 9 - Task 2

function validateForm(name) {
    let errors = [];

    if (name === "") {
        errors.push("Name is required");
    }

    return errors;
}

console.log(validateForm("Asha"));
console.log(validateForm(""));