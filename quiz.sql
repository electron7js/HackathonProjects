-- Insert into Quizzes
INSERT INTO Quizzes (quizzes_id, quiz_name, fk_courses_id) VALUES (0, 'Basics of Banking', 1);
INSERT INTO Quizzes (quizzes_id, quiz_name, fk_courses_id) VALUES (1, 'Banking in Nepal', 2);
INSERT INTO Quizzes (quizzes_id, quiz_name, fk_courses_id) VALUES (2, 'Central Banks', 3);
INSERT INTO Quizzes (quizzes_id, quiz_name, fk_courses_id) VALUES (3, 'Cheques and their Types', 4);
INSERT INTO Quizzes (quizzes_id, quiz_name, fk_courses_id) VALUES (4, 'Understanding Interest', 5);
INSERT INTO Quizzes (quizzes_id, quiz_name, fk_courses_id) VALUES (5, 'Understanding Bank Loans', 6);
INSERT INTO Quizzes (quizzes_id, quiz_name, fk_courses_id) VALUES (6, 'Understanding Credit Score', 7);
INSERT INTO Quizzes (quizzes_id, quiz_name, fk_courses_id) VALUES (7, 'Basics of Stocks', 8);
INSERT INTO Quizzes (quizzes_id, quiz_name, fk_courses_id) VALUES (8, 'Basics of Stock Trading', 9);
INSERT INTO Quizzes (quizzes_id, quiz_name, fk_courses_id) VALUES (9, 'Understanding Candlestick Patterns', 10);

-- Insert into Quizzes_Question
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(1, 'What is a bank?', 'A financial institution', 'A place to borrow books', 'A stock market agency', 'A loan company', 0);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(2, 'What is the main function of a bank?', 'To provide financial services', 'To sell goods', 'To create laws', 'To promote tourism', 0);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(3, 'What is a savings account?', 'An account to save money and earn interest', 'A loan account', 'A business account', 'An insurance policy', 0);

-- Basics of Banking Questions
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(4, 'Which of these is a type of deposit account?', 'Checking account', 'Credit card account', 'Loan account', 'Insurance account', 0);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(5, 'What is a fixed deposit?', 'A type of savings account with a fixed term', 'An account with fixed charges', 'An investment in stocks', 'A loan agreement', 0);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(6, 'What is a current account used for?', 'Day-to-day transactions', 'Long-term savings', 'Stock trading', 'Real estate investments', 0);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(7, 'What does an overdraft allow you to do?', 'Withdraw more money than you have in your account', 'Earn extra interest', 'Invest in stocks', 'Close your account early', 0);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(8, 'Who is the main regulator of banks in most countries?', 'The central bank', 'The stock exchange', 'The government', 'Private auditors', 0);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(9, 'What is a loan?', 'Money borrowed from a bank', 'Money deposited in your account', 'Interest earned on savings', 'A type of fixed deposit', 0);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(10, 'What is interest?', 'Earnings on savings or charges on loans', 'A penalty fee', 'A loan repayment plan', 'A type of bank account', 0);

-- Continue with the same adjustments for all the remaining questions, ensuring that the correct answer is always in `option_a`.
-- Banking in Nepal Questions
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(11, 'What is the central bank of Nepal called?', 'Nepal Rastra Bank', 'Nepal Reserve Bank', 'Nepal Central Bank', 'Nepal Bank Corporation', 1);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(12, 'When was Nepal Rastra Bank established?', '1956', '1940', '1955', '1934', 1);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(13, 'Which is the first commercial bank in Nepal?', 'Nepal Bank Limited', 'Rastriya Banijya Bank', 'Standard Chartered Bank', 'Agricultural Development Bank', 1);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(14, 'What is the primary role of Nepal Rastra Bank?', 'Issuing currency and regulating monetary policy', 'Providing loans to the public', 'Running commercial banks', 'Controlling stock markets', 1);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(15, 'Which bank is government-owned in Nepal?', 'Rastriya Banijya Bank', 'Nepal Investment Bank', 'Standard Chartered Bank', 'Nepal SBI Bank', 1);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(16, 'What does "CRR" stand for in Nepalese banking?', 'Cash Reserve Ratio', 'Currency Regulation Ratio', 'Credit Risk Ratio', 'Central Regulatory Reserve', 1);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(17, 'What is "microfinance" in Nepal?', 'Financial services for low-income groups', 'Loans given to large industries', 'Banking limited to urban areas', 'Investment in the stock market', 1);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(18, 'Which of the following is an example of a development bank in Nepal?', 'Agricultural Development Bank', 'Nepal Investment Bank', 'Rastriya Banijya Bank', 'Nepal Rastra Bank', 1);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(19, 'What is the maximum deposit insurance amount in Nepal?', 'NRs 5,00,000', 'NRs 2,00,000', 'NRs 10,00,000', 'NRs 7,50,000', 1);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(20, 'Which act regulates the banking sector in Nepal?', 'Bank and Financial Institution Act (BAFIA)', 'Nepal Banking Act', 'Nepal Financial Act', 'Monetary Policy Act', 1);

-- Central Banks Questions
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(21, 'What is the primary role of a central bank?', 'Managing a country''s monetary policy', 'Regulating stock markets', 'Providing personal loans', 'Running businesses', 2);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(22, 'What is inflation?', 'An increase in prices', 'A decrease in prices', 'A type of tax', 'A government policy', 2);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(23, 'What is monetary policy?', 'A strategy to manage money supply and interest rates', 'A plan to regulate stock trading', 'A way to increase government spending', 'A policy to manage trade with other countries', 2);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(24, 'Which tool is NOT used by central banks?', 'Setting the tax rate', 'Open market operations', 'Adjusting the interest rate', 'Setting reserve requirements', 2);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(25, 'What is the main objective of a central bank''s monetary policy?', 'Control inflation and stabilize currency', 'Regulate private businesses', 'Provide funding for large industries', 'Monitor household expenses', 2);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(26, 'What is a "repo rate"?', 'The rate at which central banks lend to commercial banks', 'The rate at which banks lend to the public', 'The tax rate on repossessed assets', 'The rate for long-term fixed deposits', 2);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(27, 'What is the "lender of last resort" function of central banks?', 'Providing loans to banks in financial distress', 'Lending to the public during emergencies', 'Lending to other countries', 'Financing government projects', 2);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(28, 'What is "quantitative easing"?', 'Increasing money supply through asset purchases', 'Reducing bank reserve requirements', 'Raising interest rates', 'Decreasing taxes', 2);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(29, 'Which of the following is NOT a central bank?', 'World Bank', 'Federal Reserve', 'European Central Bank', 'Bank of England', 2);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(30, 'Which institution regulates banks in a country?', 'Central bank', 'Commercial banks', 'Finance Ministry', 'Stock Exchange', 2);


-- Cheques and Their Types Questions
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(31, 'What is a cheque?', 'An order to a bank to pay a specified sum', 'A type of bond', 'A form of loan', 'A financial statement', 3);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(32, 'What is a crossed cheque?', 'A cheque with two parallel lines drawn on it', 'A cheque without a signature', 'A cheque used for foreign payments', 'A cheque used for cash withdrawals', 3);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(33, 'What is a bearer cheque?', 'A cheque payable to the person holding it', 'A cheque for international payments', 'A cheque that requires two signatures', 'A cheque used for electronic transactions', 3);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(34, 'What is the validity period of a cheque in most countries?', '3 months', '6 months', '12 months', 'No expiration', 3);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(35, 'What is a post-dated cheque?', 'A cheque with a future date', 'A cheque without a payee name', 'A cheque for foreign currency', 'A cheque that has expired', 3);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(36, 'What is a stale cheque?', 'A cheque presented after its validity period', 'A cheque without sufficient funds', 'A cheque written in foreign currency', 'A cheque with multiple signatures', 3);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(37, 'What is an account payee cheque?', 'A cheque that can only be deposited into the payee''s account', 'A cheque for cash withdrawal', 'A cheque with no payee name', 'A cheque for international transfers', 3);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(38, 'What is a dishonored cheque?', 'A cheque that the bank refuses to pay', 'A cheque that has expired', 'A cheque with insufficient funds', 'A cheque written in a foreign language', 3);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(39, 'What is the MICR code on a cheque?', 'Magnetic Ink Character Recognition code', 'Microchip Identification Code', 'Monetary International Code', 'Machine Input Control Record', 3);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(40, 'Which part of a cheque contains the bank''s branch information?', 'MICR code', 'Payee''s name', 'Drawer''s signature', 'Cheque number', 3);

-- Understanding Interest Questions
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(41, 'What is simple interest?', 'Interest earned on the principal only', 'Interest earned on principal and previously earned interest', 'Interest charged by banks', 'A fixed fee for borrowing money', 4);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(42, 'What is compound interest?', 'Interest earned on principal and accumulated interest', 'Interest earned on the principal only', 'Interest charged for late payments', 'Interest calculated annually', 4);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(43, 'What is the formula for simple interest?', 'P × R × T / 100', 'P × R / 100', 'P × T / 100', 'R × T / 100', 4);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(44, 'What does "P" stand for in interest calculations?', 'Principal amount', 'Percentage', 'Profit', 'Period of time', 4);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(45, 'How is compound interest typically calculated?', 'All of the above', 'Annually', 'Monthly', 'Daily', 4);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(46, 'What does "R" represent in interest calculations?', 'Rate of interest', 'Revenue', 'Repayment', 'Return', 4);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(47, 'What is an annual percentage rate (APR)?', 'A yearly rate charged for borrowing', 'The monthly interest rate', 'The amount repaid monthly', 'A fixed fee for financial services', 4);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(48, 'What is the difference between nominal and effective interest rates?', 'Nominal is the stated rate, while effective accounts for compounding', 'Effective is the stated rate, while nominal includes fees', 'Nominal applies to short-term loans, while effective applies to long-term loans', 'They are the same', 4);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(49, 'What does "T" represent in interest calculations?', 'Time', 'Tax', 'Total payment', 'Transaction fee', 4);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(50, 'Which type of interest grows faster over time?', 'Compound interest', 'Simple interest', 'Fixed interest', 'Reduced interest', 4);


-- Understanding Bank Loans Questions
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(51, 'What is a bank loan?', 'An amount of money borrowed from a bank', 'A type of bank account', 'A government grant', 'A fixed deposit', 5);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(52, 'What is collateral in a loan?', 'An asset pledged as security for a loan', 'The interest rate of a loan', 'The monthly installment', 'The loan repayment term', 5);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(53, 'What is the principal amount in a loan?', 'The original amount borrowed', 'The interest charged on the loan', 'The total amount repaid', 'The processing fee for the loan', 5);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(54, 'What is an EMI?', 'Equated Monthly Installment', 'Estimated Monthly Interest', 'Expected Mortgage Income', 'Extended Monthly Installment', 5);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(55, 'What is a fixed-rate loan?', 'A loan with a constant interest rate over its term', 'A loan where the interest rate changes periodically', 'A loan with no interest rate', 'A loan with no repayment schedule', 5);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(56, 'What is a variable-rate loan?', 'A loan where the interest rate changes based on market conditions', 'A loan with no interest rate', 'A loan with a fixed repayment amount', 'A loan with no collateral', 5);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(57, 'What is the tenure of a loan?', 'The length of time to repay the loan', 'The interest rate of the loan', 'The processing fee of the loan', 'The collateral for the loan', 5);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(58, 'What is a secured loan?', 'A loan backed by collateral', 'A loan without any collateral', 'A loan offered to small businesses', 'A short-term loan', 5);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(59, 'What is an unsecured loan?', 'A loan that does not require collateral', 'A loan backed by property', 'A loan for fixed assets', 'A government subsidy loan', 5);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(60, 'What happens if a borrower defaults on a loan?', 'The lender can seize the collateral', 'The loan is forgiven', 'The interest rate is reduced', 'The borrower gets a reward', 5);

-- Understanding Credit Score Questions
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(61, 'What is a credit score?', 'A numerical representation of creditworthiness', 'The interest rate on a loan', 'The amount of money borrowed', 'A type of financial penalty', 6);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(62, 'Which range is generally considered a good credit score?', '700-850', '300-500', '400-600', '500-650', 6);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(63, 'What factors affect your credit score?', 'Payment history and credit utilization', 'Your height', 'The amount of cash in your wallet', 'The number of apps on your phone', 6);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(64, 'What does a low credit score indicate?', 'A higher credit risk', 'A higher loan approval rate', 'Good financial stability', 'No borrowing history', 6);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(65, 'How can you improve your credit score?', 'Pay bills on time and reduce credit usage', 'Avoid paying bills', 'Spend more than you earn', 'Cancel all credit cards', 6);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(66, 'Which organization monitors credit scores?', 'Credit bureaus', 'The central bank', 'Stock exchanges', 'Commercial banks', 6);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(67, 'What is credit utilization?', 'The ratio of credit used to credit available', 'The amount of money in your savings account', 'The number of loans you’ve taken', 'The total amount of interest paid', 6);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(68, 'What is a credit report?', 'A detailed record of your credit history', 'A list of items you purchased', 'An analysis of your savings', 'Your bank account balance', 6);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(69, 'What is the impact of missed payments on your credit score?', 'It decreases your score significantly', 'It has no impact', 'It increases your score', 'It removes your credit history', 6);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(70, 'Can checking your credit score frequently affect it?', 'No, checking your score doesn''t affect it', 'Yes, it lowers your score', 'Yes, it increases your score', 'Yes, it removes old data', 6);

-- Basics of Stocks Questions
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(71, 'What is a stock?', 'A share in the ownership of a company', 'A type of bond', 'A fixed deposit', 'A type of loan', 7);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(72, 'What is an IPO?', 'Initial Public Offering', 'Internal Profit Optimization', 'Investment Portfolio Objective', 'Income Per Owner', 7);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(73, 'What is a dividend?', 'A share of company profits paid to shareholders', 'A loan from shareholders', 'A type of stock', 'A company expense', 7);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(74, 'What is the stock market?', 'A marketplace for buying and selling stocks', 'A place for trading only bonds', 'A marketplace for goods', 'A marketplace for real estate', 7);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(75, 'What is market capitalization?', 'The total value of a company''s shares', 'The total profit of a company', 'The total revenue of a company', 'The total debt of a company', 7);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(76, 'What is a bull market?', 'A market condition where prices are rising', 'A market condition where prices are falling', 'A market with no trading activity', 'A market for agricultural products', 7);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(77, 'What is a bear market?', 'A market condition where prices are falling', 'A market condition where prices are rising', 'A stable market', 'A market for livestock', 7);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(78, 'What is a stock exchange?', 'A regulated marketplace for trading stocks', 'A type of financial institution', 'A bank that issues loans', 'A company that manages mutual funds', 7);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(79, 'What is a blue-chip stock?', 'A stock of a large, reputable company', 'A stock of a new, unknown company', 'A government bond', 'A penny stock', 7);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(80, 'What does P/E ratio stand for?', 'Price-to-Earnings ratio', 'Profit-to-Evaluation ratio', 'Payment-to-Equity ratio', 'Price-to-Equity ratio', 7);

-- Basics of Stock Trading Questions
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(81, 'What is stock trading?', 'The buying and selling of stocks', 'The issuance of new bonds', 'The management of company assets', 'A government investment scheme', 8);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(82, 'What is a stockbroker?', 'A professional who facilitates stock trading', 'A company manager', 'A bank employee', 'A government official', 8);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(83, 'What is a trading account?', 'An account used to buy and sell securities', 'A savings account', 'A fixed deposit account', 'A current account for businesses', 8);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(84, 'What is day trading?', 'Buying and selling stocks within the same trading day', 'Investing in stocks for a decade', 'Trading in commodities only', 'Trading stocks at night', 8);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(85, 'What is a limit order?', 'An order to buy or sell a stock at a specified price', 'An order to buy any available stock', 'An order to sell stocks at market price', 'A ban on trading specific stocks', 8);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(86, 'What is a market order?', 'An order to buy or sell immediately at the current market price', 'An order to buy stocks on a specific date', 'An order to hold stocks for a year', 'An order to short-sell', 8);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(87, 'What is short selling?', 'Selling borrowed stocks with the hope of buying them back at a lower price', 'Selling stocks at a higher price', 'Selling stocks after a decade', 'Investing in mutual funds', 8);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(88, 'What is a stop-loss order?', 'An order to sell a stock when it reaches a certain price to minimize loss', 'An order to cancel all trading activities', 'An order to increase stock value', 'An order to double the investment', 8);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(89, 'What is the role of a stock exchange?', 'Providing a platform for buying and selling securities', 'Issuing government bonds', 'Managing company profits', 'Setting tax policies', 8);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(90, 'What does "bid price" mean in stock trading?', 'The price a buyer is willing to pay for a stock', 'The price a seller wants for a stock', 'The price set by the government', 'The highest price in the market', 8);

-- Understanding Candlestick Patterns Questions
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(91, 'What is a candlestick pattern?', 'A method of charting stock prices', 'A type of government bond', 'A decorative item', 'A formula for interest calculation', 9);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(92, 'What does the "body" of a candlestick represent?', 'The range between the opening and closing prices', 'The total volume traded', 'The market''s high price', 'The market''s low price', 9);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(93, 'What do the "wicks" or "shadows" on a candlestick represent?', 'The highest and lowest prices during a trading session', 'The total profit and loss', 'The opening and closing prices', 'The volume of trade', 9);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(94, 'What does a green candlestick indicate?', 'The closing price is higher than the opening price', 'The closing price is lower than the opening price', 'No change in price', 'The stock is delisted', 9);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(95, 'What does a red candlestick indicate?', 'The closing price is lower than the opening price', 'The closing price is higher than the opening price', 'No change in price', 'The stock is undervalued', 9);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(96, 'What is a "Doji" candlestick pattern?', 'A pattern where the opening and closing prices are nearly the same', 'A pattern with no wicks', 'A pattern indicating a guaranteed profit', 'A pattern with only red candles', 9);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(97, 'What is a "Bullish Engulfing" pattern?', 'A large green candle that fully covers the previous red candle', 'A large red candle that covers the previous green candle', 'A pattern with no shadows', 'A flat trading day', 9);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(98, 'What is a "Bearish Engulfing" pattern?', 'A large red candle that fully covers the previous green candle', 'A large green candle that covers the previous red candle', 'A pattern with no volume', 'A pattern that predicts higher prices', 9);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(99, 'What is a "Hammer" candlestick?', 'A single candlestick with a small body and a long lower wick', 'A pattern with no wicks', 'A candlestick with only a large upper wick', 'A candlestick with equal wicks on both sides', 9);
INSERT INTO Quizzes_Question (question_id, questions, option_a, option_b, option_c, option_d, fk1_quizzes_id) VALUES
(100, 'What is a "Shooting Star" candlestick?', 'A candlestick with a small body and a long upper wick', 'A candlestick with no wicks', 'A pattern indicating no price movement', 'A bullish reversal pattern', 9);
