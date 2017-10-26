import { Course } from '../core/Course';
import { CourseView } from './CourseView'

export class MainView {
    root: HTMLElement

    courseOptions: CourseView[]
    courseOptions_html: HTMLElement

    constructor(root?: HTMLElement) {
        this.root = root ? root : document.body
        this.courseOptions = []
        this.courseOptions_html = document.createElement('select')
    }

    add(cView: CourseView) {
        this.courseOptions.push(cView)
    }

    show() {
        this.courseOptions.forEach(v => {
            let option = document.createElement('option')
            option.textContent = v.course.name
            
            this.courseOptions_html.appendChild(option)
            this.root.appendChild(this.courseOptions_html)
        })
    }
}