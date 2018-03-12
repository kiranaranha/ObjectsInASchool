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

function addStudent(newStudent) {
    hideAll();

    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var id = document.getElementById("IdNumber").value;
    var grade = document.getElementById("gradeLevel").value;
    newStudent = new Student(firstName, lastName, id, grade);
    var repeat = false;
    for (var i = 0; i < students.length; i++) {
        console.log(students[i].lastName);
        if (students[i].lastName == newStudent.lastName) {
            repeat = true;
            break;
        }
    }
    if (repeat) {
        document.getElementById("teacherStudentAdded").innerHTML = "Student " + newStudent.lastName
            + " is already in the system."
    }else{
        document.getElementById("teacherStudentAdded").innerHTML = "Student " + firstName + " " + lastName
            + " Successfully Added";
        students.push(newStudent);
    }
    turnOn("teacherStudentAdded");
}

function addTeacher(newTeacher){
    hideAll();
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var subject = document.getElementById("subject").value;
    newTeacher = new Teacher(firstName, lastName, subject);

    var repeat = false;
    for(var i = 0; i < teachers.length; i++){
        if(teachers[i].lastName == newTeacher.lastName) {
            repeat = true;
            break;
        }
    }

    if(repeat){
        document.getElementById("teacherStudentAdded").innerHTML = "Teacher " + newTeacher.lastName
            + " is already in the system."
    }else{
        document.getElementById("teacherStudentAdded").innerHTML = "Teacher " + firstName + " " + lastName
            + " Successfully Added";
        teachers.push(newTeacher);
    }
    turnOn("teacherStudentAdded");
}

function addSection(){
    hideAll();
    turnOn("addSection");
    var TSB = "<select id='teacherSelectBox'><br>";
    for(var i = 0; i < teachers.length; i++){
        TSB += "<option>" + teachers[i].lastName + "</option><br>";
    }
    TSB += "</select>";
document.getElementById("teacherSelectDiv").innerHTML = "Enter Section Teacher: " + TSB;
}

function enterSection(){
    var sectionName = document.getElementById("sectionName").value;
    var teacher = document.getElementById("teacherSelectBox").value;
    hideAll();
    document.getElementById("sectionEntered").innerHTML = "Section " + sectionName + " with Teacher " + teacher
        + " Successfully Added";
    turnOn("sectionEntered");
}

function addStudentToSection(){
    hideAll();
    document.getElementById("studentSectionSelectDiv");

    var stuS = "<select id='studentSelect'><br>";
    for(var i = 0; i < students.length; i++){
        stuS += "<option>" + students[i].lastName + "</option><br>";
    }
    stuS += "</select>";

    var secS = "<select id='sectionSelect'><br>";
    for(var i = 0; i < students.length; i++){
        secS += "<option>" + students[i].lastName + "</option><br>";
    }
    secS += "</select>";


    turnOn("addStudentToSection");
}

function assignStudentGrade(){
    hideAll();
}

function removeStudentFromSection(){
    hideAll();
}

function showData() {
    hideAll();
    turnOn("showData");
}
function listAll(){
    //students = 0; teachers = 1; section = 2;
    turnOff("objectDetails");
    var type = document.getElementById("selectDataType").value;
    var array = [];
    var list = '';
    if(type == 0){
        array = students;
    }
    if(type == 1){
        array = teachers;
    }
    if(type == 2){
        array = sections;
    }
    for(i = 0; i < array.length; i++){
        if(type == 0) {
            list += "<div onclick='detailStudent(" +i+ ")'>" + array[i].firstName + ' ' + array[i].lastName + "</div>";
        }else if(type == 1){
            list += "<div onclick='detailTeacher(" +i+ ")'>" + array[i].firstName + ' ' + array[i].lastName + "</div>";
        }else{
            list += "<div onclick='detailSection(" +i+ ")'>" + array[i].name + "</div>";
        }
    }
    document.getElementById("listData").innerHTML = "Select an item in the list for more information: <br><br>" + list;
    turnOn("listData");
}
function detailStudent(n){
    document.getElementById("objectDetails").innerHTML ="Student " + students[n].firstName + " " + students[n].lastName
        + " is in " + students[n].grade + "th grade and has the ID number " + students[n].id;
    turnOn("objectDetails");
}
function detailTeacher(n){
    document.getElementById("objectDetails").innerHTML = teachers[n].firstName + " "
        + teachers[n].lastName + " teaches " + teachers[n].subject;
    turnOn("objectDetails");
}
function detailSection(n){
    document.getElementById("objectDetails").innerHTML = sections[n].name + " is taught by " + sections[n].teacher
        + " and has a max size of " + sections[n].maxsize;
    turnOn("objectDetails");
}



function searchSchool() {
    hideAll();
}

