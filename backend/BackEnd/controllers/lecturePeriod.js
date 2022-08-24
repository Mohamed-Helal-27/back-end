const express = require("express");
const asyncHandler = require("express-async-handler");
const { connection } = require("../config/db");
const {
  selectlecturePeriod,
  selectlecturePeriodByCode,
  insertlecturePeriod,
  deletelecturePeriodByCode,
} = require("../config/sqlQuery");

const router = express.Router();

//insert newUser
router.route("/").post(
  asyncHandler(async (req, res) => {
    let data = {
      LecturePeriodCode: req.body.LecturePeriodCode,
      LecturePeriodName: req.body.LecturePeriodName,
      FromTime: req.body.FromTime,
      ToTime: req.body.ToTime,
    };
    connection.query(insertlecturePeriod, data, (err, results) => {
      if (err) throw err;
      apiResponse(results, res)
    });
  })
);

//get users
router.route("/").get(
  asyncHandler(async (req, res) => {
    connection.query(selectlecturePeriod, (err, results) => {
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
      `${selectlecturePeriodByCode}${req.params.id}`,
      (err, results) => {
        if (err) throw err;
        apiResponse(results, res)
      }
    );
  })
);

// //update userById
router.route("/:id").put(
  asyncHandler(async (req, res) => {

    let sqlQuery =
    
      "UPDATE university.lectureperiod SET LecturePeriodCode='" + req.body.LecturePeriodCode +
      "', LecturePeriodName='" + req.body.LecturePeriodName +
      "', FromTime='" + req.body.FromTime +
      "', ToTime='" + req.body.ToTime +
      "' WHERE LecturePeriodCode=" + req.params.id;

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
      `${deletelecturePeriodByCode}${req.params.id}`,
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
