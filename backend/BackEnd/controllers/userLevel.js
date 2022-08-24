const express = require("express");
const asyncHandler = require("express-async-handler");
const { connection } = require("../config/db");
const {
  selectUserLevel,
  selectUserLevelByCode,
  insertUserLevel,
  deleteUserLevelByCode,
} = require("../config/sqlQuery");

const router = express.Router();

//insert newUser
router.route("/").post(
  asyncHandler(async (req, res) => {
    let data = {
      UserLevelCode: req.body.UserLevelCode,
      LevelCode: req.body.LevelCode,
      UserID: req.body.UserID,
      CurrentLevelFlag: req.body.CurrentLevelFlag,
      SemesterOneDegree: req.body.SemesterOneDegree,
      SemesterTwoDegree: req.body.SemesterTwoDegree,
      SemesterOneFeesFlag: req.body.SemesterOneFeesFlag,
      SemesterTwoFeesFlag: req.body.SemesterTwoFeesFlag,
    };
    connection.query(insertUserLevel, data, (err, results) => {
      if (err) throw err;
      apiResponse(results, res)
    });
  })
);



//get users
router.route("/").get(
  asyncHandler(async (req, res) => {
    connection.query(selectUserLevel, (err, results) => {
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
      `${selectUserLevelByCode}${req.params.id}`,
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
      "UPDATE university.userlevel SET UserLevelCode='" +
      req.body.UserLevelCode +
      "', LevelCode='" +
      req.body.LevelCode +
      "', UserID='" +
      req.body.UserID +
      "', CurrentLevelFlag='" +
      req.body.CurrentLevelFlag +
      "', SemesterOneDegree='" +
      req.body.SemesterOneDegree +
      "', SemesterTwoDegree='" +
      req.body.SemesterTwoDegree +
      "', SemesterOneFeesFlag='" +
      req.body.SemesterOneFeesFlag +
      "', SemesterTwoFeesFlag='" +
      req.body.SemesterTwoFeesFlag +
      "' WHERE UserLevelCode=" +
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
    connection.query(
      `${deleteUserLevelByCode}${req.params.id}`,
      (err, results) => {
        if (err) throw err;
        apiResponse(results, res)
      }
    );
  })
);


router.route("/getUserLevelCode").post(
  asyncHandler(async (req, res) => {
    let sqlQuery = "SELECT userlevel.UserLevelCode FROM university.userlevel WHERE userlevel.UserID = " + req.body.UserID + " && userlevel.LevelCode = " +
    req.body.LevelCode;

    connection.query(sqlQuery,
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
