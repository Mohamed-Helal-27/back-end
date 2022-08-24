const express = require("express");
const asyncHandler = require("express-async-handler");
const { connection } = require("../config/db");
const {
    selectTable,
    selectTableByCode,
    insertTable,
    deleteTableByCode,
} = require("../config/sqlQuery");

const router = express.Router();

//insert newUser
router.route("/").post(
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
      apiResponse(results, res)
    });
  })
);

//get users
router.route("/").get(
  asyncHandler(async (req, res) => {
    connection.query(selectTable, (err, results) => {
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
      `${selectTableByCode}${req.params.id}`,
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

      "UPDATE university.table SET TapleCode='" + req.body.TapleCode +
      "', SupjectCode='" + req.body.SupjectCode +
      "', DRID='" + req.body.DRID +
      "', DayCode='" + req.body.DayCode +
      "', LecturePeriodCode='" + req.body.LecturePeriodCode +
      "' WHERE TapleCode=" + req.params.id;

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
      `${deleteTableByCode}${req.params.id}`,
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
