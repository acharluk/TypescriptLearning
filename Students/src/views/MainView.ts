import { Course } from '../core/Course';
import { CourseView } from './CourseView'

export class MainView {
    root: HTMLElement

    courseOptions: CourseView[]
    courseOptions_html: HTMLSelectElement
    courseViews_html: HTMLElement

    constructor(root?: HTMLElement) {
        this.root = root ? root : document.body
        this.courseOptions = []
        this.courseOptions_html = document.createElement('select')
        this.courseViews_html = document.createElement('div')
    }

    add(cView: CourseView) {
        cView.root = this.courseViews_html
        this.courseOptions.push(cView)
    }

    show() {
        while(this.courseOptions_html.lastChild)
            this.courseOptions_html.removeChild(this.courseOptions_html.lastChild)

        this.courseOptions.forEach(v => {
            let option = document.createElement('option')
            option.textContent = v.course.name
            this.courseOptions_html.onchange = () => {
                let index = this.courseOptions_html.selectedIndex
                this.courseOptions[index].show()
                console.log("onchange!")
            }

            this.courseOptions_html.appendChild(option)
        })

        this.root.appendChild(this.courseOptions_html)
        this.root.appendChild(this.courseViews_html)
    }
}