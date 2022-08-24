//university.user
const selectUser = "SELECT * FROM university.user";
const selectUserById = "SELECT * FROM university.user WHERE UserID=";
const insertUser = "INSERT INTO university.user SET ?";
const deleteUserById = "DELETE FROM university.user WHERE UserID=";

//university.level
const selectLevel = "SELECT * FROM university.level";
const selectLevelByCode = "SELECT * FROM university.level WHERE LevelCode=";
const insertLevel = "INSERT INTO university.level SET ?";
const deleteLevelByCode = "DELETE FROM university.level WHERE LevelCode=";

//university.userlevel
const selectUserLevel = "SELECT * FROM university.userlevel";
const selectUserLevelByCode = "SELECT * FROM university.userlevel WHERE UserLevelCode=";
const insertUserLevel = "INSERT INTO university.userlevel SET ?";
const deleteUserLevelByCode = "DELETE FROM university.userlevel WHERE UserLevelCode=";

//university.subjects
const selectSubject = "SELECT * FROM university.subjects";
const selectSubjectByCode = "SELECT * FROM university.subjects WHERE SubjectCode=";
const insertSubject = "INSERT INTO university.subjects SET ?";
const deleteSubjectByCode = "DELETE FROM university.subjects WHERE SubjectCode=";

//university.usersubject
const selectUserSubject = "SELECT * FROM university.usersubject";
const selectUserSubjectByCode = "SELECT * FROM university.usersubject WHERE UserSubjectCode=";
const insertUserSubject = "INSERT INTO university.usersubject SET ?";
const deleteUserSubjectByCode = "DELETE FROM university.usersubject WHERE UserSubjectCode=";

//university.usersubjectdegree
const selectUserSubjectDegree = "SELECT * FROM university.usersubjectdegree";
const selectUserSubjectDegreeByCode = "SELECT * FROM university.usersubjectdegree WHERE UserSubjectDgreeCode=";
const insertUserSubjectDegree = "INSERT INTO university.usersubjectdegree SET ?";
const deleteUserSubjectDegreeByCode = "DELETE FROM university.usersubjectdegree WHERE UserSubjectDgreeCode=";

//university.lectureperiod
const selectlecturePeriod = "SELECT * FROM university.lectureperiod";
const selectlecturePeriodByCode = "SELECT * FROM university.lectureperiod WHERE LecturePeriodCode=";
const insertlecturePeriod = "INSERT INTO university.lectureperiod SET ?";
const deletelecturePeriodByCode = "DELETE FROM university.lectureperiod WHERE lecturePeriodCode=";

//university.table
const selectTable = "SELECT * FROM university.table";
const selectTableByCode = "SELECT * FROM university.table WHERE TapleCode=";
const insertTable = "INSERT INTO university.table SET ?";
const deleteTableByCode = "DELETE FROM university.table WHERE TapleCode=";


module.exports = {
  //User
  selectUser,
  selectUserById,
  insertUser,
  deleteUserById,
  
  //LEVEL
  selectLevel,
  selectLevelByCode,
  insertLevel,
  deleteLevelByCode,
  
  //UserLevel
  selectUserLevel,
  selectUserLevelByCode,
  insertUserLevel,
  deleteUserLevelByCode,
  
  //Subject
  selectSubject,
  selectSubjectByCode,
  insertSubject,
  deleteSubjectByCode,

  //UserSubject
  selectUserSubject,
  selectUserSubjectByCode,
  insertUserSubject,
  deleteUserSubjectByCode,
  
  //UserSubjectDegree
  selectUserSubjectDegree,
  selectUserSubjectDegreeByCode,
  insertUserSubjectDegree,
  deleteUserSubjectDegreeByCode,
  
  //LecturePeriod
  selectlecturePeriod,
  selectlecturePeriodByCode,
  insertlecturePeriod,
  deletelecturePeriodByCode,
  
  // table
  selectTable,
  selectTableByCode,
  insertTable,
  deleteTableByCode,

};
