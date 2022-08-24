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
-- Table structure for table `usersubjectdegree`
--

DROP TABLE IF EXISTS `usersubjectdegree`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usersubjectdegree` (
  `UserSubjectDgreeCode` int NOT NULL,
  `UserLevelCode` int NOT NULL,
  `SubjectCode0` int NOT NULL,
  `SubjectDegree` varchar(45) NOT NULL,
  `SubjectGrade` varchar(45) NOT NULL,
  PRIMARY KEY (`UserSubjectDgreeCode`),
  KEY `UserLevelCode_idx` (`UserLevelCode`),
  KEY `SubjectCode_idx` (`SubjectCode0`),
  CONSTRAINT `SubjectCode0` FOREIGN KEY (`SubjectCode0`) REFERENCES `subjects` (`SubjectCode`),
  CONSTRAINT `UserLevelCode` FOREIGN KEY (`UserLevelCode`) REFERENCES `userlevel` (`UserLevelCode`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usersubjectdegree`
--

LOCK TABLES `usersubjectdegree` WRITE;
/*!40000 ALTER TABLE `usersubjectdegree` DISABLE KEYS */;
INSERT INTO `usersubjectdegree` VALUES (1,11,1002,'55','B'),(2,11,1009,'60','B+'),(3,10,1003,'80','A+'),(4,1,1010,'95','B+'),(5,12,1004,'140','A+');
/*!40000 ALTER TABLE `usersubjectdegree` ENABLE KEYS */;
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
