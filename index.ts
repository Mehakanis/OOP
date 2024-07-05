#! /usr/bin/env node

import inquirer from "inquirer";

class Student {
    name: string
    constructor(n:string){
        this.name = n
    }
}

class Person {
    students: Student [] = []
    addstudents(obj:Student){
        this.students.push(obj)
    }
}

const persons = new Person()
const programStart = async(persons:Person)=> {
    do{
    console.log("Welcome!");
    const ans = await inquirer.prompt({
        name: "select",
        type: "list",
        message: "Whom would you like to interact with?",
        choices: ["Staff","Student","Exit"]
    })
    if(ans.select === "Staff"){
        console.log("You approch the staff rooom. Please feel free to ask any question.")
    }else if (ans.select === "Student" ){
        const ans = await inquirer.prompt({
            name: "student",
            type: "input",
            message: "Enter Student Name, whom you wish to engage with."
        })
        const student = persons.students.find(val => val.name == ans.student) // input mai jo name ayega , wo ham find ker rahe ke array mai name hai ya nhi.
        
        if (!student){
            const name = new Student (ans.student) //ager nhi hai to usko new student bana do
            persons.addstudents(name) // array mai add kr do
            console.log(`Hello, I am ${name.name}. Nice to meet you!`);
            console.log("New student added");
            console.log("Current student list:");
            console.log(persons.students);
        } else {
            console.log(`Hello, I am ${student.name}. `)
            console.log("Existing student list:");
            console.log(persons.students)

        }
        
    } else if (ans.select === "Exit"){
        console.log("Exiting the program....")
        process.exit()
    }

    }while (true)
}
programStart(persons)

