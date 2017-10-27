// Web interface
import { MainView } from './views/MainView'
import { CourseView } from './views/CourseView'
import { Course } from './core/Course'

let db: any[] = [
    {
        "name": "Math I",
        "description": "No description provided",
        "students": [
            { "name": "Alex" }
        ]
    },
    {
        "name": "Physics II",
        "description": "No description provided",
        "students": [
            { "name": "Combo" }
        ]
    }
]

let mainV = new MainView()

db.forEach(v => {
    mainV.add(new CourseView(v))
})

mainV.show()