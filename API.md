|Request Type|Request Route|Request body|Request response|
|:----|:----|:----|:----|
|post|`/users/authenticate`|`{email, password}`|`{"_id":"...","email":"...","firstName":"...","lastName":"...","role":"...","createdDate":"...","__v":0,"token":"..."}`|
|get|`/users/teachers`|``|`[{"_id":"...","firstName":"...","lastName":"...","noClasses":"..."},...]`<br/> **Where `noClasses` is the number of classes tought by the teacher**|
|get|`/users/students`|``|`[{"_id":"...","firstName":"...","lastName":"...","class":"...","noSubjects":"...","noGrades":"...","average":"..."},...]`**<br/>Where `class` is the class where the student is enrolled<br/>Where `noSubjects` is the number of subjects tought in the `class`<br/>Where `noGrades` is the total number of grades of the student<br/>Where `average` is the average of grades**|
|get|`/subjects`||`[{"_id":"..","subjectName":"...","noClasses":"..."},"noStudents":"...","noTeachers":"..."},...]`**<br/>noClasses is the number of classes where that subject (subjectName) is thought<br/>noStudents is the number of students that have to take (or are enrolled in) that class<br/>noTeachers is the number of teachers that teach that subject**|
|post|`/subjects`|`{subjectName}`|**Add/insert new subject**|
|get|`/subjects/students/:idStudent`||`[{"idSubject":"...","firstNameTeacher":"...","lastNameTeacher":"...","noGrades":"...","average":"..."},...]`|
|get|`/classes`||`[{"_id":"...","className":"...","noStudents":"...","noTeachers":"...","noSubjects":"..."},...]`**<br/>noStudents is the number of students are part of that class<br/>noTeachers is the number of teachers that teach for that class<br/>noSubjects is the number of subjects that are thought at that class**|
|post|`/classes`|`{className}`|**Add/insert new class**|
|get|`/users/teachers/:id`||`{"_id":"...","firstName":"...","lastName":"...","email":"...","teaching":[{"_idTeaching":"...","subjectName":"...","className":"...",},...]}`**<br/>Where teaching is an array of objects of subjects that the teachers is teaching and at which class. The _idTeaching is from the "teaching" table.**|
|post|`/users/teachers`|`{email, password, firstName, lastName}`|**This is for adding new teacher**|
|put|`/users/teachers/teaching/:idTeacher`|`{className,subjectName}`|**This is for insterting anew column in the teaching. The teacher with the ID will now teach subjectName at className**|
|post|`/users/teachers/:idTeacher`|`{firstName,lastName,email,password}`|**Update teacher info**|
|get|`/users/students/:id`||`{"_id":"...","firstName":"...","lastName":"...","className":"...","email":"...","grades":[{"_idGrade":"...","score":"...","subjectName":"...","dateAdded":"...","dateModified":"..."},...]}`|
|post|`/users/students/:id`|`{email, password, firstName, lastName, className}`|**This is for changeing student information**|
|post|`/users/students`|`{email, password, firstName, lastName}`|**This is for adding new student**|
|get|`/users/check-pass/:id`|`{password}`|**true/false** Checks if password is correct|
|put|`/users/students/grades/:idStudent`|`{score, subjectName}`|**This is for adding a new grade for a student at a given subject**|
|delete|`/users/students/grades/:idStudent/:idGrade`||**This is for deleting a grade for a student**|
|post|`/users/students/grades/:idStudent/:idGrade`|`{score}`|**This is for updateting a grade for a student**|
|get|`/subjects/:id`||`[{"_idTeaching":"...","className":"...","firstNameTeacher":"...","lastNameTeacher":"..."},...]`|
|put|`/subjects/:id`|`{className}`||
|get|`/classes/:id`||`[{"_idStudent":"...","firstNameStudent":"","lastNameStudent":"..."},...]`|
|delete|`/classes/:idClass`|`{ idStudent }`||
|get|`/grades/:idStudent/:idSubject`||`[{"idGrade":"...","score":"...","dateModified":"..."},...]`|
|get|`/subjects/teachers/:idTeacher`||`[{"idSubject":"..","subjectName":"..","className":"...","noStudents":"..."},...]`|
|get|`/users/students/:idTeacher/:idSubject`||`[{"idStudent":"..","studentName":"..","noGrades":"...","average":"..."},...]`|
|get|`/grades/:idTeacher/:idStudent/:idSubject`||`[{"idGrade":"...","score":"...","dateAdded":"...","dateModified":"..."},...]`|

**...** means that there is the data that comes from the API, or it means that there is an array
