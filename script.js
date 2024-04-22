class University {
    constructor() {
        this.groups = {};
    }

    addGroup(groupName) {
        this.groups[groupName] = new Group();
    }

    removeGroup(groupName) {
        delete this.groups[groupName];
    }

    addStudent(groupName, studentName) {
        if (this.groups[groupName]) {
            const student = new Student(studentName);
            this.groups[groupName].addStudent(student);
        } else {
            console.log("Group does not exist");
        }
    }

    removeStudent(groupName, studentId) {
        if (this.groups[groupName]) {
            this.groups[groupName].removeStudent(studentId);
        } else {
            console.log("Group does not exist");
        }
    }

    changeStudentName(groupName, studentId, newName) {
        if (this.groups[groupName]) {
            this.groups[groupName].changeStudentName(studentId, newName);
        } else {
            console.log("Group does not exist");
        }
    }

    getGroupNumStudents(groupName) {
        return this.groups[groupName] ? this.groups[groupName].getNumStudents() : 0;
    }

    getTotalStudents() {
        let total = 0;
        for (const groupName in this.groups) {
            total += this.groups[groupName].getNumStudents();
        }
        return total;
    }

    getStudentsInGroup(groupName) {
        if (this.groups[groupName]) {
            console.log(`Студенти в ${groupName}:`);
            const students = this.groups[groupName].getStudents();
            students.forEach(student => console.log(student.name));
        } else {
            console.log("Group does not exist");
        }
    }

    filterStudentsAlphabetically(groupName) {
        if (this.groups[groupName]) {
            console.log(`Студенти ${groupName} відсортовані за алфавітом:`);
            const students = this.groups[groupName].getStudents().sort((a, b) => a.name.localeCompare(b.name));
            students.forEach(student => console.log(student.name));
        } else {
            console.log("Group does not exist");
        }
    }

    filterGroupsByYear(year) {
        console.log(`Групи створені в 20${year} року:`);
        for (const groupName in this.groups) {
            if (groupName.includes(`-${year}-`)) {
                console.log(groupName);
            }
        }
    }
}

class Group {
    constructor() {
        this.students = {};
    }

    addStudent(student) {
        this.students[student.id] = student;
    }

    removeStudent(studentId) {
        delete this.students[studentId];
    }

    changeStudentName(studentId, newName) {
        const student = this.students[studentId];
        if (student) {
            student.name = newName;
        } else {
            console.log("Student not found in group");
        }
    }

    getNumStudents() {
        return Object.keys(this.students).length;
    }

    getStudents() {
        return Object.values(this.students);
    }
}

class Student {
    static idCounter = 1;

    constructor(name) {
        this.id = Student.idCounter++;
        this.name = name;
    }
}



// Створення університету
const university = new University();

// Додавання групи
university.addGroup("ІПЗс-22-1");
university.addGroup("ІПЗс-22-2");
university.addGroup("КЮСс-21-1");
university.addGroup("КЮСс-21-2");
university.addGroup("АСДс-23-1");


// Додавання студентів до груп
university.addStudent("ІПЗс-22-2", "Рокетський Роман Ігорович");
university.addStudent("ІПЗс-22-2", "Кузевич Іван Петрович");
university.addStudent("ІПЗс-22-2", "Талаєвич Назар Олегович");
university.addStudent("ІПЗс-22-1", "Мадонна");
university.addStudent("ІПЗс-22-1", "Божественний Суд");
university.addStudent("ІПЗс-22-1", "Секстинська Капела");
university.addStudent("КЮСс-21-1", "Остап Вишня");
university.addStudent("КЮСс-21-2", "Максим Рильський");
university.addStudent("КЮСс-21-2", "Васька Симоненко");
university.addStudent("АСДс-23-1", "Головач Олена");



// Виведення кількості студентів у групах
console.log("Кількість студентів у групах:");
console.log("ІПЗс-22-1:", university.getGroupNumStudents("ІПЗс-22-1"));
console.log("ІПЗс-22-2:", university.getGroupNumStudents("ІПЗс-22-2"));
console.log("КЮСс-21-1:", university.getGroupNumStudents("КЮСс-21-1"));
console.log("КЮСс-21-2:", university.getGroupNumStudents("КЮСс-21-2"));
console.log("АСДс-23-1:", university.getGroupNumStudents("АСДс-23-1"));

// Виведення загальної кількості студентів у ВНЗ
console.log("Загальна кількость студентів у ВНЗ:", university.getTotalStudents());

// Виведення списку студентів обраної групи
university.getStudentsInGroup("ІПЗс-22-2");

// Фільтрація студентів за алфавітом у групі
university.filterStudentsAlphabetically("ІПЗс-22-2");

// Фільтрація груп за роком створення
university.filterGroupsByYear("22");

// Видалення студента з групи
university.removeStudent("ІПЗс-22-1", 1);

// Видалення групи
university.removeGroup("АСДс-23-1");