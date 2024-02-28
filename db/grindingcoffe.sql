-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: grindingcoffe
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

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

DROP DATABASE IF EXISTS `grindingcoffe`;
CREATE DATABASE `grindingcoffe`;
USE `grindingcoffe`;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Cafe en grano'),(2,'Cafe molido');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sizes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `size` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (1,'250'),(2,'500'),(3,'1000');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

--
-- Table structure for table `userroll`
--

DROP TABLE IF EXISTS `userroll`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userroll` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userRoll` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userroll`
--

LOCK TABLES `userroll` WRITE;
/*!40000 ALTER TABLE `userroll` DISABLE KEYS */;
INSERT INTO `userroll` VALUES (1,'administrador'),(2,'cliente');
/*!40000 ALTER TABLE `userroll` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `productName` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `category_id` int(11) NOT NULL,
  `size_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `productImage` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_ca3f52e2-7e8d-4044-8ea0-0b73a96916f3` (`category_id`),
  KEY `FK_7abebbe5-cb90-410f-8202-f4377fa46331` (`size_id`),
  CONSTRAINT `FK_7abebbe5-cb90-410f-8202-f4377fa46331` FOREIGN KEY (`size_id`) REFERENCES `sizes` (`id`),
  CONSTRAINT `FK_ca3f52e2-7e8d-4044-8ea0-0b73a96916f3` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (27,'Café Molido 1kg - Blend Moka frutado','pack 1kg, ideal para los amantes de un sabor intenso y aromático.',1,3,26700,'productImage-1704939556310.jpg'),
(32,'Café Instantáneo 250gr  - Caramel','intenso sabor a caramelo y presentado en una práctica bolsa que conserva la frescura y calidad.',1,1,9150,'productImage-1704940459773.jpg'),
(33,'Cafe molido de prueba','cafe molido',2,1,3333,'productImage-1705949965167.jpg'),
(36,'Cafe molido - Juan Valdez','Cafe de montañas Colombianas - Calidad Premium',2,1,5800,'productImage-1705950272367.jpeg'),
(37,'Cafe en grano - tostado alto','Cafe de alto tueste con amargor natural',1,1,4570,'productImage-1705950356937.jpg'),
(38,'Cafe en grano boliviano','Directo de los campos bolivianos',1,2,2900,'productImage-1705950609897.webp'),
(39,'cafe molido Antioqueño','Cafe de clima frio - Premium',2,1,4650,'productImage-1705950659841.jpg'),
(40,'Cafe molido Clasic','Cafe molido - Calidad media',2,1,4500,'productImage-1705950704282.jpg'),
(41,'Cafe en grano - Calidad premium limitado','Un cafe ultra premium de produccion limitada',1,1,9570,'productImage-1705950776313.jpg'),
(42,'Cafe comun molido','Cafe comun de consumo diario',2,1,1900,'productImage-1705950828187.jpg'),
(44,'Café molido','Café molido de alta calidad',2,2,5000,'productImage-1706656846688.jpg'),
(45,'cafe en grano para editar ya editado','prueba de edicion y creacion',1,1,3333,'productImage-1708264327982.jpeg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `userRoll_id` int(11) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_40b428fa-6e45-4cfa-96bd-843b9b6c83fb` (`userRoll_id`),
  CONSTRAINT `FK_40b428fa-6e45-4cfa-96bd-843b9b6c83fb` FOREIGN KEY (`userRoll_id`) REFERENCES `userroll` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Jose','Aguilar','jaguilar@gmail.com','qwewe',2,'1706825624168_img.png'),
(2,'Juan','Salas','jsalas@gmial.com','dfgdfg',2,'1706825624168_img.png'),
(3,'Alonzo','Diaz','adiaz@gmail.com','123',2,'1706825624168_img.png'),
(4,'Fernanda','Diaz','ferdiaz@gmail.com','123',2,'1706825624168_img.png'),
(5,'Jonathan','Salazar','jaguilar@gmail.com','123',2,'1706825624168_img.png'),
(6,'Gonzalo','Duarte','gduarte@gmail.com','12345',2,'1706825624168_img.png'),
(7,'Maria','Dugarte','mdugarte@gmail.com','123',2,'1706825624168_img.png'),
(8,'Pedro','Diaz','pdiaz@gmail.com','$2b$10$sonsBqtf1lKniozRULoQ8Oyms85VaaIZJSRD4kJv89KiNp62apgjK',2,'1706825624168_img.png'),
(9,'Jonathan','Salazar','jdiaz@gmail.com','$2b$10$rWpXPbHEzvBMq0ZufkpWsu5efFA8.cYEwqNFsIErZ9bMbZFGBuL02',2,'1706825624168_img.png'),
(10,'jose','aguilar','jagui@gmail.com','$2b$10$JYtXEq3MfD6Hxf0zYh7HIuWCncQelitb7EHrbUyRonyCj1/yRo2LO',2,'1706825624168_img.png'),
(11,'carlos','Fernandez','afernandez@gmail.com','$2a$10$b6w0gxsY4I7E944R3Zic7e/D.yDiJVYTEjmryr3xPAvbWiD6O0sFa',2,'1706825624168_img.png'),
(12,'Jose','Diaz','josediaz@gmail.com','$2a$10$ZZqLrUgAhczHhGgI9s..NOPjkXhnwyDahLgqL.JKeFb/Xk2Z6OVPK',2,'1706825624168_img.png'),
(13,'Daniel','Diaz','ddiaz@gmail.com','$2a$10$9vUpxhlBqRuaIX.DHYrEDOpvW7XJb0Hif7IkoRWzdFe5F7QCsAfha',2,'1706825624168_img.png'),
(14,'agustina','diaz','agustinadiaz@gmail.com','$2a$10$CiZLYl49Z/lFkt.lr4bht.bGeBS/rwUBUXxw2c./ublIO9wsW5kQy',2,'1706825813196_img.png'),
(15,'Maria','Tobon','camilaormo03@gmail.com','$2a$10$3nY/6RhCIRUn7JTb5E.quuqm3xf92lohfOMGGYT0WgGcJgsTOeeEi',2,'1706932716322_img.png'),
(16,'Juan Jose','tellez tobon','juanjose250699@gmail.com','$2a$10$5k7ef3J9ljuw/rncutNKvOzDAJUq/./hOik3aXXSjZECmF3TKAu.G',1,'1706934289309_img.png'),
(17,'Maria','Tobon','malena1469@hotmail.com','$2a$10$HYzzHFUZahs.eOftaUYbg.02asc8WlrGw9wmZRb.aHNP38QXBI5Qe',2,'1706951499535_img.jpg');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-02-21 20:44:24
