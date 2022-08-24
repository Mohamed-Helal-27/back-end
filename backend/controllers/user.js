const { response } = require("express");
const express = require("express");
const asyncHandler = require("express-async-handler");
const { connection } = require("../config/db");
const {
  selectUser,
  selectUserById,
  insertUser,
  deleteUserById,
  insertTable
} = require("../config/sqlQuery");

const router = express.Router();

//insert newUser
router.route("/").post(
  asyncHandler(async (req, res) => {
    console.log("in server",req.body)
    let data = {
      name: req.body.name,
      BirthDate: req.body.BirthDate,
      Gender: req.body.Gender,
      NationalID: req.body.NationalID, //userName
      Nationality: req.body.Nationality,
      UserID: req.body.UserID, //Passoword
      PhoneNumber: req.body.PhoneNumber,
      CumlativeGrade: req.body.CumlativeGrade,
      UserTypeCode: req.body.UserTypeCode,
    };
    connection.query(insertUser, data, (err, results) => {
      if (err) throw err;
      apiResponse(results, res)
    });
  })
);

//get users
router.route("/").get(
  asyncHandler(async (req, res) => {
    connection.query(selectUser, (err, results) => {
      if (err) throw err;
      //return results
      apiResponse(results, res)
    });
  })
);

//get usersById
router.route("/:id").get(
  asyncHandler(async (req, res) => {
    connection.query(`${selectUserById}${req.params.id}`, (err, results) => {
      if (err) throw err;
      apiResponse(results, res)
    });
  })
);

//update userById
router.route("/:id").put(
  asyncHandler(async (req, res) => {
    let sqlQuery =
      "UPDATE university.user SET name='" +
      req.body.name +
      "', BirthDate='" +
      req.body.BirthDate +
      "', Gender='" +
      req.body.Gender +
      "', NationalID='" +
      req.body.NationalID +
      "', Nationality='" +
      req.body.Nationality +
      "', UserID='" +
      req.body.UserID +
      "', PhoneNumber='" +
      req.body.PhoneNumber +
      "', CumlativeGrade='" +
      req.body.CumlativeGrade +
      "', UserTypeCode='" +
      req.body.UserTypeCode +
      "' WHERE UserID=" +
      req.params.id;

    connection.query(sqlQuery, (err, results) => {
      if (err) throw err;
      apiResponse(results, res)
    });
  })
);

//delete usersById
router.route("/:id").delete(
  asyncHandler(async (req, res) => {
    connection.query(`${deleteUserById}${req.params.id}`, (err, results) => {
      if (err) throw err;
      apiResponse(results, res)
    });
  })
);

//get spical code
router.route("/type/:id").get(
  asyncHandler(async (req, res) => {
    let sqlQuery =
      "SELECT * FROM university.user WHERE UserTypeCode=" + req.params.id;
    connection.query(sqlQuery, (err, results) => {
      if (err) throw err;
      apiResponse(results, res)
    });
  })
);

//login Student
router.route("/student/login").post(
  asyncHandler(async (req, res) => {
    let sqlQuery =
      "SELECT user.name, user.UserID, user.CumlativeGrade, level.LevelName, user.BirthDate, user.NationalID, user.Gender, user.Nationality, user.PhoneNumber FROM university.user INNER JOIN university.userlevel ON user.UserID = userlevel.UserID INNER JOIN university.level ON userlevel.LevelCode = level.LevelCode WHERE user.UserTypeCode= 3 && user.NationalID=" +
      req.body.NationalID +
      " && user.UserID=" +
      req.body.UserID;

    connection.query(sqlQuery, (err, results) => {
      if (err) throw err;
      //res.send();
      apiResponse(results, res);
    });
  })
);

//get fees
router.route("/login/stfees").post(
  asyncHandler(async (req, res) => {
    let sqlQuery =
      "SELECT user.name, level.TotalFees, level.SemesterOneFees, level.SemesterTwoFees FROM university.user INNER JOIN university.userlevel ON user.UserID = userlevel.UserID INNER JOIN university.level ON userlevel.LevelCode = level.LevelCode WHERE user.UserTypeCode= 3 && user.NationalID=" +
      req.body.NationalID;

    connection.query(sqlQuery, (err, results) => {
      if (err) throw err;
      //res.send();
      apiResponse(results, res);
    });
  })
);

//get StudentSchedule
router.route("/login/stschedule").post(
  asyncHandler(async (req, res) => {
    let sqlQuery = "SELECT user.name, day.DayName as day, subjects.SubjecName as subject, lectureperiod.LecturePeriodName as period, lectureperiod.FromTime as Time, university.table.LectureLocation FROM university.user INNER JOIN university.userlevel ON user.UserID = userlevel.UserID INNER JOIN university.level ON userlevel.LevelCode = level.LevelCode INNER JOIN university.subjects ON subjects.LevelCode = level.LevelCode INNER JOIN university.day INNER JOIN university.table ON  day.DayCode = university.table.DayCode && university.subjects.SubjectCode = university.table.SubjectCode1 INNER JOIN university.lectureperiod ON  lectureperiod.LecturePeriodCode =  university.table.LecturePeriodCode WHERE user.UserTypeCode= 3 && user.NationalID=" +
    req.body.NationalID;

    connection.query(sqlQuery, (err, results) => {
      if (err) throw err;
      //res.send();
      apiResponse(results, res);
    });
  })
);

//get StudentDgree
router.route("/login/stdgree").post(
  asyncHandler(async (req, res) => {
    let sqlQuery = "SELECT user.name, subjects.SubjecName, usersubjectdegree.SubjectDegree, usersubjectdegree.SubjectGrade, subjects.SubjectDegree as FullDgree FROM university.user INNER JOIN university.userlevel ON user.UserID = userlevel.UserID INNER JOIN university.level ON userlevel.LevelCode = level.LevelCode INNER JOIN university.usersubjectdegree ON usersubjectdegree.UserLevelCode = userlevel.UserLevelCode INNER JOIN university.subjects ON usersubjectdegree.SubjectCode0 = subjects.SubjectCode WHERE user.UserTypeCode= 3 && user.NationalID=" +
    req.body.NationalID;

    connection.query(sqlQuery, (err, results) => {
      if (err) throw err;
      //res.send();
      apiResponse(results, res);
    });
  })
);

//login Doctor
router.route("/doctor/login").post(
  asyncHandler(async (req, res) => {
    let sqlQuery =
      "SELECT user.name, user.UserID, user.BirthDate, user.NationalID, user.Gender, user.Nationality, user.PhoneNumber FROM university.user WHERE user.UserTypeCode= 2 && user.NationalID=" +
      req.body.NationalID +
      " && user.UserID=" +
      req.body.UserID;
    connection.query(sqlQuery, (err, results) => {
      if (err) throw err;
      //res.send();
      apiResponse(results, res);
    });
  })
);

//get DoctorSchedule
router.route("/login/drschedule").post(
  asyncHandler(async (req, res) => {
    let sqlQuery =" SELECT user.name, subjects.SubjecName, university.day.DayName, lectureperiod.FromTime, university.table.LectureLocation FROM university.user INNER JOIN university.table ON user.UserID = university.table.DRID INNER JOIN university.subjects ON university.table.SubjectCode1 = subjects.SubjectCode INNER JOIN university.lectureperiod ON lectureperiod.LecturePeriodCode = university.table.LecturePeriodCode INNER JOIN university.day ON day.DayCode = university.table.DayCode WHERE user.UserTypeCode= 2 && user.NationalID=" +
    req.body.NationalID;
    connection.query(sqlQuery, (err, results) => {
      if (err) throw err;
      //res.send();
      apiResponse(results, res);
    });
  })
);

//post DoctorSchedule
router.route("/login/insertDrschedule").post(
  asyncHandler(async (req, res) => {
    let data = {
      TapleCode: req.body.TapleCode,
      SubjectCode1: req.body.SubjectCode1,
      DRID: req.body.DRID,
      DayCode: req.body.DayCode,
      LecturePeriodCode: req.body.LecturePeriodCode,
      LectureLocation :req.body.LectureLocation
    };
    connection.query(insertTable, data, (err, results) => {
      if (err) throw err;
      //res.send();
      apiResponse(results, res);
    });
  })
);

//login Manager
router.route("/manager/login").post(
  asyncHandler(async (req, res) => {
    let sqlQuery =
      "SELECT user.name, user.UserID, user.BirthDate, user.NationalID, user.Gender, user.Nationality, user.PhoneNumber FROM university.user WHERE user.UserTypeCode= 1 && user.NationalID=" +
      req.body.NationalID +
      " && user.UserID=" +
      req.body.UserID;
    connection.query(sqlQuery, (err, results) => {
      if (err) throw err;
      //res.send();
      apiResponse(results, res);
    });
  })
);

router.route("/login/mgschedule").get(
  asyncHandler(async (req, res) => {
    let sqlQuery = "SELECT DISTINCT day.DayName as day, subjects.SubjecName as subject, level.LevelName, lectureperiod.LecturePeriodName as period, lectureperiod.FromTime as Time, university.table.LectureLocation FROM university.user INNER JOIN university.userlevel ON user.UserID = userlevel.UserID INNER JOIN university.level ON userlevel.LevelCode = level.LevelCode INNER JOIN university.subjects ON subjects.LevelCode = level.LevelCode INNER JOIN university.day INNER JOIN university.table ON  day.DayCode = university.table.DayCode && university.subjects.SubjectCode = university.table.SubjectCode1 INNER JOIN university.lectureperiod ON  lectureperiod.LecturePeriodCode =  university.table.LecturePeriodCode WHERE user.UserTypeCode= 3"

    connection.query(sqlQuery, (err, results) => {
      if (err) throw err;
      //res.send();
      apiResponse(results, res);
    });
  })
);

function apiResponse(results, res) {
  const aaa = Object.values(results);
  if (aaa.length == 0) {
    return res.status(400).send(
      JSON.stringify({
        status: 400,
        error: "invalid data",
        response: results,
      })
    );
  }
  return res
    .status(200)
    .send(JSON.stringify({ status: 200, error: null, response: results }));
}

module.exports = router;
