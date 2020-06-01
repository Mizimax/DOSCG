-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: mariadb
-- Generation Time: Jun 01, 2020 at 08:03 AM
-- Server version: 10.4.7-MariaDB-1:10.4.7+maria~bionic
-- PHP Version: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scg`
--

-- --------------------------------------------------------

--
-- Table structure for table `line_noti`
--

CREATE TABLE `line_noti` (
  `noti_id` bigint(20) NOT NULL,
  `user_name` int(11) NOT NULL,
  `noti_type` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `line_noti`
--

INSERT INTO `line_noti` (`noti_id`, `user_name`, `noti_type`) VALUES
(1, 123123, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `line_noti`
--
ALTER TABLE `line_noti`
  ADD PRIMARY KEY (`noti_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `line_noti`
--
ALTER TABLE `line_noti`
  MODIFY `noti_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
