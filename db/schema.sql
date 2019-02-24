CREATE TABLE `teams` (
  `teamid` int(11) NOT NULL AUTO_INCREMENT,
  `teamName` varchar(128) NOT NULL,
  `draftOrder` int(11) NOT NULL,
  `logo` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`teamid`)
) 

CREATE TABLE `players` (
  `playerid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `position` varchar(5) DEFAULT NULL,
  `prating` int(11) DEFAULT NULL,
  `draftedBy` int(11) DEFAULT NULL,
  PRIMARY KEY (`playerid`)
) 
