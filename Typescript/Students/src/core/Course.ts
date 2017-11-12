import { Teacher } from './Teacher'
import { Student } from './Student'

export class Course {
    name: string
    description: string

    teacher: Teacher
    students: Student[]

    constructor(name: string, description?: string) {
        this.name = name
        this.description = description ? description : "No description provided"
        this.students = []        
    }

    setTeacher(teacher: Teacher) {
        this.teacher = teacher
    }

    addStudent(student: Student | Student[]) {
        if (student instanceof Student) {
            this.students.push(student)
        } else {
            student.forEach(v => this.students.push(v))
        }
    }


    printInfo() {
        console.log("Course name: " + this.name)
        console.log("Description: " + this.description)
        console.log("Teacher: " + this.teacher.name)
        
        console.log("Students: ")
        this.students.forEach((v, i) => {
            console.log(i + ": " + v.name)
        })
    }
}