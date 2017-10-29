import { Student } from "./../core/Student";

class StudentView {
    root: HTMLElement

    student: Student
    student_html: HTMLElement

    constructor(student: Student) {
        this.student = student
    }

    

}