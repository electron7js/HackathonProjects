import React ,{useState,useEffect} from "react";
import "./Dashboard.css";
import ProgressBar from "./completionbar";
import { Link } from "react-router-dom";
function Dashboard() {

  const [user,setUser]=useState()
  const [loading,setLoading] = useState() 

  const [error,setError] = useState()
  var userId = localStorage.getItem("id");
  if (userId==null){
    userId =1;
  }
  useEffect(() => {
    const fetchUserData = async () => {
      const baseUrl = "localhost:5000"
      try {
        const response = await axios.get(baseUrl+`/getUserScore/${userId}`);
        setUser(response.data);
        console.log(response.data)
      } catch (err) {
        setError(err.response ? err.response.data.error : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [userId]);
  return (
    <div className="dashboard">
    

      <section className="dashboard-section">
        <h2>Quizzes</h2>
        <div className="current-quiz">
          Number of Quizzes taken:{user?user.quiz_count:""}
          <ProgressBar />
        </div>
      </section>

      <section className="dashboard-section">
        <h2>New Courses</h2>
        <div className="course-list">
          <div className="course-card">
            <div className="card-header">
              <img src="banker.png" />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="courseboard/banking" style={styles.link}>
                  Understanding Banking: A Fundamental Pillar of Modern
                  Economies
                </Link>
              </h5>
              <p className="card-text">
                A discussion abouts the fundamentals of banking
              </p>
            </div>
          </div>

          <div className="course-card">
            <div className="card-header">
              <img src="bank.png" />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="/courseboard/typesofbank" style={styles.link}>
                  Banking in Nepal
                </Link>
              </h5>
              <p className="card-text">
                A discussion about the various types of banking in Nepal
              </p>
            </div>
          </div>

          <div className="course-card">
            <div className="card-header">
              <img src="money.png" />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <Link to="/courseboard/centralbanks" style={styles.link}>
                  Central Banks and Their Importance to the Economy
                </Link>
              </h5>
              <p className="card-text">
                Discussion og the central banks and their importance to the
                economy
              </p>
            </div>
          </div>

          <div className="course-card">
            <div className="card-header">
              <img src="cheque.png" />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <Link to="courseboard/cheques" style={styles.link}>
                  Understanding Cheques and Their Types
                </Link>
              </h5>
              <p className="card-text">
                Discussion about the various types of cheques used by banks in
                nepal
              </p>
            </div>
          </div>
        </div>
        <button className="show-more">
          <Link to="/courseboard" style={{ textDecoration: "none" }}>
            Show more
          </Link>
        </button>
      </section>

      <section className="dashboard-section">
        <h2>New Quizzes</h2>
        <div className="ag-format-container">
            <div className="ag-courses_box">
              <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">
                    UI/Web&amp;Graph design for teenagers 11-17&#160;years old
                  </div>

                  <div className="ag-courses-item_date-box">
                    Start:
                    <span className="ag-courses-item_date">04.11.2022</span>
                  </div>
                </a>
              </div>

              <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">
                    UX/UI Web-Design&#160;+ Mobile Design
                  </div>

                  <div className="ag-courses-item_date-box">
                    Start:
                    <span className="ag-courses-item_date">04.11.2022</span>
                  </div>
                </a>
              </div>

              <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">
                    Annual package "Product+UX/UI+Graph designer&#160;2022"
                  </div>

                  <div className="ag-courses-item_date-box">
                    Start:
                    <span className="ag-courses-item_date">04.11.2022</span>
                  </div>
                </a>
              </div>

              <div className="ag-courses_item">
                <a href="#" className="ag-courses-item_link">
                  <div className="ag-courses-item_bg"></div>

                  <div className="ag-courses-item_title">Graphic Design</div>

                  <div className="ag-courses-item_date-box">
                    Start:
                    <span className="ag-courses-item_date">04.11.2022</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        <button className="show-more"><Link to = '/quizboard' style={{textDecoration:'none'}}>Show More</Link></button>
      </section>
    </div>
  );
}
const styles = {
  link: {
    color: "black",
    textDecoration: "none",
    fontSize: "1rem",
  },
};

export default Dashboard;
