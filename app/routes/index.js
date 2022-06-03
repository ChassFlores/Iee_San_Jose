const { Router } = require("express");
const router = Router();
const NationalityController = require("../controllers/nationality");
const Identity_documentController = require("../controllers/identity_document");
const UserController = require("../controllers/user");
const Representative_roleController = require("../controllers/representative_role");
const Basic_serviceController = require("../controllers/basic_service");
const Institution_typeController = require("../controllers/institution_type");
const Formation_levelController = require("../controllers/formation_level");
const RepresentativeController = require("../controllers/representative");
const StudentController = require("../controllers/student");
const SubjectController = require("../controllers/subject");
const TeacherController = require("../controllers/teacher");
const Academic_note_typeController = require("../controllers/academic_note_type");
const Academic_periodController = require("../controllers/academic_period");
const RepresentController = require("../controllers/represent");
const CourseController = require("../controllers/course");
const GradeController = require("../controllers/grade");
const AssistanceController = require("../controllers/assistance");

router.get("/", (req, res) => res.send("Welcome"));
router.post("/Nationality", NationalityController.createNationality);
router.get("/Nationalitys", NationalityController.getAllNationalitys);
router.get("/Nationality/:id", NationalityController.getNationalityById);
router.put("/Nationality/:id", NationalityController.updateNationality);
router.delete("/Nationality/:id", NationalityController.deleteNationality);
router.post(
  "/Identity_document",
  Identity_documentController.createIdentity_document
);
router.get(
  "/Identity_documents",
  Identity_documentController.getAllIdentity_documents
);
router.get(
  "/Identity_document/:id",
  Identity_documentController.getIdentity_documentById
);
router.put(
  "/Identity_document/:id",
  Identity_documentController.updateIdentity_document
);
router.delete(
  "/Identity_document/:id",
  Identity_documentController.deleteIdentity_document
);
router.post("/User", UserController.createUser);
router.get("/Users", UserController.getAllUsers);
router.get("/User/:id", UserController.getUserById);
router.put("/User/:id", UserController.updateUser);
router.delete("/User/:id", UserController.deleteUser);
router.post(
  "/Representative_role",
  Representative_roleController.createRepresentative_role
);
router.get(
  "/Representative_roles",
  Representative_roleController.getAllRepresentative_roles
);
router.get(
  "/Representative_role/:id",
  Representative_roleController.getRepresentative_roleById
);
router.put(
  "/Representative_role/:id",
  Representative_roleController.updateRepresentative_role
);
router.delete(
  "/Representative_role/:id",
  Representative_roleController.deleteRepresentative_role
);
router.post("/Basic_service", Basic_serviceController.createBasic_service);
router.get("/Basic_services", Basic_serviceController.getAllBasic_services);
router.get("/Basic_service/:id", Basic_serviceController.getBasic_serviceById);
router.put("/Basic_service/:id", Basic_serviceController.updateBasic_service);
router.delete(
  "/Basic_service/:id",
  Basic_serviceController.deleteBasic_service
);
router.post(
  "/Institution_type",
  Institution_typeController.createInstitution_type
);
router.get(
  "/Institution_types",
  Institution_typeController.getAllInstitution_types
);
router.get(
  "/Institution_type/:id",
  Institution_typeController.getInstitution_typeById
);
router.put(
  "/Institution_type/:id",
  Institution_typeController.updateInstitution_type
);
router.delete(
  "/Institution_type/:id",
  Institution_typeController.deleteInstitution_type
);
router.post(
  "/Formation_level",
  Formation_levelController.createFormation_level
);
router.get(
  "/Formation_levels",
  Formation_levelController.getAllFormation_levels
);
router.get(
  "/Formation_level/:id",
  Formation_levelController.getFormation_levelById
);
router.put(
  "/Formation_level/:id",
  Formation_levelController.updateFormation_level
);
router.delete(
  "/Formation_level/:id",
  Formation_levelController.deleteFormation_level
);
router.post("/Representative", RepresentativeController.createRepresentative);
router.get("/Representatives", RepresentativeController.getAllRepresentatives);
router.get(
  "/Representative/:id",
  RepresentativeController.getRepresentativeById
);
router.put(
  "/Representative/:id",
  RepresentativeController.updateRepresentative
);
router.delete(
  "/Representative/:id",
  RepresentativeController.deleteRepresentative
);
router.post("/Student", StudentController.createStudent);
router.get("/Students", StudentController.getAllStudents);
router.get("/Student/:id", StudentController.getStudentById);
router.put("/Student/:id", StudentController.updateStudent);
router.delete("/Student/:id", StudentController.deleteStudent);
router.post("/Subject", SubjectController.createSubject);
router.get("/Subjects", SubjectController.getAllSubjects);
router.get("/Subject/:id", SubjectController.getSubjectById);
router.put("/Subject/:id", SubjectController.updateSubject);
router.delete("/Subject/:id", SubjectController.deleteSubject);
router.post("/Teacher", TeacherController.createTeacher);
router.get("/Teachers", TeacherController.getAllTeachers);
router.get("/Teacher/:id", TeacherController.getTeacherById);
router.put("/Teacher/:id", TeacherController.updateTeacher);
router.delete("/Teacher/:id", TeacherController.deleteTeacher);
router.post(
  "/Academic_note_type",
  Academic_note_typeController.createAcademic_note_type
);
router.get(
  "/Academic_note_types",
  Academic_note_typeController.getAllAcademic_note_types
);
router.get(
  "/Academic_note_type/:id",
  Academic_note_typeController.getAcademic_note_typeById
);
router.put(
  "/Academic_note_type/:id",
  Academic_note_typeController.updateAcademic_note_type
);
router.delete(
  "/Academic_note_type/:id",
  Academic_note_typeController.deleteAcademic_note_type
);
router.post(
  "/Academic_period",
  Academic_periodController.createAcademic_period
);
router.get(
  "/Academic_periods",
  Academic_periodController.getAllAcademic_periods
);
router.get(
  "/Academic_period/:id",
  Academic_periodController.getAcademic_periodById
);
router.put(
  "/Academic_period/:id",
  Academic_periodController.updateAcademic_period
);
router.delete(
  "/Academic_period/:id",
  Academic_periodController.deleteAcademic_period
);
router.post("/Represent", RepresentController.createRepresent);
router.get("/Represents", RepresentController.getAllRepresents);
router.get("/Represent/:id", RepresentController.getRepresentById);
router.put("/Represent/:id", RepresentController.updateRepresent);
router.delete("/Represent/:id", RepresentController.deleteRepresent);
router.post("/Course", CourseController.createCourse);
router.get("/Courses", CourseController.getAllCourses);
router.get("/Course/:id", CourseController.getCourseById);
router.put("/Course/:id", CourseController.updateCourse);
router.delete("/Course/:id", CourseController.deleteCourse);
router.post("/Grade", GradeController.createGrade);
router.get("/Grades", GradeController.getAllGrades);
router.get("/Grade/:id", GradeController.getGradeById);
router.put("/Grade/:id", GradeController.updateGrade);
router.delete("/Grade/:id", GradeController.deleteGrade);
router.post("/Assistance", AssistanceController.createAssistance);
router.get("/Assistances", AssistanceController.getAllAssistances);
router.get("/Assistance/:id", AssistanceController.getAssistanceById);
router.put("/Assistance/:id", AssistanceController.updateAssistance);
router.delete("/Assistance/:id", AssistanceController.deleteAssistance);
module.exports = router;
