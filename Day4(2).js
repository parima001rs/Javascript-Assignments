const student = { 
            name: "Helsinki",
            age: 24,
            project: {
                diceGame: "Two player dice game using JavaScript",
            },
        }
const {name,age,project:{diceGame}} = student;
console.log(name, age, project);

