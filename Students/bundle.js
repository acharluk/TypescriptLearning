(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Student_1 = require("./Student");
class Course {
    constructor(name, description) {
        this.name = name;
        this.description = description ? description : "No description provided";
        this.students = [];
    }
    setTeacher(teacher) {
        this.teacher = teacher;
    }
    addStudent(student) {
        if (student instanceof Student_1.Student) {
            this.students.push(student);
        }
        else {
            student.forEach(v => this.students.push(v));
        }
    }
    printInfo() {
        console.log("Course name: " + this.name);
        console.log("Description: " + this.description);
        console.log("Teacher: " + this.teacher.name);
        console.log("Students: ");
        this.students.forEach((v, i) => {
            console.log(i + ": " + v.name);
        });
    }
}
exports.Course = Course;

},{"./Student":2}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(name) {
        this.name = name;
    }
}
exports.Student = Student;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CourseView {
    constructor(course, root) {
        this.course = course;
        this.root = root ? root : document.body;
        this.students_html = document.createElement('select');
    }
    show() {
        while (this.students_html.lastChild)
            this.students_html.removeChild(this.students_html.lastChild);
        this.course.students.forEach(v => {
            console.log(v);
            let option = document.createElement('option');
            option.textContent = v.name;
            this.students_html.appendChild(option);
        });
        this.root.appendChild(this.students_html);
    }
}
exports.CourseView = CourseView;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MainView {
    constructor(root) {
        this.root = root ? root : document.body;
        this.courseOptions = [];
        this.courseOptions_html = document.createElement('select');
        this.courseViews_html = document.createElement('div');
    }
    add(cView) {
        cView.root = this.courseViews_html;
        this.courseOptions.push(cView);
    }
    show() {
        while (this.courseOptions_html.lastChild)
            this.courseOptions_html.removeChild(this.courseOptions_html.lastChild);
        this.courseOptions.forEach(v => {
            let option = document.createElement('option');
            option.textContent = v.course.name;
            this.courseOptions_html.onchange = () => {
                this.courseOptions[0].show();
                console.log("onchange!");
            };
            this.courseOptions_html.appendChild(option);
        });
        this.root.appendChild(this.courseOptions_html);
        this.root.appendChild(this.courseViews_html);
    }
}
exports.MainView = MainView;

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Web interface
const MainView_1 = require("./views/MainView");
const CourseView_1 = require("./views/CourseView");
const Course_1 = require("./core/Course");
let myCourse = new Course_1.Course("Math I");
myCourse.addStudent([{ name: "Alex" }]);
let courseTest = new CourseView_1.CourseView(myCourse);
let myCourse2 = new Course_1.Course("Physics II");
myCourse2.addStudent([{ name: "Combo" }]);
let courseTest2 = new CourseView_1.CourseView(myCourse2);
let mainV = new MainView_1.MainView();
mainV.add(courseTest);
mainV.add(courseTest2);
mainV.show();

},{"./core/Course":1,"./views/CourseView":3,"./views/MainView":4}]},{},[5]);
