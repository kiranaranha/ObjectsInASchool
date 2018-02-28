function hideAll() {
    var elements = document.getElementsByClassName("onOff");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }
}

function turnOn(str){
    document.getElementById(str).style.display = "block";
}
function turnOff(str){
    document.getElementById(str).style.display = "none";
}

function addPerson(){
    hideAll();
    turnOn("addPerson");

}

function addPersonContinue(){
    turnOff("student");
    turnOff("teacher");
    if(document.getElementById("studentOrTeacher").value != 0){
        turnOn("teacher");
    } else {
        turnOn("student");
    }
}

function addStudent() {
    hideAll();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    document.getElementById("teacherStudentAdded").innerHTML = "Student " + firstName + " " + lastName + " Successfully Added";
    turnOn("teacherStudentAdded");
}

function addTeacher(){
    hideAll();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var subject = document.getElementById("subject").value;
    document.getElementById("teacherStudentAdded").innerHTML = "Teacher " + firstName + " " + lastName + " Successfully Added";
    turnOn("teacherStudentAdded");
    new Teacher(firstName, lastName, subject);

}

function addSection(){
    hideAll();
    turnOn("addSection");
    var TSB = "<select id='teacherSelectBox'><br>";
    for(var i = 0; i < teachers.length; i++){
        TSB += "<option>" + teachers[i].lastName + "</option><br>";
    }
    TSB += "</select>";
document.getElementById("teacherSelectDiv").innerHTML = TSB;
}

function enterSection(){
    var sectionName = document.getElementById("sectionName").value;
    var teacher = document.getElementById("teacherSelectBox").value;
    hideAll();
    document.getElementById("sectionEntered").innerHTML = "Section " + sectionName + " with Teacher " + teacher + " Successfully Added";
    turnOn("sectionEntered");
}

function addStudentToSection(){
    hideAll();
}

function assignStudentGrade(){
    hideAll();
}

function removeStudentFromSection(){
    hideAll();
}

function schoolData() {
    hideAll();
}

function searchSchool() {
    hideAll();
}

