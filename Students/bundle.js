(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(name) {
        this.name = name;
    }
}
exports.Student = Student;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Web interface
const Student_1 = require("./Student");
let students = [];
let addStudent_input = document.createElement('input');
let addStudent_button = document.createElement('button');
let studentList = document.createElement('div');
studentList.setAttribute('id', "studentList_div");
let refreshStudents_button = document.createElement('button');
let addStudent = () => {
    let newStudent = new Student_1.Student(addStudent_input.value);
    students.push(newStudent);
    console.log("Added new student: " + newStudent.name);
};
let refreshStudents = () => {
    console.log("Refreshing student list");
    while (studentList.lastChild) {
        studentList.removeChild(studentList.lastChild);
    }
    students.forEach(v => {
        let s = document.createElement('p');
        s.textContent = v.name;
        studentList.appendChild(s);
        console.log(v.name);
    });
};
addStudent_button.onclick = addStudent;
addStudent_button.textContent = "Add Student";
refreshStudents_button.onclick = refreshStudents;
refreshStudents_button.textContent = "Refresh student list";
document.body.appendChild(addStudent_input);
document.body.appendChild(addStudent_button);
document.body.appendChild(refreshStudents_button);
document.body.appendChild(studentList);

},{"./Student":1}]},{},[2]);
