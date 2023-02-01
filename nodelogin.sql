/*
 Navicat Premium Data Transfer

 Source Server         : cloud
 Source Server Type    : MySQL
 Source Server Version : 80028
 Source Host           : localhost:3306
 Source Schema         : nodelogin

 Target Server Type    : MySQL
 Target Server Version : 80028
 File Encoding         : 65001

 Date: 01/02/2023 12:50:56
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for accounts
-- ----------------------------
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE `accounts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of accounts
-- ----------------------------
BEGIN;
INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (1, 'test', 'test', 'test.test@test.com');
INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (2, 'shane', 'shane', 'shane@shane.com');
INSERT INTO `accounts` (`id`, `username`, `password`, `email`) VALUES (3, 'priyanka', 'priyanka', 'priyanka@priyanka.com');
COMMIT;

-- ----------------------------
-- Table structure for record
-- ----------------------------
DROP TABLE IF EXISTS `record`;
CREATE TABLE `record` (
  `itemsname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `consumption` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;

-- ----------------------------
-- Records of record
-- ----------------------------
BEGIN;
INSERT INTO `record` (`itemsname`, `consumption`, `id`) VALUES ('air_conditioner', '23', 1);
INSERT INTO `record` (`itemsname`, `consumption`, `id`) VALUES ('dryer', '99', 2);
INSERT INTO `record` (`itemsname`, `consumption`, `id`) VALUES ('induction_cooker', '18', 3);
INSERT INTO `record` (`itemsname`, `consumption`, `id`) VALUES ('microwave', '20', 4);
INSERT INTO `record` (`itemsname`, `consumption`, `id`) VALUES ('oven', '5', 5);
INSERT INTO `record` (`itemsname`, `consumption`, `id`) VALUES ('refrigerator', '10', 6);
INSERT INTO `record` (`itemsname`, `consumption`, `id`) VALUES ('tv', '30', 7);
INSERT INTO `record` (`itemsname`, `consumption`, `id`) VALUES ('vacuum_cleaner', '20', 8);
INSERT INTO `record` (`itemsname`, `consumption`, `id`) VALUES ('washing_machine', '99', 9);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
