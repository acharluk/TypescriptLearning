// Web interface
import { Student } from './Student'

let students: Student[] = []

let addStudent_input = document.createElement('input')
let addStudent_button = document.createElement('button')

let addStudent = () => {
    let newStudent = new Student(addStudent_input.value)
    students.push(newStudent)
}


addStudent_button.click = addStudent
addStudent_button.textContent = "Add Student"


document.body.appendChild(addStudent_input)
document.body.appendChild(addStudent_button)