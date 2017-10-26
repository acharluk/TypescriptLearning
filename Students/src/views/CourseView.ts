import { Course } from './../core/Course'

export class CourseView {
    root: HTMLElement

    course: Course

    constructor(course: Course, root ?: HTMLElement) {
        this.course = course
        this.root = root ? root : document.body
    }

    show() {
        let name = document.createElement('h1')
        name.textContent = this.course.name

        this.root.appendChild(name)
        this.course.students.forEach(v => {
            let elem = document.createElement('p')
            elem.textContent = v.name
            this.root.appendChild(elem)
        });
    }
}