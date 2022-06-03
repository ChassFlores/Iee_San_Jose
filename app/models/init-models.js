var DataTypes = require("sequelize").DataTypes;
var _SequelizeMeta = require("./SequelizeMeta");
var _academic_note_type = require("./academic_note_type");
var _academic_period = require("./academic_period");
var _assistance = require("./assistance");
var _basic_service = require("./basic_service");
var _course = require("./course");
var _formation_level = require("./formation_level");
var _grade = require("./grade");
var _identity_document = require("./identity_document");
var _institution_type = require("./institution_type");
var _nationality = require("./nationality");
var _represent = require("./represent");
var _representative = require("./representative");
var _representative_role = require("./representative_role");
var _student = require("./student");
var _subject = require("./subject");
var _teacher = require("./teacher");
var _user = require("./user");

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var academic_note_type = _academic_note_type(sequelize, DataTypes);
  var academic_period = _academic_period(sequelize, DataTypes);
  var assistance = _assistance(sequelize, DataTypes);
  var basic_service = _basic_service(sequelize, DataTypes);
  var course = _course(sequelize, DataTypes);
  var formation_level = _formation_level(sequelize, DataTypes);
  var grade = _grade(sequelize, DataTypes);
  var identity_document = _identity_document(sequelize, DataTypes);
  var institution_type = _institution_type(sequelize, DataTypes);
  var nationality = _nationality(sequelize, DataTypes);
  var represent = _represent(sequelize, DataTypes);
  var representative = _representative(sequelize, DataTypes);
  var representative_role = _representative_role(sequelize, DataTypes);
  var student = _student(sequelize, DataTypes);
  var subject = _subject(sequelize, DataTypes);
  var teacher = _teacher(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  representative.belongsToMany(student, { as: 'student_std_id_students', through: represent, foreignKey: "representative_rps_id", otherKey: "student_std_id" });
  student.belongsToMany(representative, { as: 'representative_rps_id_representatives', through: represent, foreignKey: "student_std_id", otherKey: "representative_rps_id" });
  grade.belongsTo(academic_note_type, { as: "grd_ant", foreignKey: "grd_ant_id"});
  academic_note_type.hasOne(grade, { as: "grade", foreignKey: "grd_ant_id"});
  grade.belongsTo(academic_period, { as: "grd_acp", foreignKey: "grd_acp_id"});
  academic_period.hasOne(grade, { as: "grade", foreignKey: "grd_acp_id"});
  student.belongsTo(basic_service, { as: "std_b", foreignKey: "std_bs_id"});
  basic_service.hasMany(student, { as: "students", foreignKey: "std_bs_id"});
  assistance.belongsTo(course, { as: "asc_cr", foreignKey: "asc_crs_id"});
  course.hasMany(assistance, { as: "assistances", foreignKey: "asc_crs_id"});
  grade.belongsTo(course, { as: "grd_cr", foreignKey: "grd_crs_id"});
  course.hasOne(grade, { as: "grade", foreignKey: "grd_crs_id"});
  course.belongsTo(formation_level, { as: "crs_fl", foreignKey: "crs_fl_id"});
  formation_level.hasMany(course, { as: "courses", foreignKey: "crs_fl_id"});
  teacher.belongsTo(formation_level, { as: "tcr_fl", foreignKey: "tcr_fl_id"});
  formation_level.hasMany(teacher, { as: "teachers", foreignKey: "tcr_fl_id"});
  user.belongsTo(identity_document, { as: "usr_idoc", foreignKey: "usr_idoc_id"});
  identity_document.hasMany(user, { as: "users", foreignKey: "usr_idoc_id"});
  student.belongsTo(institution_type, { as: "std_inst", foreignKey: "std_inst_id"});
  institution_type.hasMany(student, { as: "students", foreignKey: "std_inst_id"});
  user.belongsTo(nationality, { as: "usr_nat", foreignKey: "usr_nat_id"});
  nationality.hasMany(user, { as: "users", foreignKey: "usr_nat_id"});
  represent.belongsTo(representative, { as: "representative_rp", foreignKey: "representative_rps_id"});
  representative.hasMany(represent, { as: "represents", foreignKey: "representative_rps_id"});
  representative.belongsTo(representative_role, { as: "rps_rr", foreignKey: "rps_rr_id"});
  representative_role.hasMany(representative, { as: "representatives", foreignKey: "rps_rr_id"});
  course.belongsTo(student, { as: "crs_std", foreignKey: "crs_std_id"});
  student.hasMany(course, { as: "courses", foreignKey: "crs_std_id"});
  grade.belongsTo(student, { as: "grd_std", foreignKey: "grd_std_id"});
  student.hasOne(grade, { as: "grade", foreignKey: "grd_std_id"});
  represent.belongsTo(student, { as: "student_std", foreignKey: "student_std_id"});
  student.hasMany(represent, { as: "represents", foreignKey: "student_std_id"});
  course.belongsTo(subject, { as: "crs_sub", foreignKey: "crs_sub_id"});
  subject.hasMany(course, { as: "courses", foreignKey: "crs_sub_id"});
  course.belongsTo(teacher, { as: "crs_tch", foreignKey: "crs_tch_id"});
  teacher.hasMany(course, { as: "courses", foreignKey: "crs_tch_id"});
  representative.belongsTo(user, { as: "rp", foreignKey: "rps_id"});
  user.hasOne(representative, { as: "representative", foreignKey: "rps_id"});
  student.belongsTo(user, { as: "std_usr", foreignKey: "std_usr_id"});
  user.hasMany(student, { as: "students", foreignKey: "std_usr_id"});

  return {
    SequelizeMeta,
    academic_note_type,
    academic_period,
    assistance,
    basic_service,
    course,
    formation_level,
    grade,
    identity_document,
    institution_type,
    nationality,
    represent,
    representative,
    representative_role,
    student,
    subject,
    teacher,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
