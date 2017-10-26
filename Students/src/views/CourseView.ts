import { Course } from './../core/Course'

export class CourseView {
    root: HTMLElement

    constructor(root ?: HTMLElement) {
        this.root = root ? root : document.body
    }

    show(course: Course) {
        let name = document.createElement('h1')
        name.textContent = course.name

        this.root.appendChild(name)
        course.students.forEach(v => {
            let elem = document.createElement('p')
            elem.textContent = v.name
            this.root.appendChild(elem)
        });
    }
}