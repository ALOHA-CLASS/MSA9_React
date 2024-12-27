-- Active: 1731384027892@@127.0.0.1@3306@aloha
-- Active: 1731904938494@@127.0.0.1@3306@aloha
DROP TABLE IF EXISTS `todos`;

CREATE TABLE `todos` (
	`no`	BIGINT	NOT NULL AUTO_INCREMENT PRIMARY KEY	COMMENT 'PK',
	`id`	VARCHAR(64)	NOT NULL	COMMENT 'UK',
	`name`	TEXT	NOT NULL	COMMENT '할일',
	`status`	BOOLEAN	NOT NULL	DEFAULT false	COMMENT '상태',
	`seq`	INT	NOT NULL	DEFAULT 0	COMMENT '순서',
	`created_at`	TIMESTAMP	NOT NULL	DEFAULT current_timestamp	COMMENT '등록일자',
	`updated_at`	TIMESTAMP	NOT NULL	DEFAULT current_timestamp	COMMENT '수정일자'
);

TRUNCATE TABLE todos;

INSERT INTO todos ( id, name, status, seq )
VALUES 
	( UUID(), '할일1', TRUE, 1 ),
	( UUID(), '할일2', FALSE, 2 ),
	( UUID(), '할일3', TRUE, 3 ),
	( UUID(), '할일4', FALSE, 4 ),
	( UUID(), '할일5', TRUE, 5 ),
	( UUID(), '할일6', FALSE, 6 ),
	( UUID(), '할일7', TRUE, 7 ),
	( UUID(), '할일8', FALSE, 8 ),
	( UUID(), '할일9', TRUE, 9 ),
	( UUID(), '할일10', FALSE, 10 ),
	( UUID(), '할일11', TRUE, 1 ),
	( UUID(), '할일12', FALSE, 2 ),
	( UUID(), '할일13', TRUE, 3 ),
	( UUID(), '할일14', FALSE, 4 ),
	( UUID(), '할일15', TRUE, 5 ),
	( UUID(), '할일16', FALSE, 6 ),
	( UUID(), '할일17', TRUE, 7 ),
	( UUID(), '할일18', FALSE, 8 ),
	( UUID(), '할일19', TRUE, 9 ),
	( UUID(), '할일20', FALSE, 10 ),
	( UUID(), '할일21', TRUE, 1 ),
	( UUID(), '할일22', FALSE, 2 ),
	( UUID(), '할일23', TRUE, 3 ),
	( UUID(), '할일24', FALSE, 4 ),
	( UUID(), '할일25', TRUE, 5 ),
	( UUID(), '할일26', FALSE, 6 ),
	( UUID(), '할일27', TRUE, 7 ),
	( UUID(), '할일28', FALSE, 8 ),
	( UUID(), '할일29', TRUE, 9 ),
	( UUID(), '할일30', FALSE, 10 )
	;