INSERT INTO Users (user_id, username, password, age, address, email, phone_number) 
VALUES 
(1, 'JohnDoe', 'password123', 30, '123 Main St', 'johndoe@example.com', 9876543210);
INSERT INTO Users (user_id, username, password, age, address, email, phone_number) 
VALUES 
(2, 'JaneSmith', 'securepass', 28, '456 Elm St', 'janesmith@example.com', 9876543211);
INSERT INTO Quizzes (quizzes_id, quiz_name) 
VALUES 
(1, 'General Knowledge');
INSERT INTO Quizzes (quizzes_id, quiz_name) 
VALUES 
(2, 'Math Quiz');
INSERT INTO Interest_Rate (rate_id, bank_name, loan_interest, saving_interest) 
VALUES 
(1, 'Bank A', 8.5, 4.0);
INSERT INTO Interest_Rate (rate_id, bank_name, loan_interest, saving_interest) 
VALUES 
(2, 'Bank B', 7.9, 3.5);
INSERT INTO Transaction (transaction_id, debit_amount, credit_amount, spendable_amount, investment_amount, saving_amount, fk1_user_id) 
VALUES 
(1, 500.00, 1000.00, 200.00, 300.00, 500.00, 1);
INSERT INTO Transaction (transaction_id, debit_amount, credit_amount, spendable_amount, investment_amount, saving_amount, fk1_user_id) 
VALUES 
(2, 200.00, 800.00, 100.00, 200.00, 500.00, 2);
INSERT INTO Score (score_id, score_date, fk1_user_id, fk2_quizzes_id) 
VALUES 
(1, TO_DATE('2024-11-20', 'YYYY-MM-DD'), 1, 1);
INSERT INTO Score (score_id, score_date, fk1_user_id, fk2_quizzes_id) 
VALUES 
(2, TO_DATE('2024-11-21', 'YYYY-MM-DD'), 2, 2);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) 
VALUES 
(1, 'What is the capital of France?', 'Paris', 'London', 'Berlin', 'Madrid', 1);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) 
VALUES 
(2, 'What is 5 + 3?', '5', '6', '8', '9', 2);
