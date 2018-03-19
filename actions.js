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
    var maxsize = document.getElementById("maxSize").value;
    var found = false;

    for(var i = 0; i < sections.length; i++){
        if(sections[i].name == sectionName){
            document.getElementById("sectionEntered").innerHTML = "Section " + sectionName + " Already Exists!";
            found = true;
            break;
        }
    }
    if(found == false) {
        sections.push(new Section(sectionName, maxsize, teacher));
        document.getElementById("sectionEntered").innerHTML = "Section " + sectionName + " with Teacher " + teacher
            + " Successfully Added";
    }
    hideAll();
    turnOn("sectionEntered");
}

function addStudentToSection(){
    hideAll();
    turnOff("studentToSectionDisplay");
    var stuS = "<select id='studentSelect'><br>";
    for(var i = 0; i < students.length; i++){
        stuS += "<option value='" + i + "'>" + students[i].lastName + "</option><br>";
    }
    stuS += "</select>";
    var secS = "<select id='sectionSelect'><br>";
    for(var x = 0; x < sections.length; x++){
        secS += "<option value='" + x + "'>" + sections[x].name + "</option><br>";
    }
    secS += "</select>";
    document.getElementById("studentSectionSelectDiv").innerHTML = "Enter Student: " + stuS + "<br> Enter Section: " + secS;
    turnOn("addStudentToSection");
}

function studentToSectionCont() {
    var i = parseInt(document.getElementById("studentSelect").value);
    var x = parseInt(document.getElementById("sectionSelect").value);
    var repeat = false;

    for(var a = 0; a < sections[x].studentsArray.length; a++){
        console.log(sections[x].studentsArray[a]);
        console.log(students[i].lastName);
        if(sections[x].studentsArray[a] == students[i].lastName){
            document.getElementById("studentToSectionDisplay").innerHTML = "Student " + students[i].lastName +
                " is Already in Section " + sections[x].name;
            repeat = true;
            break;
        }
    }
    if(repeat == false){
        sections[x].studentsArray.push(students[i].lastName);

        document.getElementById("studentToSectionDisplay").innerHTML = "Student " + students[i].lastName + " successfully " +
            "added to section " + sections[x].name;
    }
    turnOff("addStudentToSection");
    turnOn("studentToSectionDisplay");
}

function removeStudentFromSection(){
    hideAll();
    document.getElementById( "studentsListDiv").innerHTML = '';
    var SL = "Select a Section Containing More than 0 Students: " +
        "<select id='sectionList'>";
    for(var i = 0; i < sections.length; i++){
        if(sections[i].studentsArray.length > 0){
            SL += "<option value='"+ i +"'>" + sections[i].name+ "</option>"
        }
    }
    SL += "</select>";
    document.getElementById("sectionsListDiv").innerHTML = SL;

    turnOn("removeStudentFromSection");
}

function removeStudentContinue(){
    console.log(sections[document.getElementById("sectionList").value].studentsArray);
    var stud = sections[document.getElementById("sectionList").value].studentsArray;
    var SS = "Select the Student That You Would Like to Remove From This Section: " + "<select id='removedStudent'>";
    for(var i = 0; i < stud.length; i++){
        SS += "<option value='" + i + "'>" + stud[i] + "</option>";
        console.log(stud[i]);
    }
    SS += "</select>";
    console.log(SS);
    document.getElementById("studentsListDiv").innerHTML = SS + "<br> " +
        "<button onclick=\"removeStudent()\" class=\"btn btn-default\">Remove Student</button>";
}

function removeStudent(){
    console.log(AdvMath2.studentsArray);
    var sectionNum = document.getElementById("sectionList").value;
    var studentNum = document.getElementById("removedStudent").value;
    var stud = sections[sectionNum].studentsArray[studentNum];
    console.log(sectionNum);
    console.log(studentNum);
    sections[sectionNum].studentsArray.splice(studentNum, 1);
    console.log(AdvMath2.studentsArray);
    hideAll();
    document.getElementById("studentRemoved").innerHTML = "Student " + stud + " successfully removed from section "
        + sections[sectionNum].name;
    turnOn("studentRemoved");
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
        + " and has a max size of " + sections[n].maxsize + ". " +
        "There are currently " + parseInt(sections[n].studentsArray.length) + " students in this section.";
        console.log(sections[n].maxsize);

    if(sections[n].studentsArray.length > 0){
        document.getElementById("objectDetails").innerHTML += "<br><br> The following students are enrolled in this " +
            "section: " + sections[n].studentsArray;
    }
    turnOn("objectDetails");
}


