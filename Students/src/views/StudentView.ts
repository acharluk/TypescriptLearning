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
        while (this.student_html.lastChild)
            this.student_html.removeChild(this.student_html.lastChild)
        while (this.root.lastChild)
            this.root.removeChild(this.root.lastChild)

        // let s = ""
        // let mark_html = document.createElement('p')
        // this.student.marks.forEach(v => {
        //     s += v.toString() + " "
        // })
        // mark_html.textContent = s
        
        let table = document.createElement('ol')
        table.setAttribute('type','a')
        
        this.student.marks.forEach(v => {
            let m = document.createElement('li')
            m.textContent = v.toString()
            table.appendChild(m)
            
        })
        this.student_html.appendChild(table)


        this.root.appendChild(this.student_html)
    }

}