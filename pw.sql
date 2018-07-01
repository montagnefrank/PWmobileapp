/*
Navicat MariaDB Data Transfer

Source Server         : P&W
Source Server Version : 100023
Source Host           : parkedwashed.burt:3306
Source Database       : pw

Target Server Type    : MariaDB
Target Server Version : 100023
File Encoding         : 65001

Date: 2018-06-30 23:08:44
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for pw_track
-- ----------------------------
DROP TABLE IF EXISTS `pw_track`;
CREATE TABLE `pw_track` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `tm` varchar(20) NOT NULL DEFAULT '',
  `ref` varchar(250) NOT NULL DEFAULT '',
  `agent` varchar(250) NOT NULL DEFAULT '',
  `ip` varchar(20) NOT NULL DEFAULT '',
  `ip_value` varchar(11) NOT NULL DEFAULT '0',
  `domain` varchar(20) NOT NULL DEFAULT '',
  `tracking_page_name` varchar(200) NOT NULL DEFAULT '',
  UNIQUE KEY `id` (`id`) USING BTREE
) ENGINE=MyISAM AUTO_INCREMENT=12407 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of pw_track
-- ----------------------------
INSERT INTO `pw_track` VALUES ('12291', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:05:11', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12292', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:25:46', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12293', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:33:33', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12294', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:40:52', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12295', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:43:09', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12296', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:43:27', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12297', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1', '192.168.1.3', '02:44:42', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12298', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1', '192.168.1.3', '02:45:02', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12299', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1', '192.168.1.3', '02:46:11', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12300', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:48:18', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12301', '2018-07-01', 'http://parkedwashed.burt/api/index.php', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:48:23', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12302', '2018-07-01', 'http://parkedwashed.burt/api/index.php', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:49:18', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12303', '2018-07-01', 'http://parkedwashed.burt/api/index.php', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:49:40', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12304', '2018-07-01', 'http://parkedwashed.burt/api/index.php', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:50:57', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12305', '2018-07-01', 'http://parkedwashed.burt/api/index.php', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:51:45', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12306', '2018-07-01', 'http://parkedwashed.burt/api/index.php', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:51:48', '192.168.1.3', 'homecubic_univ_main:');
INSERT INTO `pw_track` VALUES ('12307', '2018-07-01', 'http://parkedwashed.burt/api/index.php', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:52:01', '192.168.1.3', 'homecubic_univ_main:');
INSERT INTO `pw_track` VALUES ('12308', '2018-07-01', 'http://parkedwashed.burt/api/index.php', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:52:15', '192.168.1.3', 'homecubic_univ_main:');
INSERT INTO `pw_track` VALUES ('12309', '2018-07-01', 'http://parkedwashed.burt/api/index.php', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:52:26', '192.168.1.3', 'homecubic_univ_main:');
INSERT INTO `pw_track` VALUES ('12310', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:54:04', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12311', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:54:08', '192.168.1.3', 'homecubic_univ_main:');
INSERT INTO `pw_track` VALUES ('12312', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:54:48', '192.168.1.3', 'homecubic_univ_main:');
INSERT INTO `pw_track` VALUES ('12313', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:54:55', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12314', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:54:56', '192.168.1.3', 'homecubic_univ_main:');
INSERT INTO `pw_track` VALUES ('12315', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:55:43', '192.168.1.3', 'homecubic_univ_main:');
INSERT INTO `pw_track` VALUES ('12316', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:55:49', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12317', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:56:49', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12318', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:57:11', '192.168.1.3', 'homecubic_univ_main:');
INSERT INTO `pw_track` VALUES ('12319', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:57:48', '192.168.1.3', 'homecubic_univ_main:');
INSERT INTO `pw_track` VALUES ('12320', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:58:43', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12321', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '02:58:45', '192.168.1.3', 'homecubic_univ_main:');
INSERT INTO `pw_track` VALUES ('12322', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:00:18', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12323', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:00:22', '192.168.1.3', 'homecubic_univ_main:');
INSERT INTO `pw_track` VALUES ('12324', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:01:28', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12325', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:01:30', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12326', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:01:43', '192.168.1.3', 'homecubic_univ_main:');
INSERT INTO `pw_track` VALUES ('12327', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:03:12', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12328', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:03:12', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12329', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:03:14', '192.168.1.3', 'homecubic_univ_main:');
INSERT INTO `pw_track` VALUES ('12330', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:04:01', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12331', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:04:04', '192.168.1.3', 'homecubic_univ_main:');
INSERT INTO `pw_track` VALUES ('12332', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:04:31', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12333', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:04:31', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12334', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:04:33', '192.168.1.3', 'homecubic_univ_main:');
INSERT INTO `pw_track` VALUES ('12335', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:05:41', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12336', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:05:45', '192.168.1.3', 'homecubic_univ_main:');
INSERT INTO `pw_track` VALUES ('12337', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:07:05', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12338', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:07:05', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12339', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:07:07', '192.168.1.3', 'homecubic_univ_main:home');
INSERT INTO `pw_track` VALUES ('12340', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:07:30', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12341', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:07:32', '192.168.1.3', 'homecubic_univ_main:home');
INSERT INTO `pw_track` VALUES ('12342', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:08:04', '192.168.1.3', 'homecubic_univ_main:home');
INSERT INTO `pw_track` VALUES ('12343', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:08:12', '192.168.1.3', 'homecubic_univ_main:home');
INSERT INTO `pw_track` VALUES ('12344', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:09:37', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12345', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:09:39', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12346', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:10:00', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12347', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:10:28', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12348', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:11:22', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12349', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:13:06', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12350', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:16:09', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12351', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:18:10', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12352', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:18:28', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12353', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:18:51', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12354', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:19:19', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12355', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:19:19', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12356', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:19:39', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12357', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:19:43', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12358', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:19:57', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12359', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:20:46', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12360', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:21:25', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12361', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:22:49', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12362', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:25:37', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12363', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:26:03', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12364', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:26:32', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12365', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:26:52', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12366', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:29:00', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12367', '2018-07-01', 'http://parkedwashed.burt/api/main.php', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:29:08', '192.168.1.3', 'homecubic_univ_main:tools');
INSERT INTO `pw_track` VALUES ('12368', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:29:24', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12369', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:29:39', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12370', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:29:41', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12371', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:30:11', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12372', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:30:38', '192.168.1.3', 'homecubic_univ_main:');
INSERT INTO `pw_track` VALUES ('12373', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:30:40', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12374', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:31:09', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12375', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:33:48', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12376', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:34:00', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12377', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:34:50', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12378', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:35:44', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12379', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:38:59', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12380', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:42:01', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12381', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:43:05', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12382', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:44:07', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12383', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:46:43', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12384', '2018-07-01', 'http://parkedwashed.burt/api/main.php', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:46:49', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12385', '2018-07-01', 'http://parkedwashed.burt/api/main.php', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:46:53', '192.168.1.3', 'homecubic_univ_main:tools');
INSERT INTO `pw_track` VALUES ('12386', '2018-07-01', 'http://parkedwashed.burt/api/main.php', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:47:11', '192.168.1.3', 'homecubic_univ_main:tools');
INSERT INTO `pw_track` VALUES ('12387', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:47:27', '192.168.1.3', 'homecubic_univ_main:tools');
INSERT INTO `pw_track` VALUES ('12388', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:47:30', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12389', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:47:34', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12390', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:47:44', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12391', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:47:49', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12392', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:48:42', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12393', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:50:57', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12394', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:51:21', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12395', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:51:59', '192.168.1.3', 'homecubic_univ_main:home');
INSERT INTO `pw_track` VALUES ('12396', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:52:22', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12397', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:52:22', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12398', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:52:42', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12399', '2018-07-01', 'DIRECTO', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:53:08', '192.168.1.3', 'pw_panel_login');
INSERT INTO `pw_track` VALUES ('12400', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:53:17', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12401', '2018-07-01', 'http://parkedwashed.burt/api/', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:53:39', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12402', '2018-07-01', 'http://parkedwashed.burt/api/main.php', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:53:42', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12403', '2018-07-01', 'http://parkedwashed.burt/api/main.php', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '03:53:46', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12404', '2018-07-01', 'http://parkedwashed.burt/api/main.php', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '04:01:17', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12405', '2018-07-01', 'http://parkedwashed.burt/api/main.php', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '04:02:09', '192.168.1.3', 'homecubic_univ_main:users');
INSERT INTO `pw_track` VALUES ('12406', '2018-07-01', 'http://parkedwashed.burt/api/main.php', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36', '192.168.1.3', '04:04:29', '192.168.1.3', 'homecubic_univ_main:users');

-- ----------------------------
-- Table structure for usuario
-- ----------------------------
DROP TABLE IF EXISTS `usuario`;
CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `nombreUsuario` varchar(100) DEFAULT NULL,
  `passwordUsuario` varchar(100) DEFAULT NULL,
  `idPerfil` int(11) DEFAULT NULL,
  `phoneUsuario` varchar(255) DEFAULT NULL,
  `fechaingresoUsuario` varchar(255) DEFAULT NULL,
  `nombresUsuario` varchar(255) DEFAULT NULL,
  `vehiculoUsuario` varchar(255) DEFAULT NULL,
  `placaUsuario` varchar(255) DEFAULT NULL,
  `statusUsuario` varchar(255) DEFAULT NULL,
  `temaUsuario` varchar(255) DEFAULT NULL,
  `panelUsuario` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idUsuario`) USING BTREE,
  KEY `idPerfil` (`idPerfil`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of usuario
-- ----------------------------
INSERT INTO `usuario` VALUES ('1', 'frank', 'frankfrank', '7', '0979046196', '2017-02-01', 'Frank Montagne', 'montagne', '1', '1', 'blue', 'users');
INSERT INTO `usuario` VALUES ('43', 'maular', 'maular', '7', '0989046196', '2018-07-01', 'Miguel Aular', '0', '1', '1', 'dark', 'users');
