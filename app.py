import os
import sys
import cx_Oracle
from flask_cors import CORS

from flask import Flask, request, jsonify

# Flask app initialization
app = Flask(__name__)

CORS(app)
# Database credentials
Python_Username = "Arthagyan"
Python_Password = "Admin123$"
Python_ConnectString = "localhost:1521/XEPDB1"
port = 5000

# Initialize Oracle client
if sys.platform.startswith("darwin"):
    cx_Oracle.init_oracle_client(lib_dir=os.path.expanduser("~/instantclient_23_6"))
elif sys.platform.startswith("win32"):
    cx_Oracle.init_oracle_client(lib_dir=r"c:\\OracleIC\\")

# Initialize session
def init_session(connection, requestedTag_ignored):
    cursor = connection.cursor()
    cursor.execute("ALTER SESSION SET TIME_ZONE = 'UTC'")
    cursor.execute("ALTER SESSION SET NLS_DATE_FORMAT = 'YYYY-MM-DD HH24:MI'")


# Start connection pool
def start_pool():
    pool_min = 4
    pool_max = 4
    pool_inc = 0
    pool_gmd = cx_Oracle.SPOOL_ATTRVAL_WAIT

    print(f"Connecting to {Python_ConnectString}")

    pool = cx_Oracle.SessionPool(
        user=Python_Username,
        password=Python_Password,
        dsn=Python_ConnectString,
        min=pool_min,
        max=pool_max,
        increment=pool_inc,
        threaded=True,
        getmode=pool_gmd,
        sessionCallback=init_session
    )

    return pool

# Global pool variable
pool = start_pool()

@app.route("/")
def home():
    return "Flask App Connected to Oracle Database!"

@app.route("/login", methods=["POST"])
def login():
    try:
        # Get username and password from the request
        data = request.get_json()
        email = data.get("email")
        password = data.get("password")
        
        if not email or not password:
            return jsonify({"error": "Username and password are required"}), 400

        # Use a pooled connection
        with pool.acquire() as connection:
            cursor = connection.cursor()
            
            # Query to verify the user
            query = """
                SELECT COUNT(*) FROM users
                WHERE email = :email AND password = :password
            """
            cursor.execute(query, {"email": email, "password": password})
            result = cursor.fetchone()

            # Check if user exists
            if result[0] > 0:
                query = """
                SELECT username,user_id FROM users
                WHERE email = :email AND password = :password
            """
                cursor.execute(query, {"email": email, "password": password})
                result = cursor.fetchone()
                print(result)

                return jsonify({"name":result[0],"user_id":result[1], "message": "Login successful!"}), 200
            else:
                return jsonify({"error": "Invalid username or password"}), 401

    except cx_Oracle.DatabaseError as e:
        error, = e.args
        return jsonify({"error": f"Database error: {error.message}"}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/register", methods=["POST"])
def register():
    try:
        # Get user details from the request
        data = request.get_json()
        username = data.get("username")
        password = data.get("password")
        age = data.get("age")
        address = data.get("address")
        email = data.get("email")
        phone_number = data.get("phone_number")
        
        # Validate input
        if not username or not password or not email:
            return jsonify({"error": "Username, password, and email are required"}), 400

        # Use a pooled connection
        with pool.acquire() as connection:
            cursor = connection.cursor()
            
            # Check if the email already exists
            check_query = "SELECT COUNT(*) FROM users WHERE email = :email"
            cursor.execute(check_query, {"email": email})
            result = cursor.fetchone()
            
            if result[0] > 0:
                return jsonify({"error": "Email already registered"}), 400

            # Insert new user into the database
            insert_query = """
                INSERT INTO users (user_id, username, password, age, address, email, phone_number)
                VALUES (users_seq.NEXTVAL, :username, :password, :age, :address, :email, :phone_number)
            """
            cursor.execute(insert_query, {
                "username": username,
                "password": password,
                "age": age,
                "address": address,
                "email": email,
                "phone_number": phone_number
            })
            connection.commit()

            return jsonify({"message": "User registered successfully!"}), 201

    except cx_Oracle.DatabaseError as e:
        error, = e.args
        return jsonify({"error": f"Database error: {error.message}"}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/enroll", methods=["POST"])
def enroll():
    """
    Enroll a user into a course.
    """
    try:
        data = request.get_json()
        user_id = data.get("user_id")
        course_id = data.get("course_id")
        
        if not user_id or not course_id:
            return jsonify({"error": "User ID and Course ID are required"}), 400
        
        with pool.acquire() as connection:
            cursor = connection.cursor()
            
            # Insert into Courses_Enrolled table
            query = """
                INSERT INTO Courses_Enrolled (enrolled_id, fk_users_id, fk_courses_id)
                VALUES (enrolled_seq.NEXTVAL, :user_id, :course_id)
            """
            cursor.execute(query, {"user_id": user_id, "course_id": course_id})
            connection.commit()

            return jsonify({"message": "User enrolled successfully!"}), 201
    
    except cx_Oracle.DatabaseError as e:
        error, = e.args
        return jsonify({"error": f"Database error: {error.message}"}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/getUserScore/<int:user_id>", methods=["GET"])
def get_user_score(user_id):
    """
    Fetch scores for a specific user.
    """
    try:
        with pool.acquire() as connection:
            cursor = connection.cursor()
            query = """
                SELECT 
                AVG(s.score_amount) AS average_score, 
                COUNT(*) AS quiz_count
                FROM 
                Score s
                JOIN 
                Quizzes q ON s.fk2_quizzes_id = q.quizzes_id
                WHERE 
                s.fk1_user_id = :user_id
                Group By s.fk1_user_id;

            """
            cursor.execute(query, {"user_id": user_id})
            scores = [
                {"average_score": row[0],"quiz_count": row[1]}
                for row in cursor.fetchall()
            ]

            return jsonify(scores), 200

    except cx_Oracle.DatabaseError as e:
        error, = e.args
        return jsonify({"error": f"Database error: {error.message}"}), 500

@app.route("/getAllUserScores", methods=["GET"])
def get_all_user_scores():
    """
    Fetch scores for all users.
    """
    try:
        with pool.acquire() as connection:
            cursor = connection.cursor()
            query = """
                SELECT s.score_id, s.score_date, u.username, q.quiz_name, s.score_id
                FROM Score s
                JOIN Users u ON s.fk1_user_id = u.user_id
                JOIN Quizzes q ON s.fk2_quizzes_id = q.quizzes_id
            """
            cursor.execute(query)
            scores = [
                {"score_id": row[0], "score_date": row[1], "username": row[2], "quiz_name": row[3], "score": row[4]}
                for row in cursor.fetchall()
            ]

            return jsonify(scores), 200

    except cx_Oracle.DatabaseError as e:
        error, = e.args
        return jsonify({"error": f"Database error: {error.message}"}), 500


@app.route("/getAllCourses", methods=["GET"])
def get_all_courses():
    """
    Fetch all available courses.
    """
    try:
        with pool.acquire() as connection:
            cursor = connection.cursor()
            query = "SELECT course_id, course_name FROM Courses"
            cursor.execute(query)
            courses = [{"course_id": row[0], "course_name": row[1]} for row in cursor.fetchall()]

            return jsonify(courses), 200

    except cx_Oracle.DatabaseError as e:
        error, = e.args
        return jsonify({"error": f"Database error: {error.message}"}), 500


@app.route("/getAllQuizzes", methods=["GET"])
def get_all_quizzes():
    """
    Fetch all quizzes.
    """
    try:
        with pool.acquire() as connection:
            cursor = connection.cursor()
            query = "SELECT quizzes_id, quiz_name FROM Quizzes"
            cursor.execute(query)
            quizzes = [{"quiz_id": row[0], "quiz_name": row[1]} for row in cursor.fetchall()]

            return jsonify(quizzes), 200

    except cx_Oracle.DatabaseError as e:
        error, = e.args
        return jsonify({"error": f"Database error: {error.message}"}), 500


@app.route("/getQuizForCourse/<int:course_id>", methods=["GET"])
def get_quiz_for_course(course_id):
    """
    Fetch quizzes and their questions for a specific course.
    """
    try:
        with pool.acquire() as connection:
            cursor = connection.cursor()
            query = """
                SELECT 
                    q.quizzes_id, 
                    q.quiz_name,
                    qq.question_id,
                    qq.questions,
                    qq.option_a,
                    qq.option_b,
                    qq.option_c,
                    qq.option_d
                FROM Quizzes q
                LEFT JOIN Quizzes_Question qq ON q.quizzes_id = qq.fk1_quizzes_id
                WHERE q.fk_courses_id = :course_id
            """
            cursor.execute(query, {"course_id": course_id})
            results = cursor.fetchall()
            
            quizzes = {}
            for row in results:
                quiz_id = row[0]
                if quiz_id not in quizzes:
                    quizzes[quiz_id] = {
                        "quiz_id": quiz_id,
                        "quiz_name": row[1],
                        "questions": []
                    }
                if row[2]:  # If there are questions
                    quizzes[quiz_id]["questions"].append({
                        "question_id": row[2],
                        "question": row[3],
                        "options": {
                            "option_a": row[4],
                            "option_b": row[5],
                            "option_c": row[6],
                            "option_d": row[7],
                        }
                    })
            
            return jsonify(list(quizzes.values())), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/getQuizQuestions/<int:quiz_id>", methods=["GET"])
def get_quiz_questions(quiz_id):
    """
    Fetch questions and options for a specific quiz.
    """
    try:
        with pool.acquire() as connection:
            cursor = connection.cursor()
            query = """
                SELECT 
                    qq.question_id,
                    qq.questions,
                    qq.option_a,
                    qq.option_b,
                    qq.option_c,
                    qq.option_d
                FROM Quizzes_Question qq
                WHERE qq.fk1_quizzes_id = :quiz_id
            """
            cursor.execute(query, {"quiz_id": quiz_id})
            results = cursor.fetchall()
            
            questions = [
                {
                    "question_id": row[0],
                    "question": row[1],
                    "options": {
                        "option_a": row[2],
                        "option_b": row[3],
                        "option_c": row[4],
                        "option_d": row[5],
                    }
                }
                for row in results
            ]
            
            return jsonify(questions), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/getUserData/<int:user_id>", methods=["GET"])
def get_user_data(user_id):
    """
    Fetch user details for a specific user.
    """
    try:
        with pool.acquire() as connection:
            cursor = connection.cursor()
            query = """
                SELECT user_id, name, username, age, address, email, phone_number
                FROM Users
                WHERE user_id = :user_id
            """
            cursor.execute(query, {"user_id": user_id})
            user = cursor.fetchone()
            
            if user:
                user_data = {
                    "user_id": user[0],
                    "name": user[1],
                    "username": user[2],
                    "age": user[3],
                    "address": user[4],
                    "email": user[5],
                    "phone_number": user[6]
                }
                return jsonify(user_data), 200
            else:
                return jsonify({"error": "User not found"}), 404

    except cx_Oracle.DatabaseError as e:
        error, = e.args
        return jsonify({"error": f"Database error: {error.message}"}), 500
    
@app.route("/addUserScore", methods=["POST"])
def add_user_score():
    """
    Add a new score for a user to the Score table, using a sequence for score_id.
    """
    try:
        # Get the data from the request
        data = request.get_json()

        print(data)
        # Extract required fields
        score_date = data.get("score_date")
        fk1_user_id = data.get("fk1_user_id")
        fk2_quizzes_id = data.get("fk2_quizzes_id")

        # if not all([score_date, fk1_user_id, fk2_quizzes_id]):
        #     return jsonify({"error": "Missing required fields"}), 400

        with pool.acquire() as connection:
            cursor = connection.cursor()

            # Get the next value from the sequence
            cursor.execute("SELECT score_id_seq.NEXTVAL FROM DUAL")
            score_id = cursor.fetchone()[0]

            # SQL query to insert the data
            query = """
                INSERT INTO Score (score_id, score_date, fk1_user_id, fk2_quizzes_id)
                VALUES (:score_id, TO_DATE(:score_date, 'YYYY-MM-DD'), :fk1_user_id, :fk2_quizzes_id)
            """
            cursor.execute(query, {
                "score_id": score_id,
                "score_date": score_date,
                "fk1_user_id": fk1_user_id,
                "fk2_quizzes_id": fk2_quizzes_id
            })

            # Commit the transaction
            connection.commit()
            
            return jsonify({"message": "Score added successfully", "score_id": score_id}), 201

    except cx_Oracle.DatabaseError as e:
        error, = e.args
        return jsonify({"error": f"Database error: {error.message}"}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    # Start Flask server
    app.run(host='192.168.137.1',port=port)
