// Web interface
import { Student } from './Student'

let s = new Student("Alex")

let testp = document.createElement('h1')
testp.textContent = s.name
document.body.appendChild(testp)