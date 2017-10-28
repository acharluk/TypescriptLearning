import { Course } from './../core/Course'

export class CourseView {
    root: HTMLElement

    course: Course
    students_html: HTMLElement

    constructor(course: Course, root ?: HTMLElement) {
        this.course = course
        this.root = root ? root : document.body
        this.students_html = document.createElement('select')
    }

    show() {
        while(this.students_html.lastChild)
            this.students_html.removeChild(this.students_html.lastChild)
        while(this.root.lastChild)
            this.root.removeChild(this.root.lastChild)

        this.course.students.forEach(v => {
            let option = document.createElement('option')
            option.textContent = v.name
            
            this.students_html.appendChild(option)
        })
        this.root.appendChild(this.students_html)
    }
}