// Web interface
import { Student } from './Student'

let students: Student[] = []

let addStudent_input = document.createElement('input')
let addStudent_button = document.createElement('button')

let studentList = document.createElement('div')
let refreshStudents_button = document.createElement('button')

let addStudent = () => {
    let newStudent = new Student(addStudent_input.value)
    students.push(newStudent)
    console.log("Added new student: " + newStudent.name)
}

let refreshStudents = () => {
    console.log("Refreshing student list")
    while (studentList.lastChild) {
        studentList.removeChild(studentList.lastChild)
    }

    students.forEach(v => {
        let s = document.createElement('p')
        s.textContent = v.name
        studentList.appendChild(s)
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
document.body.appendChild(studentList)