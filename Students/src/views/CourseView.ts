import { Course } from './../core/Course'
import { StudentView } from "./StudentView";

export class CourseView {
    root: HTMLElement

    course: Course
    students_html: HTMLSelectElement
    students_views: StudentView[]
    selectedStudentView_html: HTMLElement

    constructor(course: Course, root ?: HTMLElement) {
        this.course = course
        this.root = root ? root : document.body
        this.students_html = document.createElement('select')
        this.students_views = []
        this.selectedStudentView_html = document.createElement('div')
        this.course.students.forEach(v => {
            let newSV = new StudentView(v)
            newSV.root = this.selectedStudentView_html
            this.students_views.push(newSV)
        })
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

        this.students_html.onchange = () => {
            let index = this.students_html.selectedIndex
            this.students_views[index].show()
        }
        
        this.students_views[0].show()

        this.root.appendChild(this.students_html)
        this.root.appendChild(this.selectedStudentView_html)
    }
}