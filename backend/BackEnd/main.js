const express = require("express");
const { connectDB } = require("./config/db");
var cors = require('cors')

connectDB();

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//get users 
app.use("/api/user", require("./controllers/user"));
//get userById, delete userById, update userById
app.use("/api/user/:id", require("./controllers/user"));
//get type
app.use("/api/user/type/:id", require("./controllers/user"));

//insert user
app.use("/api/user", require("./controllers/user"));

//login user (student)
app.use("/api/user/student/login", require("./controllers/user"));
//get stfees (student)
app.use("/api/user/student/login/stfees", require("./controllers/user"));
//get stschedule (student)
app.use("/api/user/student/login/stschedule", require("./controllers/user"));
//get stdgree (student)
app.use("/api/user/student/login/stdgree", require("./controllers/user"));

//login user (Doctor)
app.use("/api/user/doctor/login", require("./controllers/user"));
//get stschedule (Doctor)
app.use("/api/user/doctor/login/drschedule", require("./controllers/user"));
//post stschedule (Doctor)
app.use("/api/user/doctor/login/insertDrschedule", require("./controllers/user"));

//login user (Manager)
app.use("/api/user/manager/login", require("./controllers/user"));

//get & post stschedule user (Manager)
app.use("/api/user/manager/login/mgschedule", require("./controllers/user"));

//get level
app.use("/api/level", require("./controllers/level"));
//get levelByCode, delete levelByCode, update levelByCode
app.use("/api/level/:code", require("./controllers/level"));
//insert level
app.use("/api/level", require("./controllers/level"));

//get userLevel
app.use("/api/userLevel", require("./controllers/userLevel"));
//get userLevelByCode, delete userLevelByCode, update userLevelByCode
app.use("/api/userLevel/:code", require("./controllers/userLevel"));
//insert userLevel
app.use("/api/userLevel", require("./controllers/userLevel"));

//get subject
app.use("/api/subject", require("./controllers/subject"));
//get subjectByCode, delete subjectByCode, update subjectByCode
app.use("/api/subject/:code", require("./controllers/subject"));
//insert subject
app.use("/api/subject", require("./controllers/subject"));

//get UserSubject
app.use("/api/drSubject", require("./controllers/drSubject"));
//get UserSubjectByCode, delete UserSubjectByCode, update UserSubjectByCode
app.use("/api/drSubject/:code", require("./controllers/drSubject"));
//insert UserSubject
app.use("/api/drSubject", require("./controllers/drSubject"));

//get UserSubjectDegree
app.use("/api/userSubjectDegree", require("./controllers/userSubjectDegree"));
//get UserSubjectByCode, delete UserSubjectByCode, update UserSubjectByCode
app.use("/api/userSubjectDegree/:code", require("./controllers/userSubjectDegree"));
//insert UserSubject
app.use("/api/userSubjectDegree", require("./controllers/userSubjectDegree"));

//get lecturePeriod
app.use("/api/lecturePeriod", require("./controllers/lecturePeriod"));
//get lecturePeriodByCode, delete lecturePeriodByCode, update lecturePeriodByCode
app.use("/api/lecturePeriod/:code", require("./controllers/lecturePeriod"));
//insert lecturePeriod
app.use("/api/lecturePeriod", require("./controllers/lecturePeriod"));

//get table
app.use("/api/table", require("./controllers/table"));
//get lecturePeriodByCode, delete lecturePeriodByCode, update lecturePeriodByCode
app.use("/api/table/:code", require("./controllers/table"));
//insert lecturePeriod
app.use("/api/table", require("./controllers/table"));

app.use("/api/userLevel/getUserLevelCode", require("./controllers/userLevel"));
//message in server
app.get("/",function(req,res){
  res.send("helal welcome you 0_o");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


