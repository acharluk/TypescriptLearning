import { Student } from './Student'
import { Teacher } from "./Teacher"
import { Course } from "./Course"

let alex = new Student("Alex")

let mike = new Teacher("Mike")

let math_i = new Course("Math I")

math_i.setTeacher(mike)
math_i.addStudent(alex)
math_i.addStudent([new Student("Mi"), {name: "RandomBoi"}])

math_i.printInfo()