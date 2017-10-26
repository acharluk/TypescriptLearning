// Web interface
import { CourseView } from './views/CourseView'
import { Course } from './core/Course'

let myCourse = new Course("Math I")

myCourse.addStudent([{name: "Alex"}])

let courseTest = new CourseView()
courseTest.show(myCourse)