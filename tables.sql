--------------------------------------------------------------
-- Database creation Script

-- Auto-Generated by QSEE-SuperLite (c) 2001-2004 QSEE-Technologies Ltd.

-- Verbose generation: ON

-- note: spaces within table/column names have been replaced by underscores (_)

-- Target DB: SQL2

-- Entity Model :Entity Relationship Diagram

-- To drop the tables generated by this script run -
--   'C:\Users\USER\Downloads\arthagyan_drop.sql'

--------------------------------------------------------------

--------------------------------------------------------------
-- Database table removal script

-- Auto-Generated by QSEE-SuperLite (c) 2001-2004 QSEE-Technologies Ltd.

-- note: spaces within table names have been replaced by underscores (_)

-- Target DB: SQL2

-- Entity Model :Entity Relationship Diagram

-- Use this script to drop the tables created by -
--   'C:\Users\USER\Downloads\arthagyan.sql'

-- Dropping a table has the effect of removing it from the Database.  All existing data is lost
-- as well as the definition of the table itself (stored as meta-data).  Dropping the tables allows
-- them to be re-created within the Database, even if they already exist.


--------------------------------------------------------------

-- Drop tables --

DROP TABLE Users Cascade Constraints;

DROP TABLE Quizzes Cascade Constraints;

DROP TABLE Interest_Rate Cascade Constraints;

DROP TABLE Transaction Cascade Constraints;

DROP TABLE Score Cascade Constraints;

DROP TABLE Courses Cascade Constraints;
DROP TABLE Courses_Enrolled Cascade Constraints;


DROP TABLE Quizzes_Question Cascade Constraints;


--------------------------------------------------------------
-- End of DDL DROP file auto-generation
--------------------------------------------------------------


--------------------------------------------------------------
-- Database creation Script

-- Auto-Generated by QSEE-SuperLite (c) 2001-2004 QSEE-Technologies Ltd.

-- Verbose generation: ON

-- note: spaces within table/column names have been replaced by underscores (_)

-- Target DB: SQL2

-- Entity Model :Entity Relationship Diagram

-- To drop the tables generated by this script run -
--   'C:\Users\USER\Downloads\arthagyan_drop.sql'

--------------------------------------------------------------



--------------------------------------------------------------
-- Table Creation --

-- Each entity on the model is represented by a table that needs to be created within the Database.
-- Within SQL new tables are created using the CREATE TABLE command.
-- When a table is created its name and its attributes are defined.
-- The values of which are derived from those specified on the model.
-- Certain constraints are sometimes also specified, such as identification of primary keys.

-- Create a Database table to represent the "User" entity.
CREATE TABLE Users(
	user_id	INTEGER NOT NULL,
    name VARCHAR(64),
	username	VARCHAR(64),
	password	VARCHAR(64),
	age	INTEGER,
	address	VARCHAR(64),
	email	VARCHAR(64),
	phone_number	NUMBER(15,2),
	-- Specify the PRIMARY KEY constraint for table "User".
	-- This indicates which attribute(s) uniquely identify each row of data.
	CONSTRAINT	pk_User PRIMARY KEY (user_id)
);

CREATE TABLE Courses
(
	course_id INTEGER NOT NULL,
	course_name VARCHAR(64),
	CONSTRAINT pk_courses PRIMARY KEY (course_id)
);

CREATE TABLE Courses_Enrolled
(
	enrolled_id INTEGER NOT NULL,
	fk_users_id INTEGER NOT NULL,
	fk_courses_id INTEGER NOT NULL,
	CONSTRAINT pk_enrolled PRIMARY KEY (enrolled_id)
);

-- Create a Database table to represent the "Quizzes" entity.
CREATE TABLE Quizzes(
	quizzes_id	INTEGER NOT NULL,
	quiz_name	VARCHAR(64),
	fk_courses_id INTEGER NOT NULL,
	-- Specify the PRIMARY KEY constraint for table "Quizzes".
	-- This indicates which attribute(s) uniquely identify each row of data.
	CONSTRAINT	pk_Quizzes PRIMARY KEY (quizzes_id)
);

-- Create a Database table to represent the "Interest_Rate" entity.
CREATE TABLE Interest_Rate(
	rate_id	INTEGER NOT NULL,
	bank_name	VARCHAR(64),
	loan_interest	DECIMAL(8,2),
	saving_interest	DECIMAL(8,2),
	-- Specify the PRIMARY KEY constraint for table "Interest_Rate".
	-- This indicates which attribute(s) uniquely identify each row of data.
	CONSTRAINT	pk_Interest_Rate PRIMARY KEY (rate_id)
);

-- Create a Database table to represent the "Transaction" entity.
CREATE TABLE Transaction(
	transaction_id	INTEGER NOT NULL,
	debit_amount	NUMBER(15,2),
	credit_amount	NUMBER(15,2),
	spendable_amount	NUMBER(15,2),
	investment_amount	NUMBER(15,2),
	saving_amount	NUMBER(15,2),
	fk1_user_id	INTEGER NOT NULL,
	-- Specify the PRIMARY KEY constraint for table "Transaction".
	-- This indicates which attribute(s) uniquely identify each row of data.
	CONSTRAINT	pk_Transaction PRIMARY KEY (transaction_id)
);

-- Create a Database table to represent the "Score" entity.
CREATE TABLE Score(
	score_id	INTEGER NOT NULL,
	score_date	DATE,
    score_amount Number(5,2),
	fk1_user_id	INTEGER NOT NULL,
	fk2_quizzes_id	INTEGER NOT NULL,
	-- Specify the PRIMARY KEY constraint for table "Score".
	-- This indicates which attribute(s) uniquely identify each row of data.
	CONSTRAINT	pk_Score PRIMARY KEY (score_id)
);

-- Create a Database table to represent the "Quizzes_Question" entity.
CREATE TABLE Quizzes_Question(
	question_id	INTEGER NOT NULL,
	questions	VARCHAR(200),
	option_a	VARCHAR(200),
	option_b	VARCHAR(200),
	option_c	VARCHAR(200),
	option_d	VARCHAR(200),
	fk1_quizzes_id	INTEGER NOT NULL,
	-- Specify the PRIMARY KEY constraint for table "Quizzes_Question".
	-- This indicates which attribute(s) uniquely identify each row of data.
	CONSTRAINT	pk_Quizzes_Question PRIMARY KEY (question_id)
);


--------------------------------------------------------------
-- Alter Tables to add fk constraints --

-- Now all the tables have been created the ALTER TABLE command is used to define some additional
-- constraints.  These typically constrain values of foreign keys to be associated in some way
-- with the primary keys of related tables.  Foreign key constraints can actually be specified
-- when each table is created, but doing so can lead to dependency problems within the script
-- i.e. tables may be referenced before they have been created.  This method is therefore safer.

-- Alter table to add new constraints required to implement the "Transaction_User" relationship

-- This constraint ensures that the foreign key of table "Transaction"
-- correctly references the primary key of table "User"

ALTER TABLE Transaction ADD CONSTRAINT fk1_Transaction_to_User FOREIGN KEY(fk1_user_id) REFERENCES Users(user_id) ;

-- Alter table to add new constraints required to implement the "Score_User" relationship

-- This constraint ensures that the foreign key of table "Score"
-- correctly references the primary key of table "User"

ALTER TABLE Score ADD CONSTRAINT fk1_Score_to_User FOREIGN KEY(fk1_user_id) REFERENCES Users(user_id) ;

-- Alter table to add new constraints required to implement the "Score_Quizzes" relationship

-- This constraint ensures that the foreign key of table "Score"
-- correctly references the primary key of table "Quizzes"

ALTER TABLE Score ADD CONSTRAINT fk2_Score_to_Quizzes FOREIGN KEY(fk2_quizzes_id) REFERENCES Quizzes(quizzes_id) ;

-- Alter table to add new constraints required to implement the "Quizzes_Question_Quizzes" relationship

-- This constraint ensures that the foreign key of table "Quizzes_Question"
-- correctly references the primary key of table "Quizzes"

ALTER TABLE Quizzes_Question ADD CONSTRAINT fk1_Quizzes_Question_to_Quizzes FOREIGN KEY(fk1_quizzes_id) REFERENCES Quizzes(quizzes_id) ;

ALTER TABLE Courses_Enrolled ADD CONSTRAINT fk1_users_id FOREIGN KEY(fk_users_id) REFERENCES Users(user_id);
ALTER TABLE Courses_Enrolled ADD CONSTRAINT fk2_courses_id FOREIGN KEY(fk_courses_id) REFERENCES Courses(course_id);
ALTER TABLE Quizzes ADD CONSTRAINT fk3_courses_id FOREIGN KEY(fk_courses_id) REFERENCES Courses(course_id);

--------------------------------------------------------------
-- End of DDL file auto-generation
--------------------------------------------------------------