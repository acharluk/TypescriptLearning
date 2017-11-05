(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const StudentView_1 = require("./StudentView");
class CourseView {
    constructor(course, root) {
        this.course = course;
        this.root = root ? root : document.body;
        this.students_html = document.createElement('select');
        this.students_views = [];
        this.selectedStudentView_html = document.createElement('div');
        this.course.students.forEach(v => {
            let newSV = new StudentView_1.StudentView(v);
            newSV.root = this.selectedStudentView_html;
            this.students_views.push(newSV);
        });
    }
    show() {
        while (this.students_html.lastChild)
            this.students_html.removeChild(this.students_html.lastChild);
        while (this.root.lastChild)
            this.root.removeChild(this.root.lastChild);
        this.course.students.forEach(v => {
            let option = document.createElement('option');
            option.textContent = v.name;
            this.students_html.appendChild(option);
        });
        this.students_html.onchange = () => {
            let index = this.students_html.selectedIndex;
            this.students_views[index].show();
        };
        this.students_views[0].show();
        this.root.appendChild(this.students_html);
        this.root.appendChild(this.selectedStudentView_html);
    }
}
exports.CourseView = CourseView;

},{"./StudentView":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MainView {
    constructor(root) {
        this.root = root ? root : document.body;
        this.courseOptions = [];
        this.courseOptions_html = document.createElement('select');
        this.selectedCourseView_html = document.createElement('div');
    }
    add(cView) {
        cView.root = this.selectedCourseView_html;
        this.courseOptions.push(cView);
    }
    show() {
        while (this.courseOptions_html.lastChild)
            this.courseOptions_html.removeChild(this.courseOptions_html.lastChild);
        this.courseOptions.forEach(v => {
            let option = document.createElement('option');
            option.textContent = v.course.name;
            this.courseOptions_html.onchange = () => {
                let index = this.courseOptions_html.selectedIndex;
                this.courseOptions[index].show();
            };
            this.courseOptions[0].show();
            this.courseOptions_html.appendChild(option);
        });
        this.root.appendChild(this.courseOptions_html);
        this.root.appendChild(this.selectedCourseView_html);
    }
}
exports.MainView = MainView;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StudentView {
    constructor(student, root) {
        this.student = student;
        this.root = root ? root : document.body;
        this.student_html = document.createElement('div');
    }
    show() {
        while (this.student_html.lastChild)
            this.student_html.removeChild(this.student_html.lastChild);
        while (this.root.lastChild)
            this.root.removeChild(this.root.lastChild);
        let table = document.createElement('ol');
        table.setAttribute('type', 'a');
        this.student.marks.forEach(v => {
            let m = document.createElement('li');
            m.textContent = v.toString();
            table.appendChild(m);
        });
        this.student_html.appendChild(table);
        this.root.appendChild(this.student_html);
    }
}
exports.StudentView = StudentView;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Web interface
const MainView_1 = require("./views/MainView");
const CourseView_1 = require("./views/CourseView");
let db = [
    {
        "name": "Math I",
        "description": "No description provided",
        "students": [
            { "name": "Alex", "marks": [100, 90, 97] },
            { "name": "Gum", "marks": [10, 0, 70] },
            { "name": "Missingno", "marks": [45, 85] }
        ]
    },
    {
        "name": "Physics II",
        "description": "No description provided",
        "students": [
            { "name": "Combo", "marks": [0] },
            { "name": "Sirius", "marks": [62, 96, 34, 67, 24] }
        ]
    }
];
let mainV = new MainView_1.MainView();
db.forEach(v => {
    mainV.add(new CourseView_1.CourseView(v));
});
let buttonRefresh = document.createElement('button');
buttonRefresh.textContent = "Refresh";
buttonRefresh.onclick = () => {
    while (document.body.lastChild)
        document.body.removeChild(document.body.lastChild);
    document.body.appendChild(buttonRefresh);
    mainV.show();
};
document.body.appendChild(buttonRefresh);
mainV.show();

},{"./views/CourseView":1,"./views/MainView":2}]},{},[4]);
