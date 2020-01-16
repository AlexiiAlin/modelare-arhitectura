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
import Login from "views/auth-layout/Login.jsx";
import AdminLogin from "views/auth-layout/AdminLogin.jsx";
import TeacherLogin from "views/auth-layout/TeacherLogin.jsx";
import StudentLogin from "views/auth-layout/StudentLogin.jsx";
// admin layout
import AdminTeachers from "views/admin-layout/Teachers.jsx";
import AdminStudents from "views/admin-layout/Students.jsx";
import AdminSubjects from "views/admin-layout/Subjects.jsx";
import AdminClasses from "views/admin-layout/Classes.jsx";
import AdminTeacher from "views/admin-layout/Teacher.jsx";
import AdminStudent from "views/admin-layout/Student.jsx";
import AdminSubject from "views/admin-layout/Subject.jsx";
import AdminClass from "views/admin-layout/Class.jsx";
// teacher layout
import TeacherProfile from "views/teacher-layout/Profile.jsx";
import TeacherSubjects from "views/teacher-layout/Subjects.jsx";
import TeacherStudents from "views/teacher-layout/Students.jsx";
import TeacherGrades from "views/teacher-layout/Grades.jsx";
// student layout
import StudentProfile from "views/student-layout/Profile.jsx";
import StudentSubjects from "views/student-layout/Subjects.jsx";
import StudentGrades from "views/student-layout/Grades.jsx";

var routes = [
  // auth layout
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  {
    path: "/admin-login",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: AdminLogin,
    layout: "/auth"
  },
  {
    path: "/teacher-login",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: TeacherLogin,
    layout: "/auth"
  },
  {
    path: "/student-login",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: StudentLogin,
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
    path: "/teacher",
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
    path: "/class",
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
