-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: university
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `name` varchar(45) NOT NULL,
  `BirthDate` date NOT NULL,
  `Gender` varchar(45) NOT NULL,
  `NationalID` int NOT NULL,
  `Nationality` varchar(45) NOT NULL,
  `UserID` int NOT NULL,
  `PhoneNumber` varchar(11) NOT NULL,
  `CumlativeGrade` varchar(45) DEFAULT NULL,
  `UserTypeCode` int NOT NULL,
  PRIMARY KEY (`UserID`),
  UNIQUE KEY `UserID_UNIQUE` (`UserID`),
  UNIQUE KEY `NationalID_UNIQUE` (`NationalID`),
  KEY `UserTypeCode_idx` (`UserTypeCode`),
  CONSTRAINT `UserTypeCode` FOREIGN KEY (`UserTypeCode`) REFERENCES `usertype` (`UserTypeCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('ibrahem','1960-11-01','male',1548652,'egyption',251,'01257824565',NULL,2),('abanob','1998-10-31','male',298888,'egyption',342,'01142601607','veryGood',3),('shaymaa ahmed','1985-01-22','Female',280100,'Egyption',1200,'01201110410','null',1),('abas','1970-10-15','male',195555,'egyption',2010,'01025523354',NULL,2),('alaa','1998-03-12','Female',286541,'Egyption',3123,'01245813012',NULL,3),('mohamed','2000-01-10','male',30541241,'egyption',3581,'01125154651','A+',3),('wanas','1998-10-31','male',29811412,'egyption',3621,'01254884565','A+',3),('mina','1998-01-24','male',969696,'Egyption',696969,'01241544111',NULL,3);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-02  0:43:56
