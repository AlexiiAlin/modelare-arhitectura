/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// auth layout
import Login from "_views/auth-layout/Login.js";
// admin layout
import AdminTeachers from "_views/admin-layout/Teachers.js";
import AdminStudents from "_views/admin-layout/Students.js";
import AdminSubjects from "_views/admin-layout/Subjects.js";
import AdminClasses from "_views/admin-layout/Classes.js";
import AdminTeacher from "_views/admin-layout/Teacher.js";
import AdminStudent from "_views/admin-layout/Student.js";
import AdminSubject from "_views/admin-layout/Subject.js";
import AdminClass from "_views/admin-layout/Class.js";
// teacher layout
import TeacherProfile from "_views/teacher-layout/Profile.js";
import TeacherSubjects from "_views/teacher-layout/Subjects.js";
import TeacherStudents from "_views/teacher-layout/Students.js";
import TeacherGrades from "_views/teacher-layout/Grades.js";
// student layout
import StudentProfile from "_views/student-layout/Profile.js";
import StudentSubjects from "_views/student-layout/Subjects.js";
import StudentGrades from "_views/student-layout/Grades.js";

var routes = [
  // auth layout
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  // admin layout
  {
    path: "/teachers",
    name: "Teachers",
    icon: "ni ni-paper-diploma text-warning",
    component: AdminTeachers,
    layout: "/admin"
  },
  {
    path: "/students",
    name: "Students",
    icon: "ni ni-hat-3 text-primary",
    component: AdminStudents,
    layout: "/admin"
  },
  {
    path: "/subjects",
    name: "Subjects",
    icon: "ni ni-ungroup text-info",
    component: AdminSubjects,
    layout: "/admin"
  },
  {
    path: "/classes",
    name: "Classes",
    icon: "ni ni-building text-success",
    component: AdminClasses,
    layout: "/admin"
  },
  {
    path: "/teacher/:id",
    name: "Teacher",
    icon: "ni ni-paper-diploma text-default",
    component: AdminTeacher,
    layout: "/admin"
  },
  {
    path: "/student",
    name: "Student",
    icon: "ni ni-hat-3 text-default",
    component: AdminStudent,
    layout: "/admin"
  },
  {
    path: "/subject",
    name: "Subject",
    icon: "ni ni-ungroup text-default",
    component: AdminSubject,
    layout: "/admin"
  },
  {
    path: "/class/:id",
    name: "Class",
    icon: "ni ni-building text-default",
    component: AdminClass,
    layout: "/admin"
  },
  // teacher layout
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-single-02 text-yellow",
    component: TeacherProfile,
    layout: "/teacher"
  },
  {
    path: "/subjects",
    name: "Subjects",
    icon: "ni ni-bullet-list-67 text-red",
    component: TeacherSubjects,
    layout: "/teacher"
  },
  {
    path: "/students",
    name: "Students",
    icon: "ni ni-align-left-2 text-info",
    component: TeacherStudents,
    layout: "/teacher"
  },
  {
    path: "/grades",
    name: "Grades",
    icon: "ni ni-tv-2 text-primary",
    component: TeacherGrades,
    layout: "/teacher"
  },
  // student layout
  {
    path: "/profile",
    name: "Profile",
    icon: "ni ni-single-02 text-yellow",
    component: StudentProfile,
    layout: "/student"
  },
  {
    path: "/subjects",
    name: "Subjects",
    icon: "ni ni-bullet-list-67 text-red",
    component: StudentSubjects,
    layout: "/student"
  },
  {
    path: "/grades",
    name: "Grades",
    icon: "ni ni-tv-2 text-primary",
    component: StudentGrades,
    layout: "/student"
  }
];
export default routes;
