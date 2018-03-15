function Student(first, last, id, grade) {
    this.id = id;
    this.firstName = first;
    this.lastName = last;
    this.grade = grade;
}

function Teacher(first, last, subject) {
    this.firstName = first;
    this.lastName = last;
    this.subject = subject;
}

function Section(name, maxsize, teacher){
    this.name = name;
    this.maxsize = maxsize;
    this.teacher = teacher;
    this.size = 0;
    this.studentsArray = [];
}

weitz = new Teacher("Michael", "Weitz", "Math");
henri = new Teacher("Philippe", "Henri", "Math");
moreno = new Teacher("Amanda", "Moreno", "English");
miller = new Teacher("Alan", "Miller", "English");
parker = new Teacher("Ross", "Parker", "Economics");
vegt = new Teacher("Robin", "Vegt", "History");

smith = new Student("John", "Smith", 111111, 11);
baggins = new Student("Frodo", "Baggins",  222222, 9);
pickle = new Student("Dyl", "Pickle", 333333, 10);
AdvMath3 = new Section("Advanced Math 3", 30, "Weitz");
AdvMath2 = new Section("Advanced Math 2", 25, "Henri");
IBEnglish = new Section("IB English", 30, "Moreno");

var teachers = [weitz, henri, moreno, miller, parker, vegt];
var students = [smith, baggins, pickle];
var sections = [AdvMath2, AdvMath3, IBEnglish];
