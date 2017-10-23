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

    addStudent(student: Student) {
        this.students.push(student)
    }

}