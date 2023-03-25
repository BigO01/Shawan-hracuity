class Person {
  // Person base class which has two attributes
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName(): string { // return the full name in string format
    return `${this.firstName} ${this.lastName}`;
  }

  greeting(): string {  // greeting method which will reuturn the greeting
    return `Hello, my name is ${this.fullName}.`;
  }
}

class Teacher extends Person {
  // Teacher class takes has two attributes school name and grade level in addition to Person class
  schoolName: string;
  gradeLevel: number;

  constructor(firstName: string, lastName: string, schoolName: string, gradeLevel: number) {
    super(firstName, lastName); // this calls its parent class which is Person with first name and last name
    this.schoolName = schoolName;
    this.gradeLevel = gradeLevel;
  }

  get gradeLevelSuffix(): string { // a method to add suffix to the grade level
    const suffixes = ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'];
    const grade = this.gradeLevel % 10; // this is done to find out the revlevant suffix from suffixes array depending on grade level
    return `${this.gradeLevel}${suffixes[grade]}`; //this returns the grade level with suffix
  }

  greeting(): string {
    return ` ${super.greeting()}. I teach ${this.gradeLevelSuffix} grade at ${this.schoolName}.`;
  }
}

class Student extends Person {
  teacher: Teacher;

  constructor(firstName: string, lastName: string, teacher: Teacher) {
    super(firstName, lastName); // This is calling the constructor of its Parent with the name of student so we can use its greeting method
    this.teacher = teacher;
  }

  get teacherPrefix(): string {
    // assume teacher's gender based on whether first name ends in "a" or not
    return this.teacher.firstName.slice(-1) ? 'Ms.' : 'Mr.';
  }

  greeting(): string {
    return `${super.greeting()}. I am in ${this.teacherPrefix} ${this.teacher.lastName}'s ${this.teacher.gradeLevelSuffix} grade class.`;
  }
}

const exampleTeacher = new Teacher("John", "Doe", "Acme Elementary", 5); // make the object of Teacher class paased the first name of the, last name, school name and
console.log(exampleTeacher.greeting());

// Create an instance of the Student class and log their greeting
const exampleStudent = new Student("Mike", "hammy", exampleTeacher);
console.log(exampleStudent.greeting());
