(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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
                console.log("onchange!");
            };
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
// Web interface
const MainView_1 = require("./views/MainView");
const CourseView_1 = require("./views/CourseView");
let db = [
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
];
let mainV = new MainView_1.MainView();
db.forEach(v => {
    mainV.add(new CourseView_1.CourseView(v));
});
mainV.show();

},{"./views/CourseView":1,"./views/MainView":2}]},{},[3]);
