## HRACUITY Assessment
A small exercise on Inheritance done in Typescript.

### Prerequisite
    Make sure the node is installed on your local machine.
## How to run
`tsc assessment.ts` <br />
`node assessment.js`

## NOTES
This is a simple exercise which uses the concepts of inheritance. I defined three classes namely **Person**, **Student** and **Teacher**. **Person** is the base class which has two properties(firstName, lastName) and a method greeting which returns the greeting string.
**Teacher** classs inherits from the Person class and has two additional properties: schoolName and gradeLevel. Similarly, the Student class also inherits from the Person class and adds a teacher property of type Teacher.
To add behavior to the classes, gradeLevelSuffix method is defined in the Teacher class which adds the suffix to gradeLevel of Teacher. TeacherPrefix method is defined in the Student class which adds prefix to the name of Teacher depending on the last character of Teacher name. The greeting method in the Teacher class overrides the greeting method in the Person class and returns a string that includes the grade level suffix and school name properties. The greeting method in the Student class overrides the greeting method in the Person class and returns a string that includes the teacher's prefix, last name, and grade level suffix.

