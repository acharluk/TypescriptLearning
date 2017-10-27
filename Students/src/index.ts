// Web interface
import { MainView } from './views/MainView'
import { CourseView } from './views/CourseView'
import { Course } from './core/Course'

let db: any[] = [
    {
        "name": "Math I",
        "description": "No description provided",
        "students": [
            { "name": "Alex" },
            { "name": "Gum" },
            { "name": "Missingno" }
        ]
    },
    {
        "name": "Physics II",
        "description": "No description provided",
        "students": [
            { "name": "Combo" },
            { "name": "Sirius" }
        ]
    }
]

let mainV = new MainView()

db.forEach(v => {
    mainV.add(new CourseView(v))
})

mainV.show()