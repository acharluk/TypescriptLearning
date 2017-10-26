// Web interface
import { MainView } from './views/MainView'
import { CourseView } from './views/CourseView'
import { Course } from './core/Course'

let myCourse = new Course("Math I")

myCourse.addStudent([{name: "Alex"}])

let courseTest = new CourseView(myCourse)
// courseTest.show(myCourse)

let mainV = new MainView()
mainV.add(courseTest)
mainV.show()