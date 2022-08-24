const express = require("express");
const asyncHandler = require("express-async-handler");
const { connection } = require("../config/db");
const {
    selectUserSubjectDegree,
    selectUserSubjectDegreeByCode,
    insertUserSubjectDegree,
    deleteUserSubjectDegreeByCode,
} = require("../config/sqlQuery");

const router = express.Router();

//insert Subject
router.route("/").post(
  asyncHandler(async (req, res) => {
    let data = {
      UserSubjectDgreeCode: req.body.UserSubjectDgreeCode,
      UserLevelCode: req.body.UserLevelCode,
      SubjectCode0: req.body.SubjectCode0,
      SubjectDegree: req.body.SubjectDegree,
      SubjectGrade: req.body.SubjectGrade,
    };
    connection.query(insertUserSubjectDegree, data, (err, results) => {
      if (err) throw err;
      apiResponse(results, res)
    });
  })
);

//get users
router.route("/").get(
  asyncHandler(async (req, res) => {
    connection.query(selectUserSubjectDegree, (err, results) => {
      if (err) throw err;
      //return results
      apiResponse(results, res)
    });
  })
);

//get usersById
router.route("/:id").get(
  asyncHandler(async (req, res) => {
    connection.query(
      `${selectUserSubjectDegreeByCode}${req.params.id}`,
      (err, results) => {
        if (err) throw err;
        apiResponse(results, res)
      }
    );
  })
);

//update userById
router.route("/:id").put(
  asyncHandler(async (req, res) => {

    let sqlQuery =
      "UPDATE university.usersubjectdegree SET UserSubjectDgreeCode='" + req.body.UserSubjectDgreeCode +
      "', UserLevelCode='" + req.body.UserLevelCode +
      "', SubjectCode0='" + req.body.SubjectCode0 +
      "', SubjectDegree='" + req.body.SubjectDegree +
      "' WHERE UserSubjectDgreeCode=" + req.params.id;

    connection.query(sqlQuery, (err, results) => {
      if (err) throw err;
      apiResponse(results, res)
    });
  })
);

//delete usersById
router.route("/:Code").delete(
  asyncHandler(async (req, res) => {
    connection.query(
      `${deleteUserSubjectDegreeByCode}${req.params.id}`,
      (err, results) => {
        if (err) throw err;
        apiResponse(results, res)
      }
    );
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
