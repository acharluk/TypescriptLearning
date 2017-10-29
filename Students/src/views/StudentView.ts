import { Student } from "./../core/Student";

export class StudentView {
    root: HTMLElement

    student: Student
    student_html: HTMLElement

    constructor(student: Student, root ?: HTMLElement) {
        this.student = student
        this.root = root ? root : document.body
        this.student_html = document.createElement('div')
    }

    show() {
        while (this.root.lastChild)
            this.root.removeChild(this.root.lastChild)

        this.student.marks.forEach(v => {
            let mark_html = document.createElement('p')
            mark_html.textContent = v.toString()
            this.student_html.appendChild(mark_html)
        })

        this.root.appendChild(this.student_html)
    }

}