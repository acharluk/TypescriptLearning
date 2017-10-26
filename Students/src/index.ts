// Web interface
import { MainView } from './views/MainView'
import { CourseView } from './views/CourseView'
import { Course } from './core/Course'

let myCourse = new Course("Math I")
myCourse.addStudent([{name: "Alex"}])
let courseTest = new CourseView(myCourse)

let myCourse2 = new Course("Physics II")
myCourse2.addStudent([{name: "Combo"}])
let courseTest2 = new CourseView(myCourse2)


let mainV = new MainView()
mainV.add(courseTest)
mainV.add(courseTest2)
mainV.show()