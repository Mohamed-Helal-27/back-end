const express = require("express");
const asyncHandler = require("express-async-handler");
const { connection } = require("../config/db");
const {
  selectLevel,
  selectLevelByCode,
  insertLevel,
  deleteLevelByCode,
} = require("../config/sqlQuery");

const router = express.Router();

//insert newUser
router.route("/").post(
  asyncHandler(async (req, res) => {
    let data = {
      LevelCode: req.body.LevelCode,
      LevelName: req.body.LevelName,
      TotalFees: req.body.TotalFees,
      SemesterOneFees: req.body.SemesterOneFees,
      SemesterTwoFees: req.body.SemesterTwoFees,
      SemesterOneFrom: req.body.SemesterOneFrom,
      SemesterOneTo: req.body.SemesterOneTo,
      SemesterTwoFrom: req.body.SemesterTwoFrom,
      SemesterTwoTo: req.body.SemesterTwoTo,
    };
    connection.query(insertLevel, data, (err, results) => {
      if (err) throw err;
      apiResponse(results, res)
    });
  })
);

//get users
router.route("/").get(
  asyncHandler(async (req, res) => {
    connection.query(selectLevel, (err, results) => {
      if (err) throw err;
      //return results
      apiResponse(results, res)
    });
  })
);

//get usersById
router.route("/:id").get(
  asyncHandler(async (req, res) => {
    connection.query(`${selectLevelByCode}${req.params.id}`, (err, results) => {
      if (err) throw err;
      apiResponse(results, res)
    });
  })
);

//update LevelByCode
router.route("/:id").put(
  asyncHandler(async (req, res) => {
    let sqlQuery =
      "UPDATE university.level SET LevelCode='" +
      req.body.LevelCode +
      "', LevelName='" +
      req.body.LevelName +
      "', TotalFees='" +
      req.body.TotalFees +
      "', SemesterOneFees='" +
      req.body.SemesterOneFees +
      "', SemesterTwoFees='" +
      req.body.SemesterTwoFees +
      "', SemesterOneFrom='" +
      req.body.SemesterOneFrom +
      "', SemesterOneTo='" +
      req.body.SemesterOneTo +
      "', SemesterTwoFrom='" +
      req.body.SemesterTwoFrom +
      "', SemesterTwoTo='" +
      req.body.SemesterTwoTo +
      "' WHERE LevelCode=" +
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
    connection.query(`${deleteLevelByCode}${req.params.id}`, (err, results) => {
      if (err) throw err;
      apiResponse(results, res)
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
