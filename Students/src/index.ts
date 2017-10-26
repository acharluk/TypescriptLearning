// Web interface
import { Student } from './Student'

let students: Student[] = []

let addStudent_input = document.createElement('input')
let addStudent_button = document.createElement('button')
let refreshStudents_button = document.createElement('button')

let addStudent = () => {
    let newStudent = new Student(addStudent_input.value)
    students.push(newStudent)
    console.log("Added new student: " + newStudent.name)
}

let refreshStudents = () => {
    console.log("Refreshing student list")
    students.forEach(v => {
        let s = document.createElement('p')
        s.textContent = v.name
        document.body.appendChild(s)
        console.log(v.name)
    })
}

addStudent_button.onclick = addStudent
addStudent_button.textContent = "Add Student"

refreshStudents_button.onclick = refreshStudents
refreshStudents_button.textContent = "Refresh student list"


document.body.appendChild(addStudent_input)
document.body.appendChild(addStudent_button)
document.body.appendChild(refreshStudents_button)